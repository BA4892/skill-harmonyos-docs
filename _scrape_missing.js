/**
 * HarmonyOS Docs - Batch Scraper for Empty Documents
 * 
 * Re-scrapes all documents that have "文档内容空或未缓存" placeholder
 * 
 * Usage: node _scrape_missing.js [batchSize] [delayMs]
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = 'C:/Users/admin/.codeartsdoer/skills/skill-harmonyos-docs';
const EMPTY_FILE = path.join(BASE, 'empty_docs.json');
const LOG_FILE = path.join(BASE, '_scrape_progress.json');
const ERROR_LOG = path.join(BASE, '_scrape_errors.json');

// Config
const BATCH_SIZE = parseInt(process.argv[2]) || 50;
const DELAY_MS = parseInt(process.argv[3]) || 500;
const API_URL = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById';

// Load empty docs list (handle UTF-8 BOM)
let emptyContent = fs.readFileSync(EMPTY_FILE, 'utf8');
if (emptyContent.charCodeAt(0) === 0xFEFF) {
    emptyContent = emptyContent.substring(1);
}
const emptyDocs = JSON.parse(emptyContent);
console.log(`Loaded ${emptyDocs.length} empty documents to process`);

// Load progress
let progress = { processed: 0, success: 0, failed: 0, errors: [] };
if (fs.existsSync(LOG_FILE)) {
    try {
        const saved = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
        progress = saved;
        console.log(`Resuming from progress: ${progress.processed}/${emptyDocs.length}`);
    } catch (e) {}
}

// Load error log
let errorLog = [];
if (fs.existsSync(ERROR_LOG)) {
    try {
        errorLog = JSON.parse(fs.readFileSync(ERROR_LOG, 'utf8'));
    } catch (e) {}
}

// Simple HTML to Markdown converter
function htmlToMarkdown(html) {
    if (!html) return '';
    
    let md = html;
    
    // Remove HTML tags but preserve structure
    md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
    md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
    md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
    md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
    md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n');
    md = md.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n');
    
    // Paragraphs
    md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
    
    // Line breaks
    md = md.replace(/<br\s*\/?>/gi, '\n');
    
    // Lists
    md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
    md = md.replace(/<ul[^>]*>/gi, '\n');
    md = md.replace(/<\/ul>/gi, '\n');
    md = md.replace(/<ol[^>]*>/gi, '\n');
    md = md.replace(/<\/ol>/gi, '\n');
    
    // Code blocks
    md = md.replace(/<pre[^>]*><code[^>]*class="([^"]*)"[^>]*>(.*?)<\/code><\/pre>/gis, '```$1\n$2\n```\n');
    md = md.replace(/<pre[^>]*>(.*?)<\/pre>/gis, '```\n$1\n```\n');
    
    // Inline code
    md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
    
    // Bold and italic
    md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
    md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
    md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
    md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
    
    // Links
    md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
    
    // Tables - simple conversion
    md = md.replace(/<table[^>]*>/gi, '\n');
    md = md.replace(/<\/table>/gi, '\n');
    md = md.replace(/<thead[^>]*>/gi, '');
    md = md.replace(/<\/thead>/gi, '');
    md = md.replace(/<tbody[^>]*>/gi, '');
    md = md.replace(/<\/tbody>/gi, '\n');
    md = md.replace(/<tr[^>]*>/gi, '');
    md = md.replace(/<\/tr>/gi, '\n');
    md = md.replace(/<th[^>]*>(.*?)<\/th>/gi, '| $1 ');
    md = md.replace(/<td[^>]*>(.*?)<\/td>/gi, '| $1 ');
    
    // Remove remaining HTML tags
    md = md.replace(/<[^>]+>/g, '');
    
    // Decode HTML entities
    md = md.replace(/&nbsp;/g, ' ');
    md = md.replace(/&lt;/g, '<');
    md = md.replace(/&gt;/g, '>');
    md = md.replace(/&amp;/g, '&');
    md = md.replace(/&quot;/g, '"');
    md = md.replace(/&#39;/g, "'");
    md = md.replace(/&ldquo;/g, '\"');
    md = md.replace(/&rdquo;/g, '\"');
    md = md.replace(/&lsquo;/g, '\u2018');
    md = md.replace(/&rsquo;/g, '\u2019');
    
    // Clean up whitespace
    md = md.replace(/\n{3,}/g, '\n\n');
    md = md.trim();
    
    return md;
}

// Fetch document from API
function fetchDocument(slug) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            objectId: slug,
            language: 'cn'
        });
        
        const url = new URL(API_URL);
        const options = {
            hostname: url.hostname,
            path: url.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.code === 0 && json.value && json.value.content && json.value.content.content) {
                        resolve({
                            title: json.value.title,
                            content: json.value.content.content,
                            updatedDate: json.value.updatedDate
                        });
                    } else {
                        reject(new Error(`API error: code=${json.code}, message=${json.message}`));
                    }
                } catch (e) {
                    reject(new Error(`Parse error: ${e.message}`));
                }
            });
        });
        
        req.on('error', reject);
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
        
        req.write(postData);
        req.end();
    });
}

// Update document file
function updateDocument(filePath, docData) {
    const { title, content, updatedDate } = docData;
    const markdown = htmlToMarkdown(content);
    
    // Read existing file to preserve metadata header
    let existingContent = '';
    try {
        existingContent = fs.readFileSync(filePath, 'utf8');
    } catch (e) {}
    
    // Extract existing metadata - take only the first match to avoid duplicates
    let section = 'API参考';
    let apiLevel = 'API 23 (HarmonyOS 6.0)';
    let slug = '';
    let docId = '';
    let nodeId = '';
    
    const sectionMatch = existingContent.match(/\*\*分区\*\*:?\s*(.+?)(?:\n|\*\*|$)/);
    if (sectionMatch) section = sectionMatch[1].trim();
    
    const apiLevelMatch = existingContent.match(/\*\*API级别\*\*:?\s*(.+?)(?:\n|\*\*|$)/);
    if (apiLevelMatch) apiLevel = apiLevelMatch[1].trim();
    
    const slugMatch = existingContent.match(/\*\*Slug\*\*:?\s*`([^`]+)`/);
    if (slugMatch) slug = slugMatch[1];
    
    const docIdMatch = existingContent.match(/\*\*DocID\*\*:?\s*`([^`]+)`/);
    if (docIdMatch) docId = docIdMatch[1];
    
    const nodeIdMatch = existingContent.match(/\*\*NodeID\*\*:?\s*`([^`]+)`/);
    if (nodeIdMatch) nodeId = nodeIdMatch[1];
    
    // Build new content - avoid duplicate API level
    let metaParts = [`**分区**: ${section}`, `**API级别**: ${apiLevel}`];
    if (slug) metaParts.push(`**Slug**: \`${slug}\``);
    if (docId) metaParts.push(`**DocID**: \`${docId}\``);
    if (nodeId) metaParts.push(`**NodeID**: \`${nodeId}\``);
    
    const newContent = `# ${title}

> ${metaParts.join('  |  ')}

---

${markdown}

---
*Updated: ${updatedDate || new Date().toISOString()}*
`;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
}

// Save progress
function saveProgress() {
    fs.writeFileSync(LOG_FILE, JSON.stringify(progress, null, 2), 'utf8');
    fs.writeFileSync(ERROR_LOG, JSON.stringify(errorLog, null, 2), 'utf8');
}

// Main processing loop
async function processDocuments() {
    const startIdx = progress.processed;
    const toProcess = emptyDocs.slice(startIdx, startIdx + BATCH_SIZE);
    
    console.log(`\n=== Processing batch ${startIdx + 1} to ${startIdx + toProcess.length} of ${emptyDocs.length} ===`);
    
    for (let i = 0; i < toProcess.length; i++) {
        const doc = toProcess[i];
        const idx = startIdx + i;
        
        try {
            process.stdout.write(`[${idx + 1}/${emptyDocs.length}] ${doc.Slug}... `);
            
            const docData = await fetchDocument(doc.Slug);
            updateDocument(doc.Path, docData);
            
            progress.success++;
            console.log('OK');
            
            // Small delay between requests
            await new Promise(r => setTimeout(r, DELAY_MS));
            
        } catch (e) {
            progress.failed++;
            progress.errors.push({ slug: doc.Slug, path: doc.Path, error: e.message });
            errorLog.push({ doc, error: e.message, time: new Date().toISOString() });
            console.log(`FAILED: ${e.message}`);
        }
        
        progress.processed++;
        
        // Save progress every 10 documents
        if ((idx + 1) % 10 === 0) {
            saveProgress();
            console.log(`Progress saved: ${progress.processed}/${emptyDocs.length}, success=${progress.success}, failed=${progress.failed}`);
        }
    }
    
    // Final save
    saveProgress();
    console.log(`\n=== Batch complete ===`);
    console.log(`Total processed: ${progress.processed}/${emptyDocs.length}`);
    console.log(`Success: ${progress.success}, Failed: ${progress.failed}`);
    
    if (progress.processed < emptyDocs.length) {
        console.log(`\nRun again to continue...`);
    } else {
        console.log(`\nAll documents processed!`);
    }
}

// Run
processDocuments().catch(console.error);

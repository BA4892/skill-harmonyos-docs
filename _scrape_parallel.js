/**
 * HarmonyOS Docs - PARALLEL Batch Scraper for Empty Documents
 * 
 * Usage: node _scrape_parallel.js [concurrency] [batchTotal] [delayMs]
 *   concurrency: parallel requests (default 10)
 *   batchTotal:  total docs to process this run (default 99999 = all)
 *   delayMs:     delay between batches (default 100)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = 'C:/Users/admin/.codeartsdoer/skills/skill-harmonyos-docs';
const EMPTY_FILE = path.join(BASE, 'empty_docs.json');
const LOG_FILE = path.join(BASE, '_scrape_progress.json');
const ERROR_LOG = path.join(BASE, '_scrape_errors.json');

const CONCURRENCY = parseInt(process.argv[2]) || 10;
const BATCH_TOTAL = parseInt(process.argv[3]) || 99999;
const DELAY_MS = parseInt(process.argv[4]) || 100;
const API_URL = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById';

// Load empty docs (handle BOM)
let emptyContent = fs.readFileSync(EMPTY_FILE, 'utf8');
if (emptyContent.charCodeAt(0) === 0xFEFF) emptyContent = emptyContent.substring(1);
const emptyDocs = JSON.parse(emptyContent);
console.log(`Loaded ${emptyDocs.length} empty docs | Concurrency: ${CONCURRENCY} | Batch: ${BATCH_TOTAL}`);

// Load progress
let progress = { processed: 0, success: 0, failed: 0, errors: [] };
try {
    let raw = fs.readFileSync(LOG_FILE, 'utf8');
    if (raw.charCodeAt(0) === 0xFEFF) raw = raw.substring(1);
    progress = JSON.parse(raw);
    console.log(`Resuming: ${progress.processed}/${emptyDocs.length}`);
} catch (e) {}

let errorLog = [];
try {
    let raw = fs.readFileSync(ERROR_LOG, 'utf8');
    if (raw.charCodeAt(0) === 0xFEFF) raw = raw.substring(1);
    errorLog = JSON.parse(raw);
} catch (e) {}

// HTML -> Markdown (same as before)
function htmlToMarkdown(html) {
    if (!html) return '';
    let md = html;
    md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
    md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
    md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
    md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
    md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n');
    md = md.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n');
    md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
    md = md.replace(/<br\s*\/?>/gi, '\n');
    md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
    md = md.replace(/<ul[^>]*>/gi, '\n'); md = md.replace(/<\/ul>/gi, '\n');
    md = md.replace(/<ol[^>]*>/gi, '\n'); md = md.replace(/<\/ol>/gi, '\n');
    md = md.replace(/<pre[^>]*><code[^>]*class="([^"]*)"[^>]*>(.*?)<\/code><\/pre>/gis, '```$1\n$2\n```\n');
    md = md.replace(/<pre[^>]*>(.*?)<\/pre>/gis, '```\n$1\n```\n');
    md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
    md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
    md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
    md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
    md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
    md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
    md = md.replace(/<table[^>]*>/gi, '\n'); md = md.replace(/<\/table>/gi, '\n');
    md = md.replace(/<thead[^>]*>/gi, ''); md = md.replace(/<\/thead>/gi, '');
    md = md.replace(/<tbody[^>]*>/gi, ''); md = md.replace(/<\/tbody>/gi, '\n');
    md = md.replace(/<tr[^>]*>/gi, ''); md = md.replace(/<\/tr>/gi, '\n');
    md = md.replace(/<th[^>]*>(.*?)<\/th>/gi, '| $1 ');
    md = md.replace(/<td[^>]*>(.*?)<\/td>/gi, '| $1 ');
    md = md.replace(/<[^>]+>/g, '');
    md = md.replace(/&nbsp;/g, ' ');
    md = md.replace(/&lt;/g, '<'); md = md.replace(/&gt;/g, '>');
    md = md.replace(/&amp;/g, '&'); md = md.replace(/&quot;/g, '"');
    md = md.replace(/&#39;/g, "'");
    md = md.replace(/&ldquo;/g, '\u201C'); md = md.replace(/&rdquo;/g, '\u201D');
    md = md.replace(/&lsquo;/g, '\u2018'); md = md.replace(/&rsquo;/g, '\u2019');
    md = md.replace(/\n{3,}/g, '\n\n');
    return md.trim();
}

// Fetch document
function fetchDocument(slug) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({ objectId: slug, language: 'cn' });
        const url = new URL(API_URL);
        const options = {
            hostname: url.hostname, path: url.pathname, method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(postData) }
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
                        reject(new Error(`API: code=${json.code}, msg=${json.message}`));
                    }
                } catch (e) { reject(new Error(`Parse: ${e.message}`)); }
            });
        });
        req.on('error', reject);
        req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
        req.write(postData);
        req.end();
    });
}

// Update document file
function updateDocument(filePath, docData) {
    const { title, content, updatedDate } = docData;
    const markdown = htmlToMarkdown(content);
    let existingContent = '';
    try { existingContent = fs.readFileSync(filePath, 'utf8'); } catch (e) {}

    let section = '', apiLevel = '', slug = '', docId = '', nodeId = '';
    const m1 = existingContent.match(/\*\*分区\*\*:?\s*(.+?)(?:\n|\*\*|$)/);
    if (m1) section = m1[1].trim();
    const m2 = existingContent.match(/\*\*API级别\*\*:?\s*(.+?)(?:\n|\*\*|$)/);
    if (m2) apiLevel = m2[1].trim();
    const m3 = existingContent.match(/\*\*Slug\*\*:?\s*`([^`]+)`/);
    if (m3) slug = m3[1];
    const m4 = existingContent.match(/\*\*DocID\*\*:?\s*`([^`]+)`/);
    if (m4) docId = m4[1];
    const m5 = existingContent.match(/\*\*NodeID\*\*:?\s*`([^`]+)`/);
    if (m5) nodeId = m5[1];

    let metaParts = [];
    if (section) metaParts.push(`**分区**: ${section}`);
    if (apiLevel) metaParts.push(`**API级别**: ${apiLevel}`);
    if (slug) metaParts.push(`**Slug**: \`${slug}\``);
    if (docId) metaParts.push(`**DocID**: \`${docId}\``);
    if (nodeId) metaParts.push(`**NodeID**: \`${nodeId}\``);

    const newContent = `# ${title}\n\n> ${metaParts.join('  |  ')}\n\n---\n\n${markdown}\n\n---\n*Updated: ${updatedDate || new Date().toISOString()}*\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
}

function saveProgress() {
    fs.writeFileSync(LOG_FILE, JSON.stringify(progress), 'utf8');
    fs.writeFileSync(ERROR_LOG, JSON.stringify(errorLog, null, 2), 'utf8');
}

// Process a single doc with retry
async function processDoc(doc, idx) {
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const docData = await fetchDocument(doc.Slug);
            updateDocument(doc.Path, docData);
            return { ok: true, idx };
        } catch (e) {
            if (attempt === 2) {
                return { ok: false, idx, error: e.message, slug: doc.Slug, path: doc.Path };
            }
            await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
        }
    }
}

// Main: parallel batch processor
async function run() {
    const startIdx = progress.processed;
    const remaining = emptyDocs.length - startIdx;
    const toProcess = Math.min(remaining, BATCH_TOTAL);
    
    if (toProcess <= 0) {
        console.log('All documents already processed!');
        return;
    }
    
    console.log(`\nProcessing ${toProcess} docs from index ${startIdx} (concurrency=${CONCURRENCY})\n`);
    
    const startTime = Date.now();
    let batchCount = 0;
    
    for (let offset = 0; offset < toProcess; offset += CONCURRENCY) {
        const batch = [];
        const batchDocs = emptyDocs.slice(startIdx + offset, startIdx + Math.min(offset + CONCURRENCY, toProcess));
        
        for (let i = 0; i < batchDocs.length; i++) {
            const docIdx = startIdx + offset + i;
            batch.push(processDoc(batchDocs[i], docIdx));
        }
        
        const results = await Promise.all(batch);
        
        for (const r of results) {
            progress.processed++;
            if (r.ok) {
                progress.success++;
            } else {
                progress.failed++;
                progress.errors.push({ slug: r.slug, path: r.path, error: r.error });
                errorLog.push({ slug: r.slug, path: r.path, error: r.error, time: new Date().toISOString() });
            }
        }
        
        batchCount++;
        const elapsed = (Date.now() - startTime) / 1000;
        const rate = progress.processed / (elapsed / 60);
        const remainingDocs = emptyDocs.length - progress.processed;
        const etaMin = Math.round(remainingDocs / rate);
        
        if (batchCount % 5 === 0 || offset + CONCURRENCY >= toProcess) {
            console.log(`[${progress.processed}/${emptyDocs.length}] ${Math.round(progress.processed/emptyDocs.length*100)}% | rate: ${Math.round(rate)}/min | ETA: ${etaMin}min | success: ${progress.success} failed: ${progress.failed}`);
            saveProgress();
        }
        
        // Small delay between batches to avoid rate limiting
        if (DELAY_MS > 0) await new Promise(r => setTimeout(r, DELAY_MS));
    }
    
    saveProgress();
    const totalSec = Math.round((Date.now() - startTime) / 1000);
    console.log(`\n=== Done in ${totalSec}s ===`);
    console.log(`Processed: ${progress.processed}/${emptyDocs.length}`);
    console.log(`Success: ${progress.success}, Failed: ${progress.failed}`);
    
    if (progress.processed < emptyDocs.length) {
        console.log(`\nRun again to continue...`);
    } else {
        console.log(`\nAll documents processed!`);
    }
}

run().catch(console.error);

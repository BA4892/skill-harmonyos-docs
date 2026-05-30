const fs = require('fs');

const EMPTY_FILE = 'C:/Users/admin/.codeartsdoer/skills/skill-harmonyos-docs/empty_docs.json';

console.log('Reading file...');
const content = fs.readFileSync(EMPTY_FILE, 'utf8');
console.log('File length:', content.length);

// Check for BOM
console.log('First char code:', content.charCodeAt(0));
console.log('First 3 char codes:', content.substring(0, 3).split('').map(c => c.charCodeAt(0)));

// Remove BOM if present
let cleanContent = content;
if (content.charCodeAt(0) === 0xFEFF) {
    cleanContent = content.substring(1);
    console.log('BOM removed');
}

console.log('Parsing JSON...');
const docs = JSON.parse(cleanContent);
console.log('Document count:', docs.length);
console.log('First doc:', docs[0].Title);

const test = require('node:test'); 
const assert = require('node:assert/strict'); 
const fs = require('node:fs'); 
const html = fs.readFileSync('index.html', 'utf8'); 
test('Сторінка має українську мову', () => { 
assert.match(html, /<html lang="uk">/); 
}); 
test('Сторінка містить правильний заголовок', () => { 
assert.match(html, /<h1>Моя перша CI\/CD сторінка<\/h1>/); 
}); 

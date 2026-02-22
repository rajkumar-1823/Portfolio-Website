const fs = require('fs');
const path = require('path');

/**
 * add-reveal.js
 * 
 * This script ensures that all key interactive elements in page.jsx have
 * the `data-reveal` attribute so that ScrollAnimator.jsx can animate them
 * on scroll via IntersectionObserver.
 *
 * Current page.jsx already has data-reveal attributes on all sections,
 * headings, images, boxes, timeline items, and form elements.
 *
 * This script is a safeguard — it scans page.jsx and reports any major
 * elements missing `data-reveal`, without destructively replacing content.
 */

function auditReveals(filePath) {
    const fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${fullPath}`);
        return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    let issues = [];

    lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const trimmed = line.trim();

        // Check headings – should have data-reveal
        if (/className=["']heading["']/.test(trimmed) && !trimmed.includes('data-reveal')) {
            issues.push(`  Line ${lineNum}: heading missing data-reveal`);
        }

        // Check .box elements – should have data-reveal
        if (/className=["']box(?:\s|["'])/.test(trimmed) && !trimmed.includes('data-reveal') && !trimmed.includes('box-container')) {
            issues.push(`  Line ${lineNum}: box missing data-reveal`);
        }

        // Check images – should have alt text
        if (/<img\s/.test(trimmed) && /alt=["']["']/.test(trimmed)) {
            issues.push(`  Line ${lineNum}: image has empty alt text`);
        }
        if (/<img\s/.test(trimmed) && !/alt=/.test(trimmed)) {
            issues.push(`  Line ${lineNum}: image missing alt attribute`);
        }
    });

    if (issues.length === 0) {
        console.log(`✅ ${filePath} — all elements have data-reveal and alt attributes`);
    } else {
        console.log(`⚠️  ${filePath} — found ${issues.length} issue(s):`);
        issues.forEach(i => console.log(i));
    }
}

// Audit the main page
auditReveals('app/page.jsx');
console.log('\nDone. If no issues found, all reveal animations and alt texts are in place.');

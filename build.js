const fs = require('fs');
const path = require('path');

console.log('🔨 Building IT Strategic Plan Presentation...\n');

const totalPages = 11;
const pages = [];
let errors = [];
let warnings = [];

// Check if all page files exist
console.log('📄 Checking page files...');
for (let i = 1; i <= totalPages; i++) {
    const pageFile = `page_${i}.html`;
    const pagePath = path.join(__dirname, pageFile);
    
    if (fs.existsSync(pagePath)) {
        pages.push(pageFile);
        console.log(`  ✓ ${pageFile} exists`);
        
        // Check if page has correct navigation
        const content = fs.readFileSync(pagePath, 'utf8');
        const pageIndicator = `Page ${i} of ${totalPages}`;
        
        if (!content.includes(pageIndicator)) {
            warnings.push(`${pageFile}: Page indicator may be incorrect`);
        }
        
        // Check for navigation function
        if (!content.includes(`goToPage(pageNum)`)) {
            errors.push(`${pageFile}: Missing navigation function`);
        }
    } else {
        errors.push(`Missing file: ${pageFile}`);
        console.log(`  ✗ ${pageFile} NOT FOUND`);
    }
}

// Check for required files
console.log('\n📋 Checking required files...');
const requiredFiles = ['server.js', 'package.json'];
requiredFiles.forEach(file => {
    if (fs.existsSync(path.join(__dirname, file))) {
        console.log(`  ✓ ${file} exists`);
    } else {
        warnings.push(`Missing recommended file: ${file}`);
    }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Build Summary');
console.log('='.repeat(50));
console.log(`Total Pages Expected: ${totalPages}`);
console.log(`Pages Found: ${pages.length}`);
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);

if (errors.length > 0) {
    console.log('\n❌ Errors:');
    errors.forEach(error => console.log(`  - ${error}`));
}

if (warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    warnings.forEach(warning => console.log(`  - ${warning}`));
}

if (errors.length === 0 && pages.length === totalPages) {
    console.log('\n✅ Build successful! All pages are present and validated.');
    console.log('\n📦 Ready to deploy:');
    console.log('   - All HTML pages are in place');
    console.log('   - Run "npm start" to start the server');
    console.log('   - Or open page_1.html directly in a browser');
    process.exit(0);
} else {
    console.log('\n❌ Build completed with issues. Please review the errors above.');
    process.exit(1);
}


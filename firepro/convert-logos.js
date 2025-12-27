#!/usr/bin/env node

/**
 * Logo Converter Script
 * Converts SVG logos to PNG and JPG formats using Sharp
 * 
 * Installation: npm install sharp -D
 * Usage: node convert-logos.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const outputDir = path.join(publicDir, 'logos');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Logo configurations
const logos = [
    {
        name: 'logo-compact',
        input: path.join(publicDir, 'logo.svg'),
        sizes: [
            { width: 200, height: 200, suffix: '200' },
            { width: 512, height: 512, suffix: '512' },
            { width: 1024, height: 1024, suffix: '1024' }
        ]
    },
    {
        name: 'logo-full',
        input: path.join(publicDir, 'logo-full.svg'),
        sizes: [
            { width: 300, height: 100, suffix: '300x100' },
            { width: 600, height: 200, suffix: '600x200' },
            { width: 1200, height: 400, suffix: '1200x400' }
        ]
    },
    {
        name: 'favicon',
        input: path.join(publicDir, 'favicon.svg'),
        sizes: [
            { width: 16, height: 16, suffix: '16' },
            { width: 32, height: 32, suffix: '32' },
            { width: 180, height: 180, suffix: '180' }
        ]
    }
];

async function convertLogo(logo) {
    try {
        console.log(`\n📦 Converting ${logo.name}...`);
        
        for (const size of logo.sizes) {
            // PNG with white background
            await sharp(logo.input)
                .resize(size.width, size.height, {
                    fit: 'contain',
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                })
                .png({ quality: 95 })
                .toFile(path.join(outputDir, `${logo.name}-${size.suffix}.png`));
            
            console.log(`   ✓ ${logo.name}-${size.suffix}.png (${size.width}x${size.height})`);
            
            // JPG with white background
            await sharp(logo.input)
                .resize(size.width, size.height, {
                    fit: 'contain',
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                })
                .jpeg({ quality: 95, progressive: true })
                .toFile(path.join(outputDir, `${logo.name}-${size.suffix}.jpg`));
            
            console.log(`   ✓ ${logo.name}-${size.suffix}.jpg (${size.width}x${size.height})`);
        }
        
        console.log(`✅ ${logo.name} conversion complete!`);
    } catch (error) {
        console.error(`❌ Error converting ${logo.name}:`, error.message);
    }
}

async function main() {
    console.log('🔥 FirePro Logo Converter');
    console.log('==========================\n');
    
    // Check if Sharp is installed
    try {
        require.resolve('sharp');
    } catch (e) {
        console.error('❌ Sharp is not installed. Please run: npm install sharp -D');
        process.exit(1);
    }
    
    // Check if SVG files exist
    const allSVGsExist = logos.every(logo => {
        const exists = fs.existsSync(logo.input);
        if (!exists) {
            console.warn(`⚠️  SVG not found: ${logo.input}`);
        }
        return exists;
    });
    
    if (!allSVGsExist) {
        console.error('❌ Some SVG files are missing. Please check the paths.');
        process.exit(1);
    }
    
    console.log(`📁 Output directory: ${outputDir}\n`);
    
    // Convert all logos
    for (const logo of logos) {
        await convertLogo(logo);
    }
    
    console.log('\n✨ All logos converted successfully!');
    console.log(`📸 Check the "${outputDir}" folder for your files.\n`);
}

main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});

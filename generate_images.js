const fs = require('fs');
const path = require('path');

const data = {
    'public/bracelets/crystal': {
        prefix: 'Crystal bracelet for',
        suffix: 'premium macro photography isolated white background',
        fallbackKeyword: 'crystal,bracelet',
        slugs: [
            'amethyst', 'rose-quartz', 'tiger-eye', 'pyrite', 'citrine',
            'green-aventurine', '7-chakra', 'cats-eye', 'sunstone', 'pearl',
            'moonstone', 'dhan-yog', 'money-magnet', 'pregnancy', 'rudraksha',
            'rudraksha-kids'
        ]
    },
    'public/bracelets/zodiac': {
        prefix: 'Zodiac astrological bracelet for',
        suffix: 'premium photography isolated white background',
        fallbackKeyword: 'astrology,bracelet',
        slugs: [
            'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
            'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
        ]
    },
    'public/gemstones': {
        prefix: 'Single sparkling gemstone',
        suffix: 'premium macro photography isolated white background',
        fallbackKeyword: 'gemstone,crystal',
        slugs: [
            'ruby-manik', 'pearl-moti', 'red-coral-moonga', 'emerald-panna',
            'yellow-sapphire-pukhraj', 'blue-sapphire-neelam', 'gomed-hessonite',
            'cats-eye-lehsuniya', 'opal-dudhiya-pathar', 'tigers-eye', 'jasper',
            'moonstone-chandramani', 'lapis-lazuli-lajward', 'keshi-pearl',
            'south-sea-pearl', 'amethyst-jamunia', 'turquoise-feroza', 'iolite-neeli',
            'pitambari-neelam', 'citrine', 'garnet', 'peridot', 'zircon', 'sphatik-crystal'
        ]
    },
    'public/love-problems': {
        prefix: 'Astrology for',
        suffix: 'conceptual beautiful mystical image',
        fallbackKeyword: 'astrology,love',
        slugs: [
            'love-problem-solution', 'horoscope-matching', 'love-marriage-specialist'
        ]
    },
    'public/mala': {
        prefix: 'Spiritual japa mala beads made of',
        suffix: 'premium photography isolated white background',
        fallbackKeyword: 'beads,necklace,spiritual',
        slugs: [
            'rudraksha-mala', 'japa-mala', 'tulsi-mala', 'karungali-mala',
            'sphatik-crystal-mala', 'silver-rudraksha-mala', 'siddha-mala'
        ]
    },
    'public/spiritual-decor': {
        prefix: 'Spiritual home decor',
        suffix: 'premium photography beautiful lighting',
        fallbackKeyword: 'spiritual,decor,home',
        slugs: [
            'frames', 'tumbles-clusters', 'home-harmony', 'ritual-scents',
            'essential-oils-diffusers', 'pooja-kits', 'singing-bowls',
            'shankh', 'unique-gifting-ideas'
        ]
    },
    'public/yantras': {
        prefix: 'Vedic Hindu Yantra sacred geometry metal plate',
        suffix: 'premium product photography isolated white background',
        fallbackKeyword: 'yantra,sacred,geometry',
        slugs: [
            '7-horses-vastu-pyrite-dust-frame', 'brihaspati-yantra', 'laxmi-kuber-yantra',
            'hanuman-yantra', 'mahamrityunjay-yantra', 'shri-yantra-pyrite-dust-frame',
            'kuber-yantra', 'shree-pyrite-yantra-sampoorna-combo', 'shree-yantra-without-mantra',
            'shree-laxmi-yantra-3d', '2d-yantra-frame-four-shree-sampoorna-laxmi-ganesh',
            'black-agate-navgrah-yantra-plate', 'ketu-yantra', 'rahu-yantra',
            'bangla-mukhi-yantra', 'surya-yantra', 'navgrah-dosh-yantra', 'chandra-yantra',
            'shiv-gauri-yantra', 'vastudosh-nivaran-yantra', 'kalsharapyog-yantra',
            'shukra-yantra', 'ganesh-ji-pyrite-dust-frame', 'shri-sampoorna-laxmi-ganesh-yantra-pyrite-frame',
            'sampoorna-sarva-kashta-nivaran-shri-yantra', 'kuber-yantra-pyrite-dust-frame',
            'shri-sampoorna-baglamukhi-yantra-pyrite-frame', 'sampoorna-vastu-yantra-pyrite-frame',
            'shri-sarva-karya-siddhi-yantra-pyrite-frame', 'shri-ram-lalla-pyrite-dust-frame',
            'kuberakolam-pyrite-dust-frame', 'shri-yantra-pyrite-dust-frame-special',
            'shriparni-shri-yantra-pyrite-frame', 'goddess-laxmi-pyrite-dust-frame',
            'premium-shaligram-lakshmi-ganesh-yantra', 'premium-shaligram-shree-yantra',
            'premium-shaligram-kuber-yantra'
        ]
    },
    'public/zodiac': {
        prefix: 'Zodiac sign astrology symbol for',
        suffix: 'mystical beautiful digital art isolated',
        fallbackKeyword: 'zodiac,astrology',
        slugs: [
            'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
            'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
        ]
    }
};

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

async function downloadImageFetch(url, dest) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout
    
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            redirect: 'follow',
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('image')) {
            throw new Error(`Response is not an image (Content-Type: ${contentType})`);
        }
        
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
    } catch (err) {
        clearTimeout(timeoutId);
        throw err;
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    let allTasks = [];
    
    for (const [dir, info] of Object.entries(data)) {
        const dirPath = path.join(__dirname, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        for (const slug of info.slugs) {
            // Find if any valid image file already exists
            let existingFile = null;
            let existingSize = 0;
            
            for (const ext of EXTENSIONS) {
                const checkPath = path.join(dirPath, `${slug}.${ext}`);
                if (fs.existsSync(checkPath)) {
                    existingFile = checkPath;
                    existingSize = fs.statSync(checkPath).size;
                    break;
                }
            }
            
            if (existingFile) {
                // If it is a webp or a file > 8KB, it's considered valid
                if (existingFile.endsWith('.webp') || existingSize >= 8000) {
                    console.log(`Skipping valid existing image: ${path.basename(existingFile)} (${existingSize} bytes)`);
                    continue;
                } else {
                    console.log(`Deleting placeholder/small image: ${path.basename(existingFile)} (${existingSize} bytes)`);
                    fs.unlinkSync(existingFile);
                }
            }
            
            const fileName = `${slug}.jpg`;
            const destPath = path.join(dirPath, fileName);
            
            const prompt = `${info.prefix} ${slug.replace(/-/g, ' ')} ${info.suffix}`;
            const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=400&nologo=true&seed=${Math.floor(Math.random() * 100000)}`;
            
            const fallbackKeyword = `${info.fallbackKeyword},${slug.replace(/-/g, ',')}`;
            const fallbackUrl = `https://loremflickr.com/400/400/${encodeURIComponent(fallbackKeyword)}`;
            
            allTasks.push({ url, fallbackUrl, destPath, fileName });
        }
    }
    
    console.log(`Total images to download: ${allTasks.length}`);
    
    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];
        console.log(`[${i+1}/${allTasks.length}] Downloading ${task.fileName}...`);
        
        let success = false;
        
        // Try Pollinations AI
        try {
            await downloadImageFetch(task.url, task.destPath);
            console.log(`Successfully downloaded ${task.fileName} via Pollinations`);
            success = true;
            await delay(1500); // 1.5s delay
        } catch (err) {
            console.warn(`Pollinations failed for ${task.fileName}: ${err.message}. Retrying in 3 seconds...`);
            await delay(3000);
            try {
                await downloadImageFetch(task.url, task.destPath);
                console.log(`Successfully downloaded ${task.fileName} via Pollinations (Retry)`);
                success = true;
                await delay(1500);
            } catch (retryErr) {
                console.warn(`Pollinations retry failed: ${retryErr.message}. Trying LoremFlickr...`);
            }
        }
        
        // Try LoremFlickr if Pollinations fails
        if (!success) {
            try {
                await downloadImageFetch(task.fallbackUrl, task.destPath);
                console.log(`Successfully downloaded ${task.fileName} via LoremFlickr`);
                success = true;
                await delay(500);
            } catch (fallbackErr) {
                console.error(`Failed both Pollinations and LoremFlickr for ${task.fileName}: ${fallbackErr.message}`);
            }
        }
    }
    
    console.log("All done!");
}

main().catch(console.error);

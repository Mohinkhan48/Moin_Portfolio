const fs = require('fs');
const src = "C:/Users/User/.gemini/antigravity/brain/5109e01d-e140-41ba-8d41-665a9a6895a9/app_logo_1772973151124.png";
const dest = "C:/Users/User/OneDrive/Documents/Projects/Portfolio/public/app_logo.png";
try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
    console.log("Successfully copied logo to " + dest);
} catch (e) {
    console.error("Error copying: " + e.message);
    process.exit(1);
}

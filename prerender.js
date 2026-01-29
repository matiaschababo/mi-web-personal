
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

(async () => {
    try {
        // Locate the template and the server entry
        // Client build goes to 'dist'
        // Server build goes to 'dist-server'
        const templatePath = toAbsolute('dist/index.html');
        const serverEntryPath = toAbsolute('dist-server/entry-server.js');

        if (!fs.existsSync(templatePath)) {
            throw new Error(`Template not found at ${templatePath}. Did you run build:client?`);
        }
        if (!fs.existsSync(serverEntryPath)) {
            throw new Error(`Server entry not found at ${serverEntryPath}. Did you run build:server?`);
        }

        const template = fs.readFileSync(templatePath, 'utf-8');

        // Import the render function from the server bundle
        const { render } = await import('file://' + serverEntryPath);

        const { html, helmet } = render();

        const helmetTitle = helmet.title.toString();
        const helmetMeta = helmet.meta.toString();
        const helmetLink = helmet.link.toString();

        // Inject App HTML
        let appHtml = template.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        );

        // Inject Helmet data into head
        const headContent = `${helmetTitle}${helmetMeta}${helmetLink}`;
        appHtml = appHtml.replace('</head>', `${headContent}</head>`);

        // Save the final HTML
        fs.writeFileSync(templatePath, appHtml);

        console.log('Pre-rendering complete: dist/index.html');
    } catch (e) {
        console.error('Pre-rendering failed:', e);
        process.exit(1);
    }
})();

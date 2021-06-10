const fs = require('fs');
const glob = require('glob');
const TurndownService = require('turndown');
const turndownPluginGfm = require('./turndown-plugin-gfm');

const gfm = turndownPluginGfm.gfm;
const turndownService = new TurndownService();
turndownService.use(gfm);

glob('./_i18n/**/*.html', {}, (err, files) => {
    files.forEach(file => {
        fs.readFile(file, (readErr, data) => {
            if (readErr) {
                throw readErr;
            }
            const markdown = turndownService.turndown(data.toString());
            fs.writeFile(file.replace('.html', '.md'), markdown, function (err) {
                  if (err) return console.log(err);
            });
        });
    });
});

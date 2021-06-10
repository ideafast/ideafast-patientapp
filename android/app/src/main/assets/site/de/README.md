# ideafast-devicesupportdocs-web
Static web site containing device support documentation for aiding study setup

## Local Development

For computer setup, read [here](https://jekyllrb.com/docs/)

1. Initially, pull down repository using git. Otherwise, pull down latest changes.
1. Run `bundle update` (or when editing Gemfile) and install all gems (`bundle install`)
1. Checkout new branch for development of pages.
1. Run locally with `bundle exec jekyll serve --livereload`
1. Make changes and view at [/](/)
1. If satisfactory, commit. If not, repeat previous two steps till happy.
1. Push branch to remote origin, and make PR.

## Transferring word docs online with images

Currently have found `mammoth` works for this purpose. It does generate large files however.

An example use: `mammoth document.docx index.html`

## Transferring html docs to md files

Using `turndown` for this and a table implementation for empty header rows.

To run:

1. `npm install glob turndown`
1. `git clone https://github.com/laurent22/turndown-plugin-gfm.git`
1. `cd turndown-plugin-gfm && npm install && npm run-script build`
1. `node convert-to-md.js`

## Publish to GitHub Pages

Run `npm run gh-pages` for each example root. Swap the root directory in `webpack.config.js`. Push `gh-pages` branch.

Make sure the `<script src="static/bundle.js"></script>` is a relative link to the bundle. On `master` this link should be absolute.

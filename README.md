# Fieldform Labs — GitHub Pages website

A complete static export of the current Fieldform Labs site: dark navy, blue and cyan, topographic contour lines, and matching 2D robotics illustrations. No Node.js, npm, build command, account system, database, or API keys are needed.

## Publish using the GitHub website

1. Sign in to GitHub and create a **public** repository named **`fieldform-labs`**. Initialize it with a README so that the `main` branch exists. If you have an organization account, you can create it there instead.
2. Extract `fieldform-labs-github-pages.zip` on your computer. Open the extracted folder. In the repository, choose **Add file → Upload files**. Upload the **contents** of that folder, including the `assets` folder. `index.html`, `style.css`, and `main.js` must appear at the repository's top level, not inside another enclosing folder. Commit the upload to `main`.
3. The archive includes `.nojekyll`. If your file picker hides it, create it through **Add file → Create new file**, use `.nojekyll` as the filename, enter `Static site`, and commit.
4. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
5. Wait for the Pages deployment to finish. Settings → Pages will show the site URL. With the recommended repository name, it is `https://YOUR_GITHUB_USERNAME.github.io/fieldform-labs/`. For an organization repository, use the organization's name instead of your username. Use this actual published URL, not GitHub's repository preview, to check the design.

Official GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Package structure

```text
index.html
style.css
main.js
privacy.html
terms.html
404.html
.nojekyll
assets/
ASSETS.md
README.md
```

All fonts, illustrations, contour patterns, and sharing graphics are local. Links and CSS asset URLs have been adjusted to work under the repository path. No connection to ChatGPT hosting is needed.

## Details to update

- **Email:** Search `index.html` for `hello@fieldformlabs.example` and replace both occurrences with your real contact address. Update the placeholder note and the FAQ answer about the contact address when it is live.
- **Search visibility:** This export preserves the draft's `noindex,nofollow` tags. When the site is ready for search engines, remove that robots meta tag from `index.html`. You can leave legal pages and `404.html` unindexed. Publish your real company and contact details before changing this setting.
- **Social previews:** In `index.html`, replace the `og:image` value `./assets/social.png` with your final absolute URL, e.g. `https://YOUR_GITHUB_USERNAME.github.io/fieldform-labs/assets/social.png`. Social crawlers generally require an absolute URL. The local file is already included.
- **Legal copy:** `privacy.html` and `terms.html` contain draft notices. Replace them with the final company details and policies as appropriate.

## If you choose another repository name

Normal page links, CSS, fonts, and images use relative paths and will still work. In `404.html`, replace every `/fieldform-labs/` with `/YOUR_REPOSITORY_NAME/` so that styles and home links work on missing nested URLs too. Update your absolute `og:image` URL to match.

For a user/organization root site named `YOUR_GITHUB_USERNAME.github.io`, or a custom domain served at `/`, use `/` instead of `/fieldform-labs/` in `404.html`. For a custom domain, configure it in Settings → Pages and follow GitHub's domain instructions.

## Future updates

Edit the relevant file in GitHub or upload a replacement, then commit to `main`. GitHub Pages republishes from that branch. Use Settings → Pages and the repository's Actions tab to check deployment results.

## Optional local preview

From the folder containing `index.html`, run `python3 -m http.server 8000`, then visit `http://localhost:8000/`. On Windows, `py -m http.server 8000` is an alternative. The custom 404 paths target the deployed repository URL; GitHub Pages handles those after publishing.

## Assets and fonts

See `ASSETS.md` for the artwork inventory. Manrope is distributed under the SIL Open Font License included in `assets/Manrope-OFL.txt`.

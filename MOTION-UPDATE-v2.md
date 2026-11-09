# Fieldform Labs motion update — version 2

This version makes contour motion self-contained, increases the clarity of the local cursor response, and recognizes actual mouse input even when a browser reports its primary pointer as coarse.

## Preview first

Open the supplied `fieldform-labs-motion-preview.html` in a browser, then move a mouse or trackpad over the hero background or the background behind the hand. This standalone preview contains its own code, fonts, images, and contour data. No server or file installation is needed. Contours should bend near the cursor, brighten slightly, and settle smoothly when it leaves.

If your device has reduced motion enabled, the preview will show a note and retain static contours. Touch-only input also keeps the static pattern.

## Update GitHub Pages

1. Extract `fieldform-labs-motion-v2-update.zip`.
2. Open your repository and use **Add file → Upload files**.
3. Upload the following three files, keeping the asset inside the `assets` folder. Replace the existing versions and commit to `main`:

```text
main.js
style.css
assets/hand-study.svg
```

4. Wait for Pages deployment to complete, then hard refresh your published URL with Ctrl+Shift+R or Command+Shift+R.

Your existing HTML, company details, email, and other image files stay intact. The earlier `assets/topography-motion.json` file is no longer needed at runtime; leaving it in the repository is harmless. The contour data is embedded in `main.js`.

For a complete fresh copy, use `fieldform-labs-motion-v2-full.zip` instead. Extract it and open `index.html` to preview locally, or upload its contents to the repository root. Keep any company details you already edited if replacing the complete site.

## Which preview is animated?

The new standalone motion preview and these updated GitHub files contain version 2. The existing hosted company homepage remains unchanged, following your request to update GitHub files only.

## Motion and accessibility

Local cursor deformation, a slight cyan highlight, ambient drift, and gentle settling are enabled with mouse input. Motion pauses offscreen and in hidden tabs. Touch scrolling is unchanged, and reduced-motion preferences are respected. A mouse can activate the animation on a hybrid device even if the primary-pointer media query reports coarse input.

## Verification

Automated controller checks passed for local deformation, far-field stability, settling, offscreen and hidden-tab pausing, resizing/DPR, reduced-motion changes, offline execution with no network request, actual-mouse detection on hybrid devices, and touch-only behavior. Syntax, archive paths, and standalone asset embedding were also checked. Browser visual testing was unavailable in this workspace.

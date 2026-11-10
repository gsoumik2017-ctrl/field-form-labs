# Fieldform Labs — edge-to-edge waveform coverage

This update fixes the blank side gutters shown in the screenshot and adds continuous waveform coverage to all landing-page sections and the footer. It retains the approved cursor spring, trailing wake, spline drawing, and shared page coordinates.

## Preview

Open `fieldform-labs-fullwidth-preview.html`. Check the left and right edges in the hero, then scroll through the vision, focus areas, tagline, approach, company introduction, FAQ, contact section, and footer. The text stays in its centered layout while the animated contour field spans the usable viewport width. The hand illustration keeps its own bounded canvas.

The standalone preview contains its code, fonts, images, and contour data. The normal preview has no instruction banner over the page. If reduced motion is enabled, a short notice explains why the contours are static.

## Update GitHub Pages

1. Extract `fieldform-labs-fullwidth-update.zip`.
2. Open the repository and choose **Add file → Upload files**.
3. Replace **main.js** and **style.css** at the repository root, then commit to your Pages branch, normally `main`.
4. Wait for deployment, then hard refresh your published URL with Ctrl+Shift+R or Command+Shift+R.

This updates the fluid-motion site you already uploaded. No HTML, images, contact details, or Pages settings need replacing. A complete site copy is also available as `fieldform-labs-fullwidth-full.zip` if needed.

## What was fixed

- Outer wave canvases span the usable viewport instead of inheriting the centered content width.
- The vertical scrollbar is excluded from the calculated width so the effect does not create horizontal scrolling.
- The vision, approach, company introduction, FAQ, and footer now receive the same shared contour interaction.
- Static fallback contours also span both side gutters and all sections.
- Canvas size observation tracks the actual canvas, including changes when the content container stays capped at its maximum width.
- The hand canvas remains clipped to the illustration frame; its geometry and captions stay intact.

The original hosted company homepage remains unchanged under your GitHub-files-only preference. The supplied full-width preview demonstrates this fix.

## Verification

Coverage checks passed at 390, 639, 1130, 1550, 1920, and 2560 px usable widths, including a simulated scrollbar. Regression checks passed for shared world coordinates, region transitions, dragging, smooth curves, settling, reduced motion, hybrid mouse input, offline use, and the unchanged spring response at 30/60/120 Hz. Syntax, assets, archive paths, and standalone preview embedding were checked. Browser visual testing was unavailable in this workspace.

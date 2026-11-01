---
name: site-polish
description: "Use when: refining a Vite landing page, improving marketing copy, fixing layout issues, tightening branding, and validating that the site builds cleanly before delivery."
---

# Site Polish Workflow

Use this skill to improve a small marketing website, landing page, or portfolio site without adding unnecessary complexity. The goal is to keep the site fast, clear, and conversion-friendly while preserving a polished visual identity.

## Core objective

Produce a site that is:

- easy to understand at a glance
- visually consistent and branded
- responsive across mobile and desktop
- free of obvious structural or styling mistakes
- buildable and deployable without warnings or broken assets

## Step-by-step workflow

### 1. Define the page goal

Before editing content or styling, identify the primary purpose of the page:

- attract clients
- explain a service
- generate leads via contact CTA
- present a portfolio or company profile

If the page has multiple competing goals, reduce them to one primary action and one supporting message.

### 2. Audit the page structure

Review the HTML and section order:

- hero section with clear headline and CTA
- benefits or service section with concise explanations
- trust or proof elements if available
- final call-to-action or contact section

Prefer semantic structure over decorative complexity. Remove duplicate titles, repeated text, or mismatched section labels.

### 3. Improve content clarity

Tighten wording before adjusting visuals:

- keep headlines concrete and benefit-focused
- shorten paragraphs to one core idea each
- remove marketing fluff or repetitive phrases
- ensure CTAs clearly tell the user what happens next

Good copy should explain value quickly, especially on mobile.

### 4. Refine styling and layout

Check visual consistency in CSS and layout classes:

- spacing should feel intentional and balanced
- type and color should reinforce the brand instead of fighting it
- buttons should have strong hierarchy and clear hover/focus states
- cards and sections should align on a common rhythm

Use the smallest possible design change that improves clarity. Avoid layering too many effects, fonts, or decorative styles without a reason.

### 5. Check responsiveness and asset quality

Verify that the page works well on common screen sizes:

- text remains readable without awkward wrapping
- images do not distort or overflow
- CTAs stay visible and tap-friendly on mobile
- sections stack logically instead of feeling crowded

Also confirm image paths, icons, and local asset references are valid.

### 6. Validate technical quality

Run the project checks and ensure the site still builds cleanly:

- confirm that the build command works without errors
- inspect the generated bundle for broken references
- check for missing CSS, missing assets, or console-related issues in the browser preview

For this project, the baseline validation command is:

```bash
npm run build
```

### 7. Final polish pass

Before finishing:

- scan the page for visual inconsistencies
- verify the contact or conversion flow is obvious
- make sure there is no dead copy or placeholder content
- test the most important section on mobile and desktop

## Decision points

- If the page is cluttered, reduce text before changing layout.
- If the visual identity feels weak, improve spacing and contrast before adding more decorations.
- If the CTA is unclear, rewrite the action before changing button styling.
- If the page is technically broken, fix assets and build errors before cosmetic tweaks.
- If the site has no clear hierarchy, reorder sections according to user intent and conversion flow.

## Completion checklist

A task is complete when all of the following are true:

- the page has a clear message and CTA
- content is concise, readable, and aligned with the brand
- the layout is consistent and responsive
- no obvious broken assets, duplicate copy, or broken references remain
- the site successfully builds with the project command

## Output expectations

Deliver:

- revised HTML and/or CSS that matches the page goal
- a cleaner structure and stronger hierarchy
- improved copy and visual polish
- a verified build result for the site

## Example prompts

- "Polish this landing page for a small business and make the CTA more obvious."
- "Refine the content and spacing on the homepage so it feels more premium and conversion-focused."
- "Audit this Vite site for layout issues, broken references, and build readiness."
- "Improve the clarity of the hero section, service cards, and final contact call-to-action."
- "Make this site feel more modern and responsive without overcomplicating the design."

## Related customizations

If you want to extend this workflow, consider creating a companion skill for:

- SEO content review
- accessibility pass for marketing pages
- Vite performance optimization
- landing page copy rewriting
- deployment and release checks

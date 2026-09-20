# FIREWORKS Project Handoff — Pittsburgh Landscaping Website 1

> Use this file as the source of truth for continuing this website in a dedicated chat. Verify it against the repository before changing anything. Never place secrets in this file.

## Project snapshot

| Field | Current value |
|---|---|
| Client / business | Rivers & Roots Landscaping — fictional storefront demo |
| Industry | Residential landscaping and property care |
| Repository | https://github.com/colonnamedia/Landscaping-site-1 |
| Default branch | `main` |
| Working branch | `main` — Anthony explicitly approved the initial commit and Vercel publication |
| Tested implementation commit | Pending initial remote commit |
| Handoff commit | Pending final deployment documentation commit |
| Hosting provider | Vercel |
| Preview URL | Pending first Vercel deployment |
| Live URL | Pending first Vercel deployment |
| Live-site status | Deployment pending; intended as a public Fireworks storefront demo |
| Last verified | September 20, 2026 |

## Goal and approved scope

Create a polished, ready-built landscaping website for the Fireworks website collection. The four-page site targets Pittsburgh and the South Hills with locally relevant service copy, a detailed quote-request experience, responsive design, stock photography, and complete SEO scaffolding. Publish it through Vercel and list it in the Fireworks storefront using first-tier website pricing and hosting.

## Source and design direction

- Source template or prior site: None; the destination repository was empty.
- Reason selected: New visual direction was appropriate for the first AGENT FIREWORKS production test.
- Approved visual direction: Editorial residential landscaping design with forest green, warm cream, clay accents, large serif headlines, and high-quality outdoor-living photography.
- Brand assets and locations: Fictional Rivers & Roots identity; Pittsburgh and the South Hills; remote Unsplash images documented in `STOCK-PHOTOS.md`.
- Important design constraints: Clearly label the site as a demo, do not invent reviews or credentials, use only necessary images, and keep the primary conversion path focused on quote requests.

## Stack and commands

| Item | Value |
|---|---|
| Framework / runtime | Static semantic HTML, CSS, and vanilla JavaScript; Node.js build scripts |
| Package manager | npm |
| Install | `npm install` — no third-party runtime dependencies |
| Local development | `python3 -m http.server 4173 --directory dist` after build |
| Production build | `npm run build` |
| Test / lint | `npm run check` |
| Output directory | `dist/` |

## Pages, routes, and primary actions

- `/` — Pittsburgh-focused homepage; primary action: Request a Free Quote.
- `/services` — landscape design, patios and walkways, retaining walls and grading, lawn and seasonal care.
- `/about` — local-first approach and trust-building company-story structure without fabricated claims.
- `/quote` — detailed inquiry form covering contact details, location, services, timeline, budget, and project goals.
- `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, `/favicon.svg` — discovery and browser metadata assets.

## Forms and conversion paths

The quote form validates required contact, property, timing, service, and project-detail fields. Storefront demo mode does not transmit or retain personal information; it shows an explicit demo confirmation. Before a customer launch, connect the form to the customer's approved inbox, CRM, or form provider and test both success and error states.

## Integrations

| Provider | Purpose | Status | Project/resource reference | Environment variable names | Webhook or route | Remaining setup |
|---|---|---|---|---|---|---|
| Vercel | Static hosting and clean URLs | Planned | Pending project link to `colonnamedia/Landscaping-site-1` | None | None | Import repository, deploy `main`, verify build and all routes |
| Form delivery provider | Deliver customer quote inquiries | Not selected | None | None | None | Choose only after a customer purchases the website |

No database, payment, authentication, analytics, or inherited client integration is present.

## Deployment

`vercel.json` runs `npm run build`, publishes `dist/`, enables clean URLs, adds long-lived asset caching, and sets basic security headers. The repository must remain linked to production branch `main`. Record the final Vercel project and live URL here after deployment.

## Completed and verified

- New four-page landscaping website created from a clean repository.
- Pittsburgh and South Hills service-area language added throughout the visible content and metadata.
- Unique titles, descriptions, canonicals, Open Graph tags, Twitter cards, semantic headings, descriptive image alt text, JSON-LD, sitemap, and robots file added.
- Fictional demo business, contact details, and quote behavior clearly disclosed.
- Stock photography source and license references documented.
- Responsive navigation and quote-form interaction implemented.
- Automated build and site-structure checks implemented.

## Remaining work

- Run automated checks and production build, then inspect representative mobile and desktop layouts.
- Commit the tested implementation to GitHub.
- Deploy and verify the exact committed state on Vercel.
- Replace placeholder deployment URLs if Vercel assigns a different production URL.
- Add the live demo to the Fireworks storefront at the current first-tier website price and $39.99/month hosting.
- Capture storefront preview imagery if the Admin listing requires it.
- For an eventual customer: replace identity, contact details, service radius, stock imagery as approved, canonical domain, and schema; connect the quote form; then remove `noindex` and the robots disallow rule.

## Decisions that must be preserved

- This repository is a Fireworks master storefront website, not a real landscaping business.
- Keep demo deployments out of search indexes while they contain fictional business details.
- Never add reviews, certifications, licenses, years in business, addresses, team biographies, or project claims unless supplied and verified for the purchasing customer.
- Use customer project photos when available; keep stock sources documented otherwise.
- Do not add a database, dashboard, login, payment flow, or paid dependency unless the purchased project requires one.
- Do not store inquiry data until Anthony approves the delivery provider and privacy handling.

## Known issues or blockers

- Vercel and storefront publication have not yet been completed in this initial handoff draft.
- The stock photos are remotely hosted by Unsplash; a customer version may instead use optimized, locally controlled assets.

## Start the dedicated project chat with this prompt

```text
Use the attached FIREWORKS-PROJECT.md as the source of truth for this website. Inspect the repository and verify whether anything changed after the recorded commits before editing. Preserve the documented design, hosting, and integration decisions. Work on a separate branch and provide a current preview. Do not merge or publish until Anthony approves it.
```

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
| Tested implementation commit | `02940c4f6e344632966a162abb2d40ffb306e0d5` |
| Storefront media commit | `6ec3de77b67c59be4f978b29effcfe098614c5b3` |
| Handoff commit | Final documentation-only commit on `main`; verify the latest repository commit before editing |
| Hosting provider | Vercel |
| Vercel project | `landscaping-site-1` in Anthony's projects |
| Preview URL | https://landscaping-site-1.vercel.app |
| Live URL | https://landscaping-site-1.vercel.app |
| Live-site status | Production deployment verified; public Fireworks storefront listing verified |
| Storefront listing | Rivers & Roots — Landscaping Website — Featured, Available, $699.99 + $39.99/month Tier 1 hosting |
| Storefront URL | https://fireworks-websitebuilder.com/WebsiteCollection |
| Last verified | September 20, 2026 |

## Goal and approved scope

Create a polished, ready-built landscaping website for the Fireworks website collection. The three-page site targets Pittsburgh and the South Hills with locally relevant service copy, a detailed quote-request experience, responsive design, stock photography, and complete SEO scaffolding. Publish it through Vercel and list it in the Fireworks storefront using first-tier website pricing and hosting.

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
- `/#approach` — local-first approach and trust-building content without a fourth page, preserving the three-page storefront tier.
- `/quote` — detailed inquiry form covering contact details, location, services, timeline, budget, and project goals.
- `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, `/favicon.svg` — discovery and browser metadata assets.

## Forms and conversion paths

The quote form validates required contact, property, timing, service, and project-detail fields. Storefront demo mode does not transmit or retain personal information; it shows an explicit demo confirmation. Before a customer launch, connect the form to the customer's approved inbox, CRM, or form provider and test both success and error states.

## Integrations

| Provider | Purpose | Status | Project/resource reference | Environment variable names | Webhook or route | Remaining setup |
|---|---|---|---|---|---|---|
| Vercel | Static hosting, clean URLs, and automatic production deploys from `main` | Active and verified | Project `landscaping-site-1`; repository `colonnamedia/Landscaping-site-1` | None | None | Add a customer domain only after purchase and approval |
| Fireworks storefront | Public catalog listing and sales entry point | Published and verified | `Rivers & Roots — Landscaping Website`; Featured; Available | None | None | Customize the master after purchase; do not edit the public listing price without approval |
| Form delivery provider | Deliver customer quote inquiries | Not selected | None | None | None | Choose only after a customer purchases the website |

No database, payment, authentication, analytics, or inherited client integration is present.

## Deployment

`vercel.json` runs `npm run build`, publishes `dist/`, enables clean URLs, adds long-lived asset caching, and sets basic security headers. Vercel project `landscaping-site-1` is linked to production branch `main`. The production URL and storefront preview asset were verified after deployment.

## Completed and verified

- New three-page landscaping website created from a clean repository and aligned to Fireworks storefront Tier 1.
- Pittsburgh and South Hills service-area language added throughout the visible content and metadata.
- Unique titles, descriptions, canonicals, Open Graph tags, Twitter cards, semantic headings, descriptive image alt text, JSON-LD, sitemap, and robots file added.
- Fictional demo business, contact details, and quote behavior clearly disclosed.
- Stock photography source and license references documented.
- Responsive navigation and quote-form interaction implemented.
- Automated build and site-structure checks implemented.
- `npm run check` passed across all three pages for metadata, structure, JSON-LD, and image alternative text.
- `npm run build` passed and produced the Vercel-ready `dist/` output.
- Desktop visual QA verified the homepage, services page, quote page, navigation, images, and lack of horizontal overflow.
- Quote-form validation and demo confirmation were tested with non-sensitive sample data; the service preselection query parameter was also verified.
- Vercel production deployment was verified at https://landscaping-site-1.vercel.app.
- The Fireworks storefront card, preview image, $699.99 purchase price, $39.99/month Tier 1 hosting, Featured status, Available status, and Live Demo control were verified on the public Website Collection.

## Remaining work

- For an eventual customer: replace identity, contact details, service radius, stock imagery as approved, canonical domain, and schema; connect the quote form; then remove `noindex` and the robots disallow rule.
- Complete a dedicated phone-width visual pass during customer customization; the responsive CSS and mobile navigation are implemented, but the final customer content may alter wrapping.
- Add the customer's approved custom domain in Vercel after purchase.

## Decisions that must be preserved

- This repository is a Fireworks master storefront website, not a real landscaping business.
- Keep demo deployments out of search indexes while they contain fictional business details.
- Never add reviews, certifications, licenses, years in business, addresses, team biographies, or project claims unless supplied and verified for the purchasing customer.
- Use customer project photos when available; keep stock sources documented otherwise.
- Do not add a database, dashboard, login, payment flow, or paid dependency unless the purchased project requires one.
- Do not store inquiry data until Anthony approves the delivery provider and privacy handling.

## Known issues or blockers

- No launch blocker remains for the storefront demo.
- The quote form intentionally does not send or retain inquiries in demo mode; connect and test a delivery provider before a customer launch.
- Search indexing is intentionally disabled while the site contains fictional business details. Remove `noindex` and the robots disallow rule only after customer information is complete and verified.
- The stock photos are remotely hosted by Unsplash; a customer version may instead use approved project photos or optimized, locally controlled assets.

## Start the dedicated project chat with this prompt

```text
Use the attached FIREWORKS-PROJECT.md as the source of truth for this website. Inspect the repository and verify whether anything changed after the recorded commits before editing. Preserve the documented design, hosting, and integration decisions. Work on a separate branch and provide a current preview. Do not merge or publish until Anthony approves it.
```

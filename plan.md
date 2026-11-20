# Sacrament Meeting Planner — implementation plan

## Product

A calm, modern planning workspace for bishoprics and branch leaders to review, navigate, and print Sunday sacrament meeting programs. The app uses typed in-memory data with server-side API routes so the UI is already shaped for a future database.

## Implementation approach

- Use Next.js App Router with TypeScript and Tailwind CSS.
- Keep meeting records in `lib/meetings-db.ts` behind typed query functions so pages and API handlers do not depend on the data representation.
- Expose `/api/meetings` and `/api/meetings/[id]` as typed route handlers with clear 400/404 JSON behavior.
- Fetch data from the API in the meetings list and detail pages, keeping the page components aligned with the assignment's server-side API requirement.
- Compose a root layout from reusable `Header`, `NavLinks`, and `Footer` components, then add a nested meetings layout with section navigation and a route-level loading state.
- Keep the detail page readable on screen and print-friendly through a dedicated print action and print CSS.
- Add `public/manus-routes.json` so the managed preview can enumerate the page routes.

## Project structure

- `app/`: root layout/home page, meetings routes, and API handlers.
- `components/`: shared shell, navigation, meeting cards, and the detailed agenda renderer.
- `lib/`: TypeScript domain types, sample records, and query functions.
- `public/`: route manifest and stable visual assets.

## Design

### Three directions considered

1. **Quiet Chapel Ledger** (<0.10): archival church programs, warm paper, restrained ink, serif-forward.
2. **Modern Parish Blue** (selected, <0.10): contemporary civic-planning clarity, confident blue, generous white space, crisp typography.
3. **Olive & Brass** (<0.10): heritage stewardship, muted olive, brass accents, soft neutrals.

### Chosen direction: Modern Parish Blue

- **Design movement:** editorial civic dashboard — structured like a well-made public-service schedule, not a generic SaaS admin panel.
- **Core principles:** scan first; ceremony stays visible; hierarchy over decoration; every state should feel printable and shareable.
- **Color philosophy:** deep ink-blue for trust and legibility, bright cobalt for active navigation and calls to action, pale blue fields for wayfinding, and warm off-white surfaces to keep the experience human.
- **Layout paradigm:** a strong left-aligned page rail and overlapping content panels; list pages use staggered cards rather than a centered grid; detail pages use a two-column agenda rail on desktop and one readable column on small screens.
- **Signature elements:** small uppercase section labels, blue index numbers for agenda moments, and a slim date marker that behaves like a printed bulletin tab.
- **Interaction philosophy:** links should look like confident wayfinding; cards reveal their next step through a clear arrow and active route state, never through ambiguous hover-only affordances.
- **Animation:** restrained 150–220ms fades and vertical easing for hover/focus; no looping decoration; print mode removes all motion and interaction chrome.
- **Typography system:** DM Sans for the interface and metadata, with strong weight contrast rather than lots of sizes. Headlines are compact and confident; body copy is generous and high-contrast.
- **Brand essence:** “A clearer Sunday starts on paper.” For leaders who prepare meetings and members who want the program at a glance. Personality: prepared, welcoming, dependable.
- **Brand voice:** headlines are direct and calm; microcopy is quietly helpful. Example lines: “Plan the order of worship.” and “Print the program when the plan is ready.”
- **Wordmark & logo:** a compact blue tab mark with three stacked lines representing announcements, worship, and people, paired with the wordmark “Sunday Order.”
- **Signature brand color:** `#2457D6` cobalt blue.

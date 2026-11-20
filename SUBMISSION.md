# W02 Sacrament Meeting Planner — submission notes

## Project links

The managed preview is available from the project workspace. To complete the course submission, connect this project to the student GitHub repository named `sacrament-meetings`, push the `peer-code-review` branch, open a pull request against `main`, and deploy that branch to Vercel. Paste the repository URL, pull request URL, and peer-code-review preview URL into Canvas.

## Reflection

I chose to keep the meeting records behind a small typed data-access module rather than embedding sample objects directly in page components. The alternative was to place the data beside each route for speed, but that would make the API routes and UI disagree about the shape of a meeting and would make a later database migration harder. `lib/types.ts` defines the contract, `lib/meetings-db.ts` owns the temporary in-memory records, and both the API handlers and reusable components consume the same `SacramentMeeting` type. This keeps the current assignment simple while leaving a clean seam for a future persistence layer.

## Challenge summary

The main challenge was aligning the required server-side API fetches with the current Next.js App Router behavior. The meeting list and detail pages derive the request origin from forwarded headers so their fetches work in the managed preview as well as locally. The build also surfaced two modern Next.js constraints: runtime-only values need to stay out of static prerendering, and `usePathname` needs a Suspense boundary. I resolved those by moving the live date into a small client component and wrapping active navigation in Suspense.

## AI summary

I used AI to translate the assignment requirements into a typed route/component structure, draft small TypeScript snippets, diagnose the Next.js build errors, and review accessibility and API behavior. I kept the implementation understandable by separating data, formatting helpers, UI components, route handlers, and pages, then ran the linter, production build, endpoint checks, route-manifest check, and rendered-page review before considering the work complete.

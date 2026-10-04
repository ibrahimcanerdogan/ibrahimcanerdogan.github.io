# Portfolio Redesign Plan

## Goal

Modernize the portfolio into a cleaner, more premium and broader professional profile: software engineer, product builder, founder, and technical educator. The site should no longer frame Ibrahim primarily as an Android engineer.

## Design Direction

- The portfolio must behave as a **single-screen application**, not a vertically scrolling landing page.
- Desktop uses a fixed `100dvh` viewport. The document itself must not scroll vertically.
- Keep the existing left-side line / section navigation concept and make it the primary navigation.
- Clicking or keyboard-selecting a node on the left rail swaps the entire main content panel on the right.
- The active section is visually obvious on the rail; inactive sections remain compact and quiet.
- Section changes should use a short, subtle transition (fade / slight translate), never a long page-scroll animation.
- Reduce repeated glassmorphism, particle noise, and heavy emerald glow usage.
- Keep emerald as an accent instead of the dominant visual treatment.
- Introduce a cleaner light/dark visual system with stronger typography and spacing.
- Optimize mobile independently: preserve the one-screen experience with a compact section selector instead of forcing the full desktop rail into narrow widths.

## Interaction Model

The site has one persistent application shell:

- **Left rail:** fixed section line, nodes, labels, language/theme controls where appropriate.
- **Main stage:** one active content view at a time.
- **No page-level vertical scrolling on desktop.**
- The selected section is controlled with React state rather than anchor scrolling.
- Browser hash / deep-link support should be considered so sections can still be linked directly (for example `#experience` or `#projects`) without introducing page scroll.
- Arrow keys / tab navigation should remain accessible.
- If an individual section contains more content than fits comfortably, redesign or paginate that section first; do not fall back to turning the whole portfolio into a long scrolling page.
- On smaller screens, use a compact tab / segmented / drawer-like section selector while keeping the content constrained to the viewport. Only an inner content region may scroll when absolutely necessary.

## Screen / Section Architecture

1. Home / Profile
   - Ibrahim Can Erdogan
   - Software Engineer / Founder / Product Builder positioning
   - Make Android an important expertise area, not the whole identity
   - Present Akhisar Dijital as the current entrepreneurial chapter
   - Primary CTAs: View Work, Download CV, Contact
   - GitHub / LinkedIn / YouTube links

2. About
   - Concise professional summary
   - Current focus
   - Core engineering strengths

3. Experience
   - Cleaner career timeline
   - Akhisar Dijital — Founder & Software Engineer — April 2026 - Present
   - ebebek — Android Software Specialist — April 2023 - April 2026
   - Emphasize impact, ownership, product thinking, and entrepreneurship over long task lists
   - Current role expanded by default; previous roles compact

4. Featured Work / Case Studies
   - Problem
   - Role
   - Engineering decisions
   - Stack
   - Outcome
   - Repository / live demo links where available

5. Engineering & Product Expertise
   - Android / Kotlin / Compose
   - Web / Next.js / TypeScript
   - Architecture
   - Testing / quality
   - Product development
   - CI/CD
   - Founder / business-building perspective

6. Teaching & Community
   - Udemy
   - YouTube
   - Student / audience metrics
   - Selected technical content

7. Certifications
   - Credential name
   - Issuer
   - Validation / expiry details where relevant

8. Contact
    - Clear opportunity / collaboration message
    - Email, LinkedIn, GitHub

## Technical Scope

- Preserve Next.js 15, React 19, Tailwind CSS 4, TypeScript, and the existing static-export / GitHub Pages setup.
- Refactor `src/app/page.tsx` from stacked sections into a viewport-bound shell with an `activeSection` state.
- Refactor `SectionNav` from scroll/anchor navigation into controlled section selection.
- Remove `scrollIntoView`, page scroll tracking, section intersection logic, scroll-to-top behavior, and other code that only exists for a long page.
- Use `min-h-[100dvh]` / `h-[100dvh]` carefully with safe-area handling; avoid accidental body overflow.
- Main stage should use `min-h-0` and overflow containment so content does not push the document beyond the viewport.
- Preserve TR/EN language support.
- Preserve SEO metadata, verification files, CV assets, and public URLs.
- Remove `react-tsparticles` if the redesign no longer uses particles.
- Consolidate repeated visual tokens into shared design primitives / CSS variables where practical.
- Keep accessibility, focus states, reduced-motion support, semantic landmarks, and responsive behavior.
- Validate desktop, tablet, and mobile layouts before merge.

## Delivery

Implementation should be completed incrementally on this branch, starting with:

1. Convert the page into a fixed one-screen application shell
2. Refactor the left rail into state-driven section navigation
3. Build Home / Profile as the default screen
4. Recompose About for one-screen readability
5. Recompose Experience around Akhisar Dijital → ebebek → previous career history
6. Convert Projects into compact featured work / case-study views
7. Add Engineering & Product Expertise
8. Recompose Teaching, Certifications, and Contact as dedicated screens
9. Remove long-page-only scroll code and obsolete particles if no longer needed
10. Responsive / keyboard / accessibility polish
11. Build / lint verification

## Implementation Status

- [x] Fixed single-screen application shell
- [x] State-driven left section rail
- [x] Compact mobile section selector
- [x] Home / Profile screen
- [x] About screen
- [x] Experience screen with Akhisar Dijital as the current chapter
- [x] Selected Work screen
- [x] Engineering & Product Expertise screen
- [x] Teaching & Community screen
- [x] Certifications screen
- [x] Contact screen
- [x] TR/EN navigation alignment
- [x] General Software Engineer / Founder SEO positioning
- [x] Page-level scrolling removed
- [x] Pull-request quality workflow added
- [ ] Quality workflow green
- [ ] Visual QA at common desktop and mobile viewport sizes

This PR is intentionally opened before implementation so the redesign can be developed and reviewed incrementally.

# Portfolio Redesign Plan

## Goal

Modernize the portfolio into a cleaner, more premium and broader professional profile: software engineer, product builder, founder, and technical educator. The site should no longer frame Ibrahim primarily as an Android engineer.

## Design Direction

- Reduce repeated glassmorphism, particle noise, and heavy emerald glow usage.
- Keep emerald as an accent instead of the dominant visual treatment.
- Introduce a cleaner light/dark visual system with stronger typography and spacing.
- Replace the left rail navigation with a compact sticky top navigation.
- Optimize mobile layouts independently instead of only scaling down desktop layouts.

## Information Architecture

1. Hero
   - Ibrahim Can Erdogan
   - Software Engineer / Founder / Product Builder positioning
   - Make Android an important expertise area, not the whole identity
   - Present Akhisar Dijital as the current entrepreneurial chapter
   - Primary CTAs: View Work, Download CV, Contact
   - GitHub / LinkedIn / YouTube links

2. Impact Metrics
   - Years of experience
   - Projects
   - Students reached
   - Certifications / credentials

3. What I Do
   - Software Engineering
   - Mobile & Web Product Development
   - Entrepreneurship / Akhisar Dijital
   - Technical Education

4. About
   - Concise professional summary
   - Current focus
   - Core engineering strengths

5. Experience
   - Cleaner career timeline
   - Akhisar Dijital — Founder & Software Engineer — April 2026 - Present
   - ebebek — Android Software Specialist — April 2023 - April 2026
   - Emphasize impact, ownership, product thinking, and entrepreneurship over long task lists
   - Current role expanded by default; previous roles compact

6. Featured Work / Case Studies
   - Problem
   - Role
   - Engineering decisions
   - Stack
   - Outcome
   - Repository / live demo links where available

7. Engineering & Product Expertise
   - Android / Kotlin / Compose
   - Web / Next.js / TypeScript
   - Architecture
   - Testing / quality
   - Product development
   - CI/CD
   - Founder / business-building perspective

8. Teaching & Community
   - Udemy
   - YouTube
   - Student / audience metrics
   - Selected technical content

9. Certifications
   - Credential name
   - Issuer
   - Validation / expiry details where relevant

10. Contact CTA
    - Clear opportunity / collaboration message
    - Email, LinkedIn, GitHub

## Technical Scope

- Preserve Next.js 15, React 19, Tailwind CSS 4, TypeScript, and the existing static-export / GitHub Pages setup.
- Preserve TR/EN language support.
- Preserve SEO metadata, verification files, CV assets, and public URLs.
- Remove `react-tsparticles` if the redesign no longer uses particles.
- Consolidate repeated visual tokens into shared design primitives / CSS variables where practical.
- Keep accessibility, focus states, reduced-motion support, semantic landmarks, and responsive behavior.
- Validate desktop, tablet, and mobile layouts before merge.

## Delivery

Implementation should be completed incrementally on this branch, starting with:

1. Global design system
2. Navbar
3. Hero + impact metrics
4. Main section shell / spacing
5. Experience
6. Projects / case studies
7. Teaching, certifications, and contact
8. Responsive + accessibility polish
9. Build / lint verification

This PR is intentionally opened before implementation so the redesign can be developed and reviewed incrementally.

# Dell 1996 Portfolio Redesign Specification

## Problem Statement

The personal website currently uses a generic modern slate-900 template that does not reflect the distinctive Dell 1996 catalog-era aesthetic defined in `DESIGN.md`. We need to redesign the homepage into an authentic 1996 retro experience displaying Leonardo Nadin's developer profile, projects, and contact links using the exact typography, color palette, ribbon cards, and frame structure specified.

## Goals

- [x] Implement the Dell 1996 aesthetic complete with outer black page frame, top banner with yellow sticker and red phone callout, and footer band.
- [x] Render developer information and featured projects (Qual o App?, Quero me mudar) inside authentic color-block ribbon cards.
- [x] Ensure fully responsive adaptation down to mobile viewports while preserving period-accurate typography (Arial Black, Helvetica Bold, Times New Roman) and styling rules (no soft shadows, no gradients).

## Out of Scope

| Feature | Reason |
| --- | --- |
| Dynamic backend CMS / database integration | The portfolio is static and content is driven directly by configuration/components. |
| User authentication / cart checkout systems | Mocked/period-styled UI only; real e-commerce functionality is unnecessary for a portfolio. |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Portfolio adaptation to Dell 1996 components | Map Leonardo's profile and projects into Dell ribbon cards, CTA red block, and catalog eyebrows | Aligns personal brand content with vintage catalog structure seamlessly | yes |
| CSS styling method | TailwindCSS configured with custom vintage tokens and CSS rules matching DESIGN.md | Leverages existing Nuxt/Tailwind setup without extra bloat | yes |
| Responsive behavior | Black frame shrinks from 8px to 4px/2px and columns stack vertically on screens under 768px | Complies with DESIGN.md responsive guidelines | yes |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Core Vintage Shell & Page Frame ⭐ MVP

**User Story**: As a visitor, I want to see a faithful Dell 1996 web layout so that I immediately experience the authentic catalog-era atmosphere.

**Why P1**: Foundation of the entire design language and container for all portfolio content.

**Acceptance Criteria**:

1. The system SHALL render a solid black outer page-frame border around the viewport with 8px width on desktop and scaled thickness on mobile.
2. The system SHALL render the top black banner containing the headline "LEONARDO NADIN. FULL STACK DEVELOPER.", the yellow "BUY a DELL" style sticker tab, and a red phone/contact callout.
3. The system SHALL apply system serif font Times New Roman for body text, Helvetica Bold for UI labels/buttons, and Arial Black for display headlines without soft drop-shadows or CSS gradients.

**Independent Test**: Can demo by loading the page and verifying the black frame, top banner, typography rules, and zero soft shadows.

---

### P2: Portfolio Content & Color-Block Ribbon Cards

**User Story**: As a visitor, I want to explore Leonardo Nadin's projects and developer background through color-tinted catalog ribbon cards so that I can discover his work in an engaging way.

**Why P2**: Primary content delivery mechanism showcasing skills, experience, and projects.

**Acceptance Criteria**:

1. The system SHALL render the primary CTA red panel featuring Leonardo's value proposition with white Times New Roman typography and 1px black border.
2. WHEN rendering portfolio projects ("Qual o App?", "Quero me mudar"), THEN the system SHALL display each project in a ribbon card composed of a white Helvetica title bar and a tinted body block using the designated palette colors (e.g. Sage, Salmon, Peach, Periwinkle).
3. WHEN a user clicks on an external project or social link, THEN the system SHALL open the link in a new tab using standard browser navigation.

**Independent Test**: Can demo by viewing the project cards with correct tint colors and clicking external links to verify they open properly.

---

### P3: Period Navigation & Footer Band

**User Story**: As a visitor, I want to see a period-accurate icon navigation bar and footer small print so that the 1996 web aesthetic is completed down to the bottom of the page.

**Why P3**: Completes the full page experience as specified in DESIGN.md.

**Acceptance Criteria**:

1. The system SHALL render a 4-item icon-label navigation bar at the bottom with labels (FIND / HOME / PROJECTS / CONTACT) and classic underline links.
2. The system SHALL render a footer band with 1px top border containing classic link blue anchors and period browser compatibility disclaimer ("best viewed with browser versions 3.0 and higher").

**Independent Test**: Can demo by scrolling to the bottom and confirming the icon nav and footer band layout.

---

## Edge Cases

- IF the viewport width is below 768px, THEN the system SHALL collapse two-column layouts into a single vertical stack.
- IF an image fails to load or is absent, THEN the system SHALL maintain the rectangular ribbon card layout without breaking layout geometry.
- WHEN resizing the viewport dynamically, the system SHALL preserve readable line wrapping and responsive touch targets (minimum 44px on mobile).

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| DELL-01 | P1: Core Vintage Shell & Page Frame | Complete | Verified |
| DELL-02 | P1: Core Vintage Shell & Page Frame | Complete | Verified |
| DELL-03 | P1: Core Vintage Shell & Page Frame | Complete | Verified |
| DELL-04 | P2: Portfolio Content & Color-Block Ribbon Cards | Complete | Verified |
| DELL-05 | P2: Portfolio Content & Color-Block Ribbon Cards | Complete | Verified |
| DELL-06 | P3: Period Navigation & Footer Band | Complete | Verified |

---

## Success Criteria

- [x] Homepage fully adopts the Dell 1996 aesthetic from [DESIGN.md](file:///home/leonadin/dev/nuxt-my-site/DESIGN.md) without modern gradients or rounded soft cards.
- [x] Projects, profile information, and social links are fully accessible and interactive.
- [x] Responsive layout adapts cleanly across desktop, tablet, and mobile screens.

# Dell 1996 Redesign Tasks

## Execution Protocol (MANDATORY -- do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user - do not proceed without it.**

---

**Design**: `.specs/features/dell-1996-redesign/design.md`
**Status**: Approved

---

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: none - strong defaults applied.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Tailwind Config & CSS Tokens | none | - (build gate only) | `tailwind.config.js`, `assets/css/main.css` | `npm run build` |
| UI Components | none | - (build gate only) | `components/vintage/*.vue` | `npm run build` |
| Page Integration | none | - (build gate only) | `pages/index.vue` | `npm run build` |

## Gate Check Commands

> Generated from codebase - confirm before Execute.

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | After component/style tasks | `npm run build` |
| Full | After page assembly tasks | `npm run build` |
| Build | After phase completion or config-only tasks | `npm run build` |

---

## Execution Plan

Phases are ordered and run sequentially - each phase completes before the next begins, and tasks within a phase execute in order.

### Phase 1: Vintage Tokens and Theme Configuration

Tasks setting up vintage color palette, font stacks, and CSS utility base.

```
T1 → T2
```

### Phase 2: Vintage UI Components

Building atomic vintage components matching DESIGN.md.

```
T3 → T4 → T5
```

### Phase 3: Page Assembly and Polish

Integrating components into the homepage and verifying responsiveness.

```
T6
```

---

## Task Breakdown

### T1: Configure Tailwind Tokens and System Fonts

**What**: Update `tailwind.config.js` with exact Dell 1996 color palette, font stacks (Arial Black, Helvetica, Times New Roman), and border radius defaults.
**Where**: `tailwind.config.js`
**Depends on**: None
**Reuses**: Existing Tailwind configuration
**Requirement**: DELL-01

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Color tokens added for `frame-ink`, `canvas`, `ink`, `primary`, `yellow-sticker`, `purple-stripe`, `link`, and tint family (`tint-olive`, `tint-sage`, `tint-salmon`, `tint-peach`, `tint-lime`, `tint-sky`, `tint-steel`, `tint-periwinkle`)
- [ ] Font families configured for `display` (Arial Black), `ui` (Helvetica), and `serif` (Times New Roman)
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: build

---

### T2: Configure CSS Utilities and Reset

**What**: Update `assets/css/main.css` with reset styles, link styling, and bevel shadow utility helpers.
**Where**: `assets/css/main.css`
**Depends on**: T1
**Reuses**: Existing CSS base
**Requirement**: DELL-03

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Global background and base font set to Times New Roman and crisp border rules
- [ ] Bevel sticker and ribbon divider utility classes defined
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: quick

---

### T3: Build VintagePageFrame and VintageBanner Components

**What**: Create layout shell frame and top black banner with yellow sticker tab and red phone/contact callout.
**Where**: `components/vintage/VintageBanner.vue`
**Depends on**: None
**Reuses**: Icons from `nuxt-icon`
**Requirement**: DELL-01

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Banner renders title, subtitle, sticker badge, and contact highlight
- [ ] Layout scales border width gracefully on mobile
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: quick

---

### T4: Build VintageCtaBlock and Eyebrow Components

**What**: Create vivid red Dell-style CTA block and colored section eyebrow headers.
**Where**: `components/vintage/VintageCtaBlock.vue`
**Depends on**: T3
**Reuses**: Design tokens from T1
**Requirement**: DELL-04

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Red CTA panel displays white serif text with 1px black border
- [ ] Section eyebrow renders bold display typography on solid tint background
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: quick

---

### T5: Build VintageRibbonCard Component

**What**: Create product-row style ribbon card with white Helvetica title bar and tinted color-block body.
**Where**: `components/vintage/VintageRibbonCard.vue`
**Depends on**: T4
**Reuses**: Design tokens from T1
**Requirement**: DELL-05

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Renders title bar with 1px border and tinted body background based on prop
- [ ] External link and optional NEW! sticker badge render properly
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: quick

---

### T6: Assemble Homepage and Integrate Portfolio Content

**What**: Update `pages/index.vue` to compose the full Dell 1996 layout with navigation and footer.
**Where**: `pages/index.vue`
**Depends on**: None
**Reuses**: All vintage components from Phase 2
**Requirement**: DELL-02

**Tools**:
- MCP: `filesystem`
- Skill: NONE

**Done when**:
- [ ] Homepage renders complete two-column layout on desktop and single-column on mobile
- [ ] Leonardo Nadin's projects, social links, and bio are populated
- [ ] Footer icon nav and period browser compatibility disclaimer are present
- [ ] Gate check passes: `npm run build`

**Tests**: none
**Gate**: full

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3

Phase 1:  T1 -> T2
Phase 2:  T3 -> T4 -> T5
Phase 3:  T6
```

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Configure Tailwind Tokens and System Fonts | 1 file | ✅ Granular |
| T2: Configure CSS Utilities and Reset | 1 file | ✅ Granular |
| T3: Build VintagePageFrame and VintageBanner Components | 1 component | ✅ Granular |
| T4: Build VintageCtaBlock and Eyebrow Components | 1 component | ✅ Granular |
| T5: Build VintageRibbonCard Component | 1 component | ✅ Granular |
| T6: Assemble Homepage and Integrate Portfolio Content | 1 page | ✅ Granular |

---

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | None | ✅ Match |
| T2 | T1 | T1 -> T2 | ✅ Match |
| T3 | None | None | ✅ Match |
| T4 | T3 | T3 -> T4 | ✅ Match |
| T5 | T4 | T4 -> T5 | ✅ Match |
| T6 | None | None | ✅ Match |

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1: Configure Tailwind Tokens and System Fonts | Tailwind Config & CSS Tokens | none | Tests: none | ✅ OK |
| T2: Configure CSS Utilities and Reset | Tailwind Config & CSS Tokens | none | Tests: none | ✅ OK |
| T3: Build VintagePageFrame and VintageBanner Components | UI Components | none | Tests: none | ✅ OK |
| T4: Build VintageCtaBlock and Eyebrow Components | UI Components | none | Tests: none | ✅ OK |
| T5: Build VintageRibbonCard Component | UI Components | none | Tests: none | ✅ OK |
| T6: Assemble Homepage and Integrate Portfolio Content | Page Integration | none | Tests: none | ✅ OK |

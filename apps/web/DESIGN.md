---
version: alpha
name: Forge
description: An industrial-grade dark design system where ember-orange ignition heats a graphite-black workspace, tuned for dense technical product surfaces.
theme: dark
colors:
  primary: "#F65A1A"
  primary-hover: "#FF7A38"
  secondary: "#F2F2F3"
  tertiary: "#8B8B92"
  neutral: "#0B0B0C"
  surface: "#131315"
  surface-sunken: "#1B1B1E"
  on-surface: "#F2F2F3"
  on-surface-muted: "#8B8B92"
  border: "#26262A"
  border-strong: "#2F2F34"
  focus: "#F65A1A"
  error: "#E2403A"
  success: "#4FB477"
typography:
  display-xl:
    fontFamily: "Space Grotesk"
    fontSize: "88px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-md:
    fontFamily: "Space Grotesk"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
  title-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  body-sm:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
    textTransform: uppercase
  mono-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  full: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  gutter: "24px"
  section-y: "64px"
elevation:
  none: "none"
  inset-edge: "inset 0 1px 0 rgba(255,255,255,0.03)"
  card: "inset 0 1px 0 rgba(255,255,255,0.03)"
  pop: "0 18px 40px -12px rgba(0,0,0,0.75), 0 2px 0 0 rgba(0,0,0,0.4)"
  focus: "0 0 0 2px rgba(246,90,26,0.24)"
borders:
  hairline: "1px solid {colors.border}"
  strong: "1px solid {colors.border-strong}"
  accent: "1px solid {colors.primary}"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.neutral}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    border: "{borders.hairline}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    border: "1px solid {colors.on-surface}"
  input-field:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    border: "{borders.hairline}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
    typography: "{typography.body-md}"
  input-field-focus:
    border: "{borders.accent}"
    backgroundColor: "{colors.surface}"
    elevation: "{elevation.focus}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    border: "{borders.hairline}"
    rounded: "{rounded.md}"
    padding: "24px"
    elevation: "{elevation.card}"
  checkbox:
    backgroundColor: "{colors.surface-sunken}"
    border: "{borders.hairline}"
    rounded: "{rounded.sm}"
    size: "18px"
  checkbox-checked:
    backgroundColor: "{colors.primary}"
    border: "{borders.accent}"
    textColor: "{colors.neutral}"
  toggle-track:
    backgroundColor: "{colors.surface-sunken}"
    border: "{borders.hairline}"
    rounded: "{rounded.full}"
    width: "40px"
    height: "22px"
  toggle-track-checked:
    backgroundColor: "{colors.primary}"
    border: "{borders.accent}"
  tabs-tab:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    padding: "12px 0"
  tabs-active:
    textColor: "{colors.on-surface}"
    underline: "2px solid {colors.primary}"
  spec-panel:
    backgroundColor: "{colors.surface}"
    border: "{borders.hairline}"
    rounded: "{rounded.md}"
    elevation: "{elevation.card}"
  spec-panel-bar:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    border-bottom: "{borders.hairline}"
    padding: "12px 16px"
    typography: "{typography.label-sm}"
  id-badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    height: "22px"
    padding: "0 4px"
---

## Overview

Forge is a dark, industrial product system. It reads like the spec book of a precision workshop: ink-black canvas, hairline borders, neo-grotesque display type, and a single ember accent reserved for action. The system is engineered for dense, technical product surfaces (dashboards, admin tools, developer interfaces) where the eye must scan and operate quickly.

The visual contract is a contract of restraint. Ornament is replaced by typography and grid; color saturation is reserved for a single heat accent that marks every interactive surface. The system earns its presence through hairline structure and disciplined type, not through scattered labels, decorative numbering, or pseudo-technical metadata.

The system is plain CSS over semantic HTML. There are no framework dependencies. All tokens live in `output/css/system.css` under `:root` and are mirrored in this document's YAML front matter as the normative source.

## Colors

Forge's palette is a heat-versus-graphite contract. Four near-black surfaces give the canvas its weight; a single ember accent provides every spark of color; two neutral foregrounds carry every label. The narrow palette is intentional — when ember appears, it always means "act here," "focus is here," or "this datum matters most."

| Token | Value | Role |
| --- | --- | --- |
| `neutral` (Ink) | `#0B0B0C` | Primary page background, the lowest canvas |
| `surface` (Graphite) | `#131315` | Raised surface for cards and spec panels |
| `surface-sunken` (Slate) | `#1B1B1E` | Recessed wells, input fields, secondary cells |
| `border` (Filament) | `#26262A` | Hairline borders, dividers, table rules |
| `border-strong` | `#2F2F34` | Hover and emphasized hairlines |
| `primary` (Ember) | `#F65A1A` | Primary actions, focus ring, chart highlight, ID badge fill |
| `primary-hover` (Spark) | `#FF7A38` | Hover and active state of primary surfaces |
| `on-surface` (Bone) | `#F2F2F3` | Primary text and high-contrast labels |
| `on-surface-muted` (Ash) | `#8B8B92` | Secondary text, axis lines, muted eyebrows |
| `error` | `#E2403A` | Validation and destructive signals |
| `success` | `#4FB477` | Positive status pills |

Bone on Ink reaches a ~17:1 contrast ratio and clears WCAG AAA for body text. Ember on Ink reaches ~4.6:1 and is reserved for non-essential color cues; meaning is always carried by shape, label, or icon alongside it. Muted Ash is restricted to non-essential text such as eyebrows, captions, and axis labels.

## Typography

Forge pairs a neo-grotesque display face with a humanist UI face and a mechanical monospace. The combination feels like a workshop spec book: tightly-tracked headlines, neutral body text, and mono numerics that carry section IDs, tags, and data.

- **Space Grotesk (display)** — display-xl through headline-md. Weight 600–700 with `-0.02em` tracking. Used for hero numerals, page headlines, and section titles.
- **Inter (body)** — title-md, body-lg, body-md, body-sm. Used for UI text, form controls, and prose. Form values use weight 500 to feel deliberate.
- **JetBrains Mono (mono)** — label-sm, mono-sm. Reserved for numeric data: status pills tied to real state, table headers, pagination cells, axis ticks, build IDs, timestamps, and numeric values. Never used as decorative micro-labels, section indices, or pseudo-technical chrome.

Display headlines combine Space Grotesk 700 with negative tracking and 1.05 line-height to look engineered rather than editorial. Body text never goes below 13px to keep dense product surfaces legible. Lead with the heading; the system does not use eyebrow kickers above primary or section titles.

## Layout

The system uses a 24px gutter and a 1280px max-width container. Most surfaces are organized as a hairline grid: rectangular panels divided by 1px borders rather than by white space, which produces the workshop-spec density that defines Forge.

Spacing scale tokens move on a 4px ramp through 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px. Section vertical padding lands at 64px on desktop. Within panels, the standard padding is 24px; tight tables and meta rows drop to 12/16.

Section heads lead with a Space Grotesk title and a hairline bottom border. They never carry a decorative numbered ID or a mono kicker above the heading, and they take at most one supporting subtitle, and only when it carries information the user actually needs.

Component density is moderate-to-high. Form controls are 40px tall, buttons are 40/32/48 across sm/md/lg, table rows are 40px, and icon tiles are 44px. The toggle thumb travels 18px; the checkbox tick uses a hairline-thin SVG mask.

## Elevation & Depth

Forge is predominantly flat. Hairlines do the separation work. Three depth signals are allowed:

1. **Inset top highlight** — `inset 0 1px 0 rgba(255,255,255,0.03)` on every raised surface. The result is a faint machined edge that suggests material without simulating light.
2. **Ember focus halo** — `0 0 0 2px rgba(246,90,26,0.24)` on focused interactive elements. The halo replaces a hard outline and pairs with a 1px ember border on inputs.
3. **Floating shadow** — one drop-shadow token reserved for menus and popovers: `0 18px 40px -12px rgba(0,0,0,0.75), 0 2px 0 0 rgba(0,0,0,0.4)`. Cards and tabs never use it.

There is no blur, no gradient lighting, and no shadow on inline elements. If a surface needs more presence, switch its background between Ink, Graphite, and Slate before reaching for elevation.

## Shapes

The radius scale is intentionally tight. The system reads as machined parts rather than rounded software.

- `none` (0px) — tables, section frames, hairline dividers.
- `sm` (2px) — inputs (corners), tag chips, ID badges, status pills, pagination cells.
- `md` (4px) — cards, spec panels, buttons, inputs (overall corners settle here for a softer touch where the system requires it).
- `lg` (8px) — modals and large floating panels only.
- `full` (999px) — reserved for the toggle thumb and the toggle track exclusively.

Border weight is uniformly 1px hairline in Filament. Borders carry the visual weight that ornament would in other systems; do not thicken them to 2px to create emphasis. Use color (ember) to emphasize instead.

## Components

Every component is built from the same vocabulary: hairline borders, 4px radius (or 2px for badges), Inter or JetBrains Mono labels, Ember as the single interactive accent, and an optional ID badge or eyebrow.

### Buttons

- **Primary** — solid Ember fill, Ink text, 4px radius, 40px tall, 16px horizontal padding, label-sm uppercase. Hover transitions to Spark. Focus adds the ember halo.
- **Secondary** — transparent fill, 1px Filament border, Bone text. Hover lightens the border to Bone. Used for cancel, back, secondary CTAs.
- **Ghost / icon-only** — transparent, no border, muted Ash text that lifts to Bone on hover. Used inside toolbars, table rows, and spec panel bars.
- Sizes: `sm` 32px, `md` 40px, `lg` 48px. Always paired with an icon when used for navigation actions.

### Input fields

Slate background, 1px Filament border, 4px radius, Inter 500 value text. Focus moves the border to Ember and adds the halo; the background also lightens to Graphite to mark the active well. Error state swaps the border to the error red. Placeholder uses a soft Ash and never carries critical information.

Every field is paired with a label-sm eyebrow. Hints use body-sm Ash; error hints use body-sm error red.

### Card and Spec Panel

A card is Graphite over Ink, 1px Filament border, 4px radius, and a subtle inset top edge highlight. It carries a header row with a plain Inter title on the left and controls or a status pill on the right. No decorative ID badges, eyebrow kickers, or pseudo-technical micro-labels in the chrome.

The **panel header** is the signature variant. It is a single hairline-divided bar holding a panel title, an optional status pill, and a chevron action. Status pills must be wired to real runtime state (for example `Live`, `Nominal`, `12 active`, `Running`, `Failed`); they are never used as decoration. Badges are reserved for actionable data, not for numbering panels in sequence.

### Checkbox and Toggle

- **Checkbox** — 18px Slate square, 1px Filament border, 2px radius. When checked the fill becomes Ember and a clipped-path tick in Ink appears at scale 1. Focus shows the ember halo.
- **Toggle** — 40 × 22 pill with a 16px thumb. Off-state thumb is Ash on Slate; checked state flips the track to Ember and the thumb to Ink, sliding 18px across.

### Tabs

Ghost underline tabs in a horizontal row, separated by a hairline bottom border. Labels are JetBrains Mono uppercase with `0.12em` tracking. The active tab is Bone text with a 2px Ember underline; inactive tabs are Ash. Hover lifts inactive labels to Bone. Tabs never use a background fill or pill chrome.

### Tables, tags, pagination, and bars

The supporting cast follows the same grammar.

- **Tables** — mono uppercase headers, hairline row borders, no radius. Hover wash is `rgba(255,255,255,0.02)`.
- **Tags / status pills** — mono uppercase, 2px radius, 22px tall. Neutral tags use a Filament border; live tags switch to an Ember outline or a solid Ember fill with Ink text.
- **Pagination** — mono cells, 2px radius, current page is solid Ember with Ink text.
- **Bar chart** — Filament columns with a single Ember highlight column to mark the focal data point; gutters of 6px keep the dense look.

### Icon library

Forge uses **Tabler Icons** ([https://tabler.io/icons](https://tabler.io/icons), MIT license) exclusively. Tabler's precise, stroke-based outline icons match the hairline border language and the technical mood of the system. Generated previews render Tabler icons inside the `icon-tile` class — a 44px hairline-bordered square that hovers to Ember — for the signature icon-grid section, and at 20px inside buttons, table cells, and tabs. Use only official SVG markup copied from the Tabler source. Do not mix libraries and do not invent custom paths.

## Do's and Don'ts

**Do**

- Use Ember sparingly. One ember surface per visual group is the target: actions, focused inputs, the highlighted data column, the active tab underline.
- Lead with the heading. Section heads carry a Space Grotesk title and, at most, one supporting subtitle that carries real information.
- Keep typography in three families only: Space Grotesk, Inter, JetBrains Mono. Use mono for real numeric data (IDs, timestamps, axis ticks, status pills wired to live state). Never use mono for body prose, decorative eyebrows, or pseudo-technical micro-labels.
- Maintain hairline borders at 1px Filament. If you need more emphasis, switch background between Ink, Graphite, and Slate before changing the border weight.
- Prefer flat depth. Reach for the floating shadow only on menus and popovers.
- Let space breathe. Empty regions are quiet space, not slots to fill with metadata.

**Don't**

- Don't introduce a second saturated accent (no greens, blues, or purples alongside Ember). Status colors are reserved for error and success states only and remain restrained.
- Don't round corners beyond 8px. The system reads as machined parts; pill shapes are reserved for the toggle.
- Don't use mono fonts for paragraphs or sentence-length text. Mono is structural, not editorial.
- Don't number panels, sections, or cards for decorative effect. Numbered IDs (`01`, `02`, `03`) are forbidden unless the content describes an explicit sequential process.
- Don't scatter decorative metadata. Coordinates, version tags, edition strings, reading times, source counts, plate/figure indices, file paths, timestamps used as ornament, and similar "data exhaust" are banned. Only include such data when it is real, functional, and necessary.
- Don't pair panels with eyebrow kickers, all-caps mono micro-labels, or duplicate identity tags. Every label must earn its place.
- Don't use pills or badges as decoration. Pills and badges must reflect dynamic, actionable state.
- Don't add drop shadows or gradients to cards, buttons, or inputs to fake depth. The system is intentionally flat.
- Don't use em dashes in headings or body copy. Rewrite with commas, periods, or parentheses.
- Don't widen the gutter or the section padding to make a page feel less dense. Density is the point; if a layout feels cramped, restructure the grid before loosening the spacing scale.

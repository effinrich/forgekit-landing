Read DESIGN.md in the project root before changing UI.

1. Find the design system stylesheet (css/system.css) and wire it up for me. Detect my framework (Vite, Next.js, Remix/React Router, plain HTML, or whatever this project uses) and import the stylesheet exactly once from the app's main/global CSS, or add a <link> in the HTML head for plain HTML. Move the file somewhere sensible if needed.
2. Use the tokens, utilities, component anatomy, spacing, typography, and states described in DESIGN.md.
3. Refactor the requested UI to match the system instead of inventing a new visual style.
4. If existing components conflict with DESIGN.md, explain the conflict and choose the option that keeps the interface most consistent.
5. If html/preview.html exists, read it as a visual reference and match the structure, spacing, and component styling shown there.
6. This web app uses Chakra-UI V3. Apply styles to Chakra UI using their agents and MCP. The SKILLS to use are chakra-ui-builder, chakra-ui-migrate, hakra-ui-refactor.
- doc: https://chakra-ui.com/docs/get-started/ai/skills
# Rana Faraji — Portfolio
React 18 + Vite portfolio with custom CSS, reusable section components, Canvas 2D waves, mouse-responsive cards, and scroll reveals.

## Development
`npm install`
`npm run dev`

## Production
`npm run build` creates `dist/`.
`npm run preview` serves the production build locally.

## Edit content
Section components are in `src/components/`. Theme and layout are in `src/styles.css`. Canvas animation is in `CanvasWaves.jsx`; hover and scroll effects are in `src/useMotion.js`.

Animations respect reduced-motion preferences. Canvas rendering pauses offscreen and when the browser tab is hidden.

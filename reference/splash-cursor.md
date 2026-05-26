// SplashCursor — WebGL fluid dynamics cursor effect
// Source: user provided React component (~500 lines WebGL)
// Full source at: reference/splash-cursor.jsx (separate file)

// What it does:
//   Full-page WebGL canvas overlay. Mouse/touch input generates real-time
//   fluid dynamics simulation — colorful splats that swirl, curl, and dissipate
//   with Navier-Stokes fluid physics. Rainbow mode cycles colors automatically.
//   Runs in a fixed fullscreen canvas with pointer-events: none.

// Key visual characteristics:
//   - Organic, liquid, swirling color trails following the cursor
//   - Continuous fluid motion even after mouse stops (velocity persists)
//   - Rainbow color cycling or single accent color mode
//   - Transparent background — overlays on existing page content
//   - GPU-accelerated via WebGL2 (falls back to WebGL1)

// Usage scenario:
//   Place as a full-page background overlay for dramatic visual engagement.
//   Best on: Hero sections, splash pages, creative portfolio intros.
//   Not suitable as a section divider (too heavyweight).

// Key props/config:
//   COLOR: hex color for single-color mode (default '#ff0000')
//   RAINBOW_MODE: cycle through colors automatically (default true)
//   TRANSPARENT: no solid background (default true)
//   SPLAT_FORCE: how strong each cursor movement pushes fluid (default 6000)
//   DENSITY_DISSIPATION: how fast color fades (default 3.5)
//   VELOCITY_DISSIPATION: how fast motion decays (default 2)
//   CURL: how much swirl/turbulence (default 3)

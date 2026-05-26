// Ballpit — Three.js 3D sphere physics with cursor interaction
// Source: user provided React component
// Full source: reference/ballpit.jsx (too large for this file)

// What it does:
//   Canvas-based 3D scene with 200 glossy spheres. Physics simulation:
//   gravity, friction, sphere-sphere collision, wall bouncing.
//   Sphere 0 follows the cursor and pushes other spheres away.
//   Uses MeshPhysicalMaterial with clearcoat for polished look.
//   Supports multi-color gradients, ambient + point lighting.

// Key params:
//   count: 200 (number of spheres)
//   gravity: 0.5
//   friction: 0.9975
//   wallBounce: 0.95
//   maxVelocity: 0.15
//   minSize/maxSize: 0.5/1
//   followCursor: true

// Usage scenarios:
//   - Hero background with interactive physics
//   - Transition/section divider with bouncing objects
//   - Footer or contact section with playful interaction
//   - Could replace 2D emoji drop with 3D sphere physics

// Dependencies: three.js, three/examples/jsm/environments/RoomEnvironment.js

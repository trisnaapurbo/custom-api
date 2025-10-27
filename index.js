const jsonServer = require("json-server"); // Import json-server
const server = jsonServer.create(); // Create server
const router = jsonServer.router("db.json"); // Load db.json
const middlewares = jsonServer.defaults(); // Default middlewares

server.use(middlewares); // Apply middlewares
server.use(router); // Mount router

const port = process.env.PORT || 3000; // Use Render's PORT or fallback

server.listen(port, () => {
  console.log(`🚀 JSON Server is running at http://localhost:${port}`);
});

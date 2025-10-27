const jsonServer = require("json-server"); // Import json-server
const server = jsonServer.create(); // Create server
const router = jsonServer.router("db.json"); // Load db.json
const middlewares = jsonServer.defaults(); // Default middlewares
const port = process.env.PORT || 8080; // Use env port or 8080

server.use(middlewares); // Apply middlewares
server.use(router); // Mount router

server.listen(port, () => {
  console.log(`🚀 JSON Server is running at http://localhost:${port}`);
});

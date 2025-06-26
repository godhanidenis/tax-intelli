import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Ensures Vite fails if port 3000 is unavailable
    host: true, // Listens on all network interfaces
    allowedHosts: [
      ".ngrok-free.app", // Wildcard for all ngrok subdomains
    ],
  },
});

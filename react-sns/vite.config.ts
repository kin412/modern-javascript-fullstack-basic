import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  //json-server로 설정한 로컬테스트db서버가 변해도 리렌더링 되지않음.
  server: {
    watch: {
      ignored: ["**/server/**"],
    },
  },
});

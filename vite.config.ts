// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/react-portfolio/",
// })
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/HenriqueHideaki/react-portfolio", // <-- adicionar isso
})
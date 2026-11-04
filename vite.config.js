import {defineConfig} from 'vite';
export default defineConfig({resolve:{dedupe:['react','react-dom']},optimizeDeps:{include:['react','react-dom/client','react/jsx-runtime'],force:true},esbuild:{jsx:'automatic'},server:{allowedHosts:['terminal.local']},preview:{allowedHosts:['terminal.local']}});

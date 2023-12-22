import { defineConfig } from "vite";
import  pug from "vite-plugin-pug";



const options = { pretty: true } 
const locals = { name: "My Pug" }


export default defineConfig({
  plugins: [ 
    pug(options, locals),
   
  ],
});
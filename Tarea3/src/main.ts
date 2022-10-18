import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  export interface Subject {
    imagen: string
    titulo: string
    detalle: string
    lenguajes: string
    frameworks: string
    librerias: string
  }

  export const subject = [
    {
      imagen: "assets/jason.JPG",
      titulo: "Jason Castro Blanco",
      detalle: "Programador front-end, con miras a convertirme en desarrollador Full Stack.",
      lenguajes: ["Java Script", " Pyhton", " JAVA"],
      frameworks: "Angular",
      librerias: "Bootstrap"
    }
  ]
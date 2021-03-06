# Googlemaps Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Instalación angular material design

- Instalación básica

    ```npm install --save @angular/material @angular/cdk @angular/animations hammerjs```

    Nota: ```hammerjs``` no es obligatorio, es para manejar los gestos para algunos componentes como mat-slider, etc... Si se "instala", luego habría que importarlo en el ```src/main.ts```

- Añadir el BrowserAnimationsModule los import del app.module, previa importación de:

    ```import {BrowserAnimationsModule} from '@angular/platform-browser/animations';```

- E importar los estilos (vease https://material.angular.io/guide/theming#using-a-pre-built-theme), poniendo en el styles.css la siguiente linea:

    ```@import "~@angular/material/prebuilt-themes/indigo-pink.css";```

- Si quisieramos añadir iconos de Material, añadiríamos en el index.html:

    ```<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">```

## Hitos a recordar

Para crear un modulo en el que importar (y exportar) todos los modulos de Material a utilizar (para luego hacer un unico import en el app.module) utilizamos: ``` ng g m material --flat ```
Al hacer esto, se creará un module en la misma carpeta que está el app.module, por tanto, a partir de ese momento, cuando se cree un componente mediante CLI vamos a tener que especificar en que modulo queremos que lo importe con --module, por ej. :  ````ng g c components/mapa --module=app````

RECORDAR: Para poder utilizar el servicio de google maps, recordera que hay que poner la key en el app.module ( https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key ) 

```
AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'  
})
```

## Instalación de Angular Google Maps

```npm install @agm/core --save```

https://angular-maps.com/
https://angular-maps.com/api-docs/agm-core/components/agminfowindow
https://angular-maps.com/api-docs/agm-core/components/agmmap

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

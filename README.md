# Javascript-lab20

## Módulo 7: Patrones de Diseño en Javascript
Conocer los principales patrones de diseño aplicables a Javascript en el navegador y en el backend.

### Unidad 3: Patrones de Código II

Singleton, Factory, Decorator y Observer con ejemplos en framework VueJS

#### Aplicar los patrones en el framework VueJs

#### 👀 Instrucciones 👀

- Entrar en directorio `vuejs-app`
- npm install
- npm run serve



##### Singleton

Crearemos una clase `AuthService` que guardará el estado de autenticación a lo largo de la aplicación

https://vuejs.org/v2/cookbook/adding-instance-properties.html

---------------------------------------------------------------------
##### Factory

Vamos a crear un componente basado en una propiedad

Crear elemento basado en una condición
https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State

Más ejemplos en un código real:

Factory en código fuente de react:
https://github.com/facebook/react/blob/main/packages/react/src/ReactElement.js


---------------------------------------------------------------------
##### Decorators

Implementaremos un decorador que haga un `console.log` cada vez que se usa un método

https://class-component.vuejs.org/guide/custom-decorators.html


---------------------------------------------------------------------
##### Observer

Conocer un aplicación del patrón que ya viene en VueJS
https://es.vuejs.org/v2/guide/components-custom-events.html

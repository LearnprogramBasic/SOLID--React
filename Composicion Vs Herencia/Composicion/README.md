# React Page Layout Composition

Este proyecto demuestra la composición de componentes en React para crear una estructura de página reutilizable. A través de la composición, ensamblamos los componentes `Header`, `Footer` y `Layout` para definir la estructura básica de una página, promoviendo así la reutilización de componentes y la separación de responsabilidades.

## Estructura del Proyecto

El proyecto consta de tres componentes principales:

- `Header.js`: Define el encabezado de la página.
- `Footer.js`: Define el pie de página de la página.
- `Layout.js`: Contenedor que utiliza la composición para incluir `Header`, `Footer` y el contenido principal.

## Instalación y Ejecución

- Clona el repositorio.
- Ejecuta `npm install` para instalar las dependencias.
- Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.

## Conclusión

Este enfoque de composición en React facilita la gestión y el mantenimiento de aplicaciones grandes y complejas, permitiendo una mayor flexibilidad y reutilización de componentes.

-------------------------------------

# Aplicando Herencia en React

Aplicar herencia en React es posible, pero generalmente no es la práctica recomendada debido a la naturaleza de la biblioteca y cómo está diseñada para utilizar la composición sobre la herencia para reutilizar el código. Sin embargo, para fines educativos y para entender cómo podría funcionar, te mostraré un enfoque basado en herencia.

Supongamos que deseas crear una estructura de página similar con un `Header`, un `Footer` y un área de contenido, pero utilizando herencia. Podrías tener una clase base `Page` de la cual heredan todas tus páginas, y esta clase base podría incluir el `Header` y el `Footer`.

## Clase Base Page

Primero, definimos una clase base `Page`. Esta clase renderizará el `Header` y el `Footer`, y definirá un método `renderContent()` que las clases derivadas pueden sobrescribir para inyectar su propio contenido entre el `Header` y el `Footer`.

```jsx
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Page extends Component {
  renderContent() {
    // Las clases derivadas sobrescribirán este método para renderizar su contenido específico
    return null;
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

export default Page;

```

## Clases Derivadas (Páginas Específicas)
Luego, las páginas específicas extenderán la clase Page y sobrescribirán el método renderContent para inyectar su propio contenido.

HomePage

```jsx
import React from 'react';
import Page from './Page';

class HomePage extends Page {
  renderContent() {
    return (
      <div>
        <h1>Página Principal</h1>
        <p>Bienvenido a nuestra aplicación.</p>
      </div>
    );
  }
}

export default HomePage;


```

AboutPage

```js
import React from 'react';
import Page from './Page';

class AboutPage extends Page {
  renderContent() {
    return (
      <div>
        <h1>Acerca de</h1>
        <p>Esta es la página sobre nosotros.</p>
      </div>
    );
  }
}

export default AboutPage;
```

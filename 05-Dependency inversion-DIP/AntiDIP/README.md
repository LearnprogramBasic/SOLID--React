## Anti-Patrón del Principio de Inversión de Dependencias (Anti-DIP) en React

Este proyecto demuestra una violación del Principio de Inversión de Dependencias (DIP) en una aplicación React con TypeScript. A través del componente `UserProfile`, se ilustra cómo la instanciación directa de dependencias conduce a un acoplamiento fuerte y dificulta las pruebas y la extensibilidad.

## Contexto

El componente `UserProfile` es responsable de mostrar información del usuario en la interfaz de usuario. Este componente depende del servicio `UserService` para obtener los datos del usuario. Sin embargo, en lugar de recibir `UserService` como una dependencia inyectada, `UserProfile` crea una instancia de `UserService` directamente dentro de su implementación.

## Problema

La instanciación directa de `UserService` dentro de `UserProfile` crea un acoplamiento fuerte entre el componente y la implementación específica del servicio. Este enfoque viola el Principio de Inversión de Dependencias, que establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos clave:

-   `UserService.ts`: Un servicio simple que proporciona datos de usuario.
-   `UserProfile.tsx`: Un componente React que muestra la información del usuario y depende directamente de `UserService`.
-   `App.tsx`: El componente principal que utiliza `UserProfile`.

## Consecuencias del Anti-Patrón

-   **Dificultad para Realizar Pruebas**: Probar el componente `UserProfile` se complica, ya que está directamente acoplado a `UserService`.
-   **Reducida Flexibilidad**: Cambiar o reemplazar `UserService` por otra implementación requiere cambios significativos en `UserProfile`.
-   **Violación del DIP**: Dependiendo directamente de una implementación concreta en lugar de una abstracción, se viola el DIP.
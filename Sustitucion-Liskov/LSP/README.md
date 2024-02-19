Principio de Sustitución de Liskov (LSP)
El Principio de Sustitución de Liskov (LSP) es fundamental en la programación orientada a objetos y se aplica también en el desarrollo de componentes React. Este principio sugiere que los objetos de una superclase deben poder ser sustituidos por objetos de sus subclases sin alterar el correcto funcionamiento del programa.

Consideremos un componente básico Button en React que recibe como propiedades un label y un evento onClick.

![alt text](image.png)

Este componente simplemente muestra un botón en la interfaz de usuario y, al hacer clic en él, muestra en la consola el mensaje "Button clicked".

![alt text](image-1.png)

Ahora, si queremos extender la funcionalidad de nuestro botón sin alterar su comportamiento original (cumpliendo con el LSP), podemos crear un nuevo componente llamado SoundButton. Este componente añadirá una funcionalidad adicional: reproducir un sonido cuando el botón sea presionado, además de mostrar el mensaje en la consola.


![alt text](image-2.png)

Al utilizar SoundButton, podemos observar que mantiene la funcionalidad original del Button (mostrar el mensaje "Button clicked" en la consola) y añade una nueva característica (reproducir un sonido).

![alt text](image-3.png)

De esta manera, SoundButton puede ser utilizado en cualquier lugar donde se esperaría un Button, sin alterar el comportamiento esperado del sistema, cumpliendo así con el Principio de Sustitución de Liskov.
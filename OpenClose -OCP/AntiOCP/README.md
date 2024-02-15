
# Principio de Abierto/Cerrado (OCP)
Para que el componente ItemList siga el Principio de Abierto/Cerrado (OCP), debe ser capaz de manejar diferentes tipos de elementos sin necesidad de ser modificado cada vez que se introduce un nuevo tipo. El OCP promueve la extensión del comportamiento de una clase sin cambiar el código existente, lo que facilita la mantenibilidad y la escalabilidad del software.

# Problema con el Diseño Actual
El diseño actual del componente ItemList está estrechamente acoplado al tipo de datos Task, lo que significa que está diseñado específicamente para manejar y mostrar tareas. Si en el futuro necesitas utilizar el mismo componente para mostrar otros tipos de elementos, como productos o contactos, tendrías que modificar el componente ItemList para agregar soporte para estos nuevos tipos, violando así el OCP.
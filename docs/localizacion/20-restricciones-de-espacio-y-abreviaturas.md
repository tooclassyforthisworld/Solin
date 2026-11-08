# 20. Restricciones de espacio y abreviaturas

## 20.1. Expansión del texto

El texto en español es normalmente más largo que el inglés (se suele calcular entre un 15 y un 30 % más; en textos muy cortos, como botones, la proporción puede ser mayor). Los diseños deben preverlo ([capítulo 18](./18-internacionalizacion.md)).

## 20.2. Estrategias, por orden de preferencia

1. **Reformular** con una construcción más corta, sin perder sentido.
2. **Usar un sinónimo más breve** y coherente con el glosario.
3. **Suprimir palabras superfluas** (posesivos, cortesías, artículos en espacios muy restringidos).
4. **Pedir más espacio** al equipo de desarrollo o diseño: es un problema de diseño, no una carencia de la traducción.
5. **Abreviar** solo como último recurso ([20.3](#203-abreviaturas)).
6. **No truncar** nunca la traducción mediante corte arbitrario.

## 20.3. Abreviaturas

- Se aplican las reglas del [8.5](../fundamentos-linguisticos/08-ortotipografia.md#85-abreviaturas).
- **Recomendación:** emplear solo abreviaturas conocidas, que se hayan registrado en el glosario del proyecto.
- Se evitan las abreviaturas inventadas, las que se confunden con otras palabras y las que dificultan la lectura con lectores de pantalla.
- Se usa la misma abreviatura para la misma palabra en todo el producto.
- Si una abreviatura es la única solución, se anota en el glosario y se ofrece el término completo en información emergente o ayuda.

## 20.4. Límites de longitud

Algunas plataformas fijan un máximo de caracteres (títulos de tienda, notificaciones, campos de base de datos). Se comprueban estos límites antes de entregar la traducción.

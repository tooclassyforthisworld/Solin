# 15. Documentación técnica

## 15.1. Principios

- **Claridad y precisión** por encima del estilo.
- **Coherencia** entre la ayuda, la interfaz y los demás materiales.
- **Neutralidad:** registro formal o neutro, imperativo en los procedimientos.
- **Repetición antes que sinónimos:** se repite el término técnico en lugar de variarlo; en la ayuda pesa más la legibilidad que el ahorro de espacio.

## 15.2. Estructura

- Los **títulos** son sustantivos o infinitivos («Instalación», «Configurar el servidor»), no gerundios.
- Los **procedimientos** se escriben en pasos numerados, cada uno con una acción.
- Las **advertencias** y notas mantienen un formato uniforme y un vocabulario estable («Nota», «Importante», «Precaución»).
- Los **elementos de interfaz** se citan con la grafía exacta de la interfaz traducida.
- **Secuencias de menús:** véase [9.6](../fundamentos-linguisticos/09-puntuacion-y-convenciones-tipograficas.md#96-secuencias-de-menús-y-títulos-compuestos).
- **Código, comandos y rutas** no se traducen. Los comentarios dentro del código se traducen solo si el proyecto lo establece.
- Los **ejemplos** deben adaptarse al público: nombres, monedas, unidades y fechas locales.
- Las **capturas de pantalla** se actualizan al idioma traducido.

## 15.3. Documentación de desarrollo (API, referencias)

- Se conservan los nombres de funciones, parámetros y clases.
- Se traduce el texto explicativo.
- Se evita el exceso de anglicismos innecesarios, pero se aceptan los términos consolidados (*callback*, *framework*, *token*).

## 15.4. Mantenimiento

La documentación cambia con cada versión: se usan memorias de traducción y control de versiones para localizar solo lo que se modifica.

## 15.5. Referencias a la interfaz y a otros manuales

- Los nombres de menús y botones se comprueban contra la interfaz traducida real o su archivo de traducción, tal como los ve la persona.
- Si el producto no está traducido, se da el nombre original seguido de la traducción entre paréntesis: «Stop (Detener)».
- Si otro manual citado no existe en español, se da el título original seguido de una traducción orientativa entre paréntesis.
- Los enlaces a páginas en otro idioma indican el idioma tras el enlace: «(en inglés)».

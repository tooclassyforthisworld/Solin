# 24. Revisión y control de calidad

## 24.1. Niveles de revisión

| Nivel | Qué se comprueba |
|---|---|
| **Autorrevisión** | Quien traduce relee su trabajo: errores, omisiones, formato, marcadores. |
| **Revisión por pares** | Otra persona compara con el original y verifica corrección lingüística y terminología. |
| **Revisión lingüística en contexto (LQA)** | Se revisa el texto dentro del producto en ejecución. |
| **Revisión final o de aprobación** | Quien coordina valida la coherencia global antes de publicar. |

## 24.2. Categorías de errores

Para evaluar con criterios objetivos, se puede adoptar un marco como [MQM](https://themqm.org) o uno simplificado:

| Categoría | Ejemplos |
|---|---|
| **Precisión** | Omisiones, adiciones, mala interpretación del original. |
| **Fluidez** | Gramática, ortografía, puntuación, calcos, tono. |
| **Terminología** | Incumplimiento del glosario, inconsistencia. |
| **Estilo** | Incumplimiento de la guía o del perfil de estilo. |
| **Locale** | Formatos de fecha, número, unidades, moneda. |
| **Técnico / formato** | Marcadores rotos, etiquetas, aceleradores duplicados. |
| **Verificación** | Problemas que solo se aprecian en el producto. |

Se asigna una **gravedad** (crítico, mayor, menor, de preferencia) para priorizar las correcciones.

## 24.3. Comprobaciones automáticas

Las plataformas pueden detectar, entre otras cosas:

- marcadores y etiquetas ausentes, añadidos o alterados;
- puntuación final distinta de la del original;
- espacios dobles o a principio/final de cadena;
- diferencias de mayúsculas;
- términos del glosario no utilizados;
- longitud excesiva;
- números distintos del original;
- comillas y signos de apertura omitidos;
- caracteres tipográficos incorrectos (guion por signo menos, `x` por `×`, `º` por `°`);
- aceleradores duplicados.

Estas comprobaciones **no sustituyen** la lectura humana.

## 24.4. Lista de verificación para quien revisa

- [ ] ¿El sentido es fiel al original?
- [ ] ¿Suena natural en español?
- [ ] ¿Se respetan el tratamiento y el tono del perfil?
- [ ] ¿Se usan los términos del glosario?
- [ ] ¿Hay calcos, falsos amigos o gerundios mal empleados?
- [ ] ¿Están bien la ortografía, la puntuación y las mayúsculas?
- [ ] ¿Se conservan marcadores, etiquetas y formatos?
- [ ] ¿Caben los textos en el espacio disponible?
- [ ] ¿Los aceleradores y atajos son coherentes?
- [ ] ¿El resultado es coherente con el resto del producto y con la ayuda?
- [ ] ¿Es inclusivo y accesible?

## 24.5. Retroalimentación

La revisión debe ser constructiva: se explica el motivo de cada cambio con referencia a la guía o al glosario. Un buen sistema de revisión enseña, no solo corrige.

## 24.6. Medición y mejora

Se registran los errores recurrentes para actualizar la guía, el glosario y la formación de nuevas personas colaboradoras.

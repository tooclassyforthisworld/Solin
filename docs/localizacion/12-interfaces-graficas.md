# 12. Interfaces gráficas

## 12.1. Elementos y convenciones

| Elemento | Convención recomendada |
|---|---|
| **Menús y submenús** | Sustantivos o infinitivos, sin punto final, mayúscula solo inicial. |
| **Botones** | Verbos en infinitivo («Guardar», «Cancelar») o, en proyectos con tratamiento personal, imperativo. Coherencia en todo el producto. |
| **Etiquetas de campo** | Sustantivos; suelen terminar en dos puntos si el original lo hace. |
| **Casillas y opciones** | Frases que describen la opción activada, o infinitivos. |
| **Cuadros de diálogo** | Título claro, texto breve, botones inequívocos («Guardar» / «No guardar» / «Cancelar» mejor que «Sí» / «No»). |
| **Mensajes de error** | Qué ocurrió + qué hacer. Sin culpar, sin jerga. |
| **Barras de estado** | Formas breves; gerundio o sustantivo según el caso. |
| **Información emergente (*tooltips*)** | Breves; no repiten la etiqueta. |

## 12.2. Pautas

- **Recomendación:** emplear la misma forma verbal en todos los botones y órdenes.
- Se mantienen los puntos suspensivos del original en las órdenes que abren un diálogo.
- Los mensajes de confirmación formulan preguntas claras («¿Desea guardar los cambios antes de cerrar?») y los botones responden de forma directa.
- Los nombres de menús y de elementos que se citan en la ayuda coinciden con los de la interfaz.

## 12.3. Aceleradores y atajos

Los **aceleradores** son las letras subrayadas que permiten activar una orden por teclado (marcadas en las cadenas con `~`, `_` o `&`, según la plataforma). Criterios de selección, por orden de prioridad:

1. No repetir el acelerador dentro del mismo nivel.
2. Evitar números.
3. Evitar signos de puntuación.
4. No usar letras que dificulten la lectura del subrayado: con trazo descendente (g, j, p, q, y), con diacríticos o muy estrechas (i, l, t, f, r).
5. Preferir la inicial de la primera palabra, o la letra que mejor represente la orden.

Los **atajos de teclado** son estándar y no se traducen, salvo que la plataforma lo establezca (p. ej. en teclados con distribución distinta). Los nombres de teclas siguen la convención de la plataforma («Mayús», «Ctrl», «Retorno»).

## 12.4. Elementos gráficos

Se revisan los iconos, las capturas y las imágenes con texto incrustado. Los elementos culturales (gestos, colores, símbolos) se valoran en cada mercado.

# 28. Cómo crear un perfil de estilo

Un **perfil de estilo** es un documento breve que recoge las decisiones concretas de un proyecto y cómo se apartan de esta guía o la completan. Permite adoptar el marco común sin imponerlo.

## 28.1. Pasos

1. **Conocer el proyecto:** público, plataforma, tipo de textos, idiomas, volumen.
2. **Revisar esta guía** y marcar qué **opciones** y **recomendaciones** se adoptan.
3. **Decidir las opciones abiertas** (tratamiento, variante, lenguaje inclusivo, comillas, formato de fecha, secuencias de menú…).
4. **Elaborar el glosario base** y las listas de términos desaconsejados.
5. **Redactar el perfil** con la [plantilla del Anexo F](../anexos/06-plantilla-de-guia-de-estilo.md).
6. **Validar con la comunidad** del proyecto.
7. **Publicar y mantener** el perfil en el repositorio, junto al código o los archivos de traducción.

## 28.2. Contenido mínimo

| Apartado | Preguntas que responde |
|---|---|
| **Ámbito** | ¿A qué productos y textos se aplica? |
| **Público y tono** | ¿A quién se habla y cómo? |
| **Tratamiento** | ¿Tú, usted, vos o impersonal? |
| **Variante regional** | ¿Neutra, regional o por capas? ¿Qué código de idioma? |
| **Lenguaje inclusivo** | ¿Qué estrategias se aplican? ¿Qué se evita? |
| **Ortotipografía** | Comillas, secuencias de menú, fechas, números, unidades, abreviaturas. |
| **Terminología** | Dónde está el glosario y cómo se actualiza. |
| **Formatos técnicos** | Marcadores, plurales, aceleradores. |
| **Calidad** | Niveles de revisión y criterios de aceptación. |
| **Procedimientos** | Cómo se resuelven las discrepancias y quién decide. |
| **Excepciones** | Desviaciones respecto de la guía general. |

## 28.3. Consejos

- **Sea breve:** un perfil de dos o tres páginas se consulta; uno de treinta, no.
- **Ponga ejemplos** reales del proyecto.
- **Registre la fecha y la versión.**
- **Incluya el porqué** de cada decisión importante: ayuda a no reabrir debates.
- **Revise** el perfil cuando cambie el público o la plataforma.

## 28.4. Ubicación recomendada

```text
/docs/i18n/es/
├── PERFIL-ESTILO.md
├── GLOSARIO.tbx  (o .csv / .po)
├── DECISIONES.md
└── EXCEPCIONES.md
```

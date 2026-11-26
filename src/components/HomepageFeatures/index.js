import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    numeral: 'I',
    title: 'Al día y de calidad',
    description:
      'Haga que sus traducciones estén a la vanguardia con criterios uniformes, acreditados y probados.',
  },
  {
    numeral: 'II',
    title: 'Criterios fáciles de seguir',
    description:
      'No hallará aquí un tratado de gramática, pero este vademécum le apoyará en la resolución rápida de dudas frecuentes.',
  },
  {
    numeral: 'III',
    title: 'Neutral e inclusivo',
    description:
      'La base terminológica favorece la comprensión en todas las regiones hispanoparlantes. La guía de estilo brinda equidad y prioriza la inclusión.',
  },
];

function Feature({numeral, title, description}) {
  return (
    <article className={styles.entry}>
      <span className={styles.numeral}>{numeral}</span>
      <h3 className={styles.entryTitle}>{title}</h3>
      <p className={styles.entryBody}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>En este número</h2>
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

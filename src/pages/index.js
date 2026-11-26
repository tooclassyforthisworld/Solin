import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.cover}>
      <div className="container">
        <p className={styles.issue}>Volumen I · Número 1</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.rule} />
        <p className={styles.byline}>
          Directrices para la traducción y regionalización de programas
          informáticos en español.
        </p>
        <div className={styles.actions}>
          <Link className={styles.action} to="/docs/intro">
            Comenzar la lectura
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Le damos la bienvenida a ${siteConfig.title}`}
      description="Directrices de traducción para programas informáticos en español">
      <HomepageHero />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

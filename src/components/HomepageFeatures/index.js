import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Universal Access to Reliable Money',
     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Replace with your custom icon
    description: (
      <>
        The Noria Network is dedicated to providing universal access to reliable money through its unique stable-denominated crypto network.
      </>
    ),
  },
  {
    title: 'Innovative Governance Model',
     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,// Replace with your custom icon
    description: (
      <>
        We have an innovative governance model that empowers the community to make decisions, ensuring that the Noria Network remains at the forefront of decentralized networks.
      </>
    ),
  },
  {
    title: 'Native Stable Currency',
     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Replace with your custom icon
    description: (
      <>
        The Noria Network features a native stable currency, making transactions more predictable and cost-effective for users.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

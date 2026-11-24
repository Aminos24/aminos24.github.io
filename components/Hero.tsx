
'use client';

import { useState } from 'react';
import { profile } from '../lib/content';

const translations = {
  en: {
    eyebrow: 'PERSONAL PORTFOLIO / FINLAND',

    lead: 'Exploring data, uncertainty and statistical learning.',

    intro: [
      'I am a Computer Science student at the University of Eastern Finland, with a minor in Data Science and Statistics. My academic interests centre on Bayesian inference, statistical modelling and machine learning, particularly the use of computational methods to understand complex phenomena and uncertainty.',

      'Alongside my studies, I have gained several years of professional experience in IT at the University of Eastern Finland and Enfo. I am currently working on my bachelor’s thesis on Markov Chain Monte Carlo (MCMC) methods, with the longer-term goal of pursuing a career in data science and statistical research.'
    ],

    work: 'Explore my work ↗',
    cv: 'View CV ↗',
    experience: 'Experience ↓'
  },

  fi: {
    eyebrow: 'HENKILÖKOHTAINEN PORTFOLIO / SUOMI',

    lead: 'Ilmiöiden ymmärtämistä datan avulla.',

    intro: [
      'Opiskelen tietojenkäsittelytiedettä Itä-Suomen yliopistossa, sivuaineenani datatiede ja tilastotiede. Kiinnostukseni painottuu bayesilaiseen päättelyyn, tilastolliseen mallintamiseen ja koneoppimiseen. Minulla on usean vuoden työkokemus IT-alalta, ja tavoitteeni on suunnata urani datatieteen pariin sekä soveltaa tilastollisia menetelmiä käytännön ongelmien ratkaisemiseen ja ilmiöiden ymmärtämiseen.'
    ],

    work: 'Tutustu projekteihini ↗',
    cv: 'Katso CV ↗',
    experience: 'Työkokemus ↓'
  }
};

export default function Hero() {

  const [language, setLanguage] =
    useState<'en' | 'fi'>('en');

  const t = translations[language];

  return (

    <section
      className="hero"
      id="about"
      lang={language}
    >

      <div className="hero-top">

        <div className="eyebrow">
          {t.eyebrow}
        </div>

        <div
          className="language-switch"
          role="group"
          aria-label="Introduction language"
        >

          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>

          <span className="language-divider">/</span>

          <button
            type="button"
            className={language === 'fi' ? 'active' : ''}
            aria-pressed={language === 'fi'}
            onClick={() => setLanguage('fi')}
          >
            FI
          </button>

        </div>

      </div>

      <h1>
        {profile.name}<span>.</span>
      </h1>

      <p className="lead">
        {language === 'en' ? (
          <>
            Exploring data, uncertainty
            <br className="desktop" />
            {' '}and statistical learning.
          </>
        ) : (
          t.lead
        )}
      </p>

      {t.intro.map((paragraph, index) => (
        <p className="intro" key={index}>
          {paragraph}
        </p>
      ))}

      <div className="actions">

        <a className="primary" href="#work">
          {t.work}
        </a>

        {profile.cv ? (

          <a
            className="secondary"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cv}
          </a>

        ) : (

          <a
            className="secondary"
            href="#experience"
          >
            {t.experience}
          </a>

        )}

      </div>

    </section>

  );
}

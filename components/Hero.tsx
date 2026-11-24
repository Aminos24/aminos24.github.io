
'use client';

import { useState } from 'react';
import { profile } from '../lib/content';

const translations = {
  en: {
    eyebrow: 'PERSONAL PORTFOLIO / FINLAND',

    lead: 'Exploring data, uncertainty and statistical learning.',

    intro:
      'I am a Computer Science student at the University of Eastern Finland, with a minor in Data Science and Statistics and a professional background in IT. My interests lie in statistical modelling, Bayesian inference and computational methods for understanding uncertainty.',

    work: 'Explore my work ↗',
    cv: 'View CV ↗',
    experience: 'Experience ↓'
  },

  fi: {
    eyebrow: 'HENKILÖKOHTAINEN PORTFOLIO / SUOMI',

    lead: 'Ilmiöiden ymmärtämistä datan avulla.',

    intro:
      'Opiskelen tietojenkäsittelytiedettä Itä-Suomen yliopistossa, sivuaineenani datatiede ja tilastotiede. Minua kiinnostaa erityisesti se, miten tilastollisten ja laskennallisten menetelmien avulla voidaan ymmärtää erilaisia ilmiöitä ja tehdä päätelmiä datasta. Minulla on usean vuoden työkokemus IT-alalta, ja tulevaisuudessa haluan suunnata urani datatieteen pariin. Tällä hetkellä syvennyn opinnoissani erityisesti bayesilaiseen päättelyyn, tilastolliseen mallintamiseen ja koneoppimiseen.',

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

      <p className="intro">
        {t.intro}
      </p>

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


'use client';

import { useState } from 'react';
import { profile } from '../lib/content';

const translations = {
  en: {
    intro: [
      'I am a Computer Science student at the University of Eastern Finland, with a minor in Data Science and Statistics. My academic interests centre on Bayesian inference, statistical modelling and machine learning, particularly the use of computational methods to understand complex phenomena and uncertainty.',

      'Alongside my studies, I have gained several years of professional experience in IT at the University of Eastern Finland and Enfo. I am currently working on my bachelor’s thesis on Markov Chain Monte Carlo (MCMC) methods, with the longer-term goal of pursuing a career in data science and statistical research.'
    ],
    email: 'Email'
  },

  fi: {
    intro: [
      'Opiskelen tietojenkäsittelytiedettä Itä-Suomen yliopistossa, sivuaineenani datatiede ja tilastotiede. Kiinnostukseni painottuu bayesilaiseen päättelyyn, tilastolliseen mallintamiseen ja koneoppimiseen. Minulla on usean vuoden työkokemus IT-alalta, ja tavoitteeni on suunnata urani datatieteen pariin sekä soveltaa tilastollisia menetelmiä käytännön ongelmien ratkaisemiseen ja ilmiöiden ymmärtämiseen.'
    ],
    email: 'Sähköposti'
  }
};

export default function Hero() {
  const [language, setLanguage] =
    useState<'en' | 'fi'>('en');

  const t = translations[language];

  return (
    <section
      id="about"
      className="hero academic-hero"
      lang={language}
    >
      <div className="academic-hero-heading">

        <h1>{profile.name}<span>.</span></h1>

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

      <div className="academic-intro">
        {t.intro.map((paragraph, index) => (
          <p className="intro" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="academic-links">

        <a href={`mailto:${profile.email}`}>
          {t.email}
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        {profile.cv && (
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        )}

      </div>
    </section>
  );
}

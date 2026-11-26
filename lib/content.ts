
export const profile = {
  name: 'Amin Mahad',
  email: 'aminmahadd@gmail.com',
  github: 'https://github.com/Aminos24',
  linkedin: 'https://www.linkedin.com/in/amin-m-75987b1a9/',
  cv: '/documents/Amin_Mahad_Portfolio_CV.pdf'
};


/* ========================================
   PROJECTS
======================================== */

export const projects = [
  {
    slug: 'mcmc',
    number: '01',
    category: 'Bachelor’s thesis · In progress',
    title: 'Markov Chain Monte Carlo (MCMC) Methods',

    summary: 'Exploring the foundations, historical development, applications and future directions of Markov Chain Monte Carlo methods.',

    methods: [
      'MCMC',
      'Bayesian inference',
      'Computational statistics',
      'Monte Carlo simulation'
    ],

    pdf: '',

    sections: [
      [
        'Research focus',
        'My bachelor’s thesis explores the theoretical foundations and historical development of Markov Chain Monte Carlo methods, with an emphasis on their role in computational statistics and Bayesian inference.'
      ],
      [
        'Methods and comparative analysis',
        'The thesis examines different MCMC algorithms, comparing their underlying principles, computational characteristics, strengths and limitations.'
      ],
      [
        'Applications',
        'The thesis explores practical applications of MCMC methods across different fields, highlighting their role in statistical modelling, probabilistic inference and solving complex computational problems.'
      ],
      [
        'Future directions',
        'The study discusses the ongoing development of MCMC methods, emerging research directions and their evolving role in computational statistics and machine learning.'
      ],
      [
        'Status',
        'Bachelor’s thesis in progress. The completed thesis will be made available upon publication.'
      ]
    ]
  },

  {
    slug: 'quantum-risk',
    number: '02',
    category: 'Junction 2026 Quantum hackathon',
    title: 'Quantum-Enhanced Bayesian Risk Estimation',

    summary: 'Combining Bayesian financial risk modelling with quantum amplitude estimation.',

    methods: [
      'R',
      'Stan',
      'Python',
      'Qiskit',
      'Bayesian inference',
      'MCMC',
      'Quantum computing'
    ],

    pdf: '',

    sections: [
      [
        'Objective',
        'Explore the potential of quantum amplitude estimation in Bayesian financial risk assessment and compare it with classical probability estimation.'
      ],

      [
        'Methodology',
        'Bayesian risk modelling using MCMC and the No-U-Turn Sampler (NUTS) in Stan, combined with Iterative Quantum Amplitude Estimation (IQAE) in Qiskit.'
      ],

      [
        'Results',
        'Posterior distributions, convergence diagnostics, financial risk estimates and classical versus quantum probability estimation.'
      ]
    ]
  },

  {
    slug: 'diabetes',
    number: '03',
    category: 'Academic project · Bayesian Data Analysis',
    title: 'Bayesian Diabetes Risk Modelling',

    summary: 'A comparative study of linear and nonlinear Bayesian logistic regression models using BRFSS 2015 health survey data.',

    methods: [
      'R',
      'brms',
      'Stan',
      'MCMC',
      'Bayesian inference',
      'LOO-CV'
    ],

    pdf: '/documents/bayesian-diabetes-report.pdf',

    sections: [
      [
        'Objective',
        'Investigate associations between diabetes status, BMI, age and high blood pressure using a balanced dataset of 70,692 observations.'
      ],
      [
        'Methodology',
        'Compare linear and spline-based Bayesian logistic regression models using weakly informative priors and NUTS sampling. Model assessment includes convergence diagnostics, posterior predictive checks and prior sensitivity analysis.'
      ],
      [
        'Results',
        'The nonlinear model achieved an in-sample classification accuracy of 71.2%, compared with 70.9% for the linear model. LOO-CV favoured the nonlinear model, while the linear model offered greater simplicity and robustness to prior choice.'
      ]
    ]
  }
];


/* ========================================
   PROFESSIONAL EXPERIENCE
======================================== */

export const experience = [
  {
    role: 'IT Service Desk Technician',
    org: 'University of Eastern Finland',
    date: '2022–2026',
    description: 'Technical support, troubleshooting, identity and access management, and workstation services across university IT environments.'
  },

  {
    role: 'Specialist, Workstation',
    org: 'Enfo',
    date: 'Summer 2024',
    description: 'Workstation support, service requests and Microsoft-based enterprise environments.'
  },

  {
    role: 'Course Assistant',
    org: 'University of Eastern Finland',
    date: '2022',
    description: 'Supported teaching activities for Introduction to Blockchain.'
  }
];


/* ========================================
   QUANTUM RISK PROJECT RESULTS
======================================== */

export const quantumResults = {

  portfolio: [
    'Nokia',
    'Nordea',
    'Sampo'
  ],

  portfolioWeights: [
    1 / 3,
    1 / 3,
    1 / 3
  ],

  confidenceLevel: 0.95,

  /* MCMC configuration */

  chains: 4,
  iterations: 4000,
  warmup: 1000,
  posteriorDraws: 12000,
  seed: 123,

  /* Financial risk estimates */

  var95: -2.328321,
  cvar95: -2.928305,

  /* Convergence diagnostics */

  diagnostics: [
    {
      parameter: 'μ',
      ess: 12291,
      rhat: 1.00
    },
    {
      parameter: 'σ',
      ess: 1976,
      rhat: 1.00
    },
    {
      parameter: 'lp__',
      ess: 2677,
      rhat: 1.00
    }
  ],

  /* Probability estimation */

  classicalProbability: 0.05000,
  quantumProbability: 0.04972,

  absoluteError: 0.00028,
  relativeError: 0.56,

  /* Earlier report estimates */

  posteriorMean: 0.000661,
  posteriorVolatility: 0.014697,

  confidenceInterval: {
    lower: 0.04804,
    upper: 0.05140
  },

  /* Theoretical query complexity */

  classicalComplexity: 'O(1/ε²)',
  quantumComplexity: 'O(1/ε)',

  samplingAlgorithm: 'NUTS',
  quantumAlgorithm: 'Iterative Quantum Amplitude Estimation',

  /* Original R visualisations */

  plots: {
    portfolioReturns: '/images/junction/junction_plot_1.png',
    posteriorMu: '/images/junction/junction_plot_2.png',
    posteriorSigma: '/images/junction/junction_plot_3.png',
    posteriorPredictive: '/images/junction/junction_plot_4.png',
    theoreticalSpeedup: '/images/junction/junction_plot_5.png',
    classicalVsQuantum: '/images/junction/junction_plot_6.png'
  }
};


/* ========================================
   DIABETES PROJECT RESULTS
======================================== */

export const diabetesResults = {
  observations: 70692,

  linearAccuracy: 70.9,
  nonlinearAccuracy: 71.2,

  linearElpd: -40164.1,
  nonlinearElpd: -39711.7,

  elpdDifference: 452.4,

  chains: 4,
  iterations: 2000,
  warmup: 1000,

  paretoK: '< 0.7'
};


/* ========================================
   EDUCATION
======================================== */

export const education = {
  university: 'University of Eastern Finland',
  degree: 'B.Sc. in Computer Science',
  period: 'Expected graduation: March 2027',

  minor: 'Data Science and Statistics',
  minorCredits: '60 ECTS programme',

  academicFocus: [
    'Bayesian Statistics',
    'Computational Statistics',
    'Probabilistic Inference',
    'Time Series Analysis'
  ],

  thesis: {
    title: 'Markov Chain Monte Carlo (MCMC) Methods',
    status: 'Bachelor’s thesis · In progress',
    href: '/projects/mcmc'
  }
};

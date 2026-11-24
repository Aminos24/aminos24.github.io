export const profile = {
  name: 'Amin Mahad',
  email: 'aminmahadd@gmail.com',
  github: 'https://github.com/Aminos24',
  linkedin: 'https://www.linkedin.com/in/amin-m-75987b1a9/',
  cv: '/documents/Amin_Mahad_Portfolio_CV.pdf'
};

export const projects = [
  {
    slug: 'mcmc',
    number: '01',
    category: 'Research · In progress',
    title: 'MCMC Algorithms and Bayesian Inference',
    summary: 'Exploring computational methods for posterior inference and the reliability of Monte Carlo estimates.',

    methods: [
      'MCMC',
      'Hamiltonian Monte Carlo',
      'Bayesian inference'
    ],

    pdf: '',

    sections: [
      [
        'Research focus',
        'My bachelor’s thesis explores Markov chain Monte Carlo methods for Bayesian inference, with particular interest in Hamiltonian Monte Carlo.'
      ],
      [
        'Methodology',
        'The work examines convergence diagnostics, effective sample size, warm-up and divergent transitions.'
      ],
      [
        'Status',
        'Research in progress. Final results and the thesis link will be added after completion.'
      ]
    ]
  },

  {
    slug: 'quantum-risk',
    number: '02',
    category: 'Junction 2026 · Independent project',
    title: 'Quantum-Enhanced Bayesian Risk Estimation',
    summary: 'Combining Bayesian financial risk modelling with quantum amplitude estimation.',

    methods: [
      'R',
      'Stan',
      'Python',
      'Qiskit'
    ],

    pdf: '',

    sections: [
      [
        'Objective',
        'Estimate downside risk for an equally weighted portfolio of Nokia, Nordea and Sampo.'
      ],
      [
        'Approach',
        'A classical Bayesian workflow estimates Value at Risk and Conditional Value at Risk. Iterative quantum amplitude estimation estimates the probability of falling below a risk threshold.'
      ],
      [
        'Results',
        'The project produced an estimated 95% VaR of −2.35% and CVaR of −2.97%. Quantum amplitude estimation returned a tail probability of 0.04972 against a reference probability of 0.05. These are project-specific estimates, not evidence of quantum advantage.'
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

export const education = {
  university: 'University of Eastern Finland',
  degree: 'B.Sc. in Computer Science',
  period: '2021 — Expected March 2027',

  minor: 'Data Science and Statistics',
  minorCredits: '60 ECTS programme',

  academicFocus: [
    'Bayesian Statistics',
    'Computational Statistics',
    'Probabilistic Inference',
    'Time Series Analysis'
  ],

  thesis: {
    title: 'Markov Chain Monte Carlo (MCMC) methods',
    status: 'Bachelor’s thesis · In progress',
    href: '/projects/mcmc'
  }
};
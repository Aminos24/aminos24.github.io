
const base = '/images/junction/';

function Plot({ n, alt }: { n: number; alt: string }) {
  return (
    <figure className="junction-plot">
      <img
        src={`${base}junction_plot_${n}.png`}
        alt={alt}
        loading="lazy"
      />
    </figure>
  );
}

function Metrics({ items }: { items: [string, string][] }) {
  return (
    <div className="results-grid">
      {items.map(([label, value]) => (
        <div className="metric-card" key={label}>
          <span className="metric-label">{label}</span>
          <strong className="metric-value">{value}</strong>
        </div>
      ))}
    </div>
  );
}

function SectionDivider() {
  return (
    <hr
      style={{
        border: 0,
        borderTop: '1px solid var(--line)',
        margin: '40px 0'
      }}
    />
  );
}


/* ========================================
   PORTFOLIO
======================================== */

export function QuantumPortfolio() {
  const stocks = [
    { name: 'Nokia', color: '#5285bd' },
    { name: 'Nordea', color: '#509b83' },
    { name: 'Sampo', color: '#c69b50' }
  ];

  const circumference = 2 * Math.PI * 72;
  const segment = circumference / 3;

  return (
    <div className="portfolio-allocation">

      <div className="portfolio-donut">
        <svg
          viewBox="0 0 200 200"
          role="img"
          aria-label="Equal-weight portfolio of Nokia, Nordea and Sampo"
        >
          {stocks.map((stock, i) => (
            <circle
              key={stock.name}
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke={stock.color}
              strokeWidth="40"
              strokeDasharray={`${segment} ${circumference - segment}`}
              strokeDashoffset={-i * segment}
              transform="rotate(-90 100 100)"
            />
          ))}

          <text
            x="100"
            y="97"
            textAnchor="middle"
            fontSize="25"
            fontWeight="600"
            fill="currentColor"
          >
            3
          </text>

          <text
            x="100"
            y="117"
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
          >
            Stocks
          </text>
        </svg>
      </div>

      <div className="portfolio-legend">
        {stocks.map(stock => (
          <div
            className="portfolio-legend-row"
            key={stock.name}
          >
            <span
              className="portfolio-dot"
              style={{ backgroundColor: stock.color }}
            />

            <span className="portfolio-stock-name">
              {stock.name}
            </span>

            <strong className="portfolio-weight">
              33.33%
            </strong>
          </div>
        ))}
      </div>

    </div>
  );
}


/* ========================================
   METHODOLOGY
======================================== */

export function QuantumMethodology() {
  return (
    <div className="junction-method">

      <p>Daily returns from January 2020 · Equal weights</p>

      <div className="junction-flow">
        {[
          'Historical stock prices',
          'Daily portfolio returns',
          'Bayesian normal model: rₜ ~ N(μ, σ²)',
          'MCMC / NUTS (R & Stan)',
          'Posterior predictive simulation',
          'VaR & CVaR',
          'Reference probability encoding',
          'Quantum amplitude estimation (Python & Qiskit)'
        ].map((step, i) => (
          <div key={step}>
            {i > 0 && <span aria-hidden="true">↓</span>}
            <div className="junction-step">{step}</div>
          </div>
        ))}
      </div>

      <Metrics items={[
        ['Chains', '4'],
        ['Iterations per chain', '4,000'],
        ['Warm-up per chain', '1,000'],
        ['Posterior draws', '12,000']
      ]} />

    </div>
  );
}


/* ========================================
   RESULTS
======================================== */

export default function QuantumResults() {
  return (
    <div className="project-results junction-results">

      {/* ========================================
          BAYESIAN RISK MODELLING
      ======================================== */}

      <h3>Bayesian Risk Modelling (R &amp; Stan)</h3>

      <Metrics items={[
        ['Value-at-Risk (95%)', '−2.33%'],
        ['Conditional VaR (95%)', '−2.93%']
      ]} />

      <h3>Historical portfolio returns</h3>

      <Plot
        n={1}
        alt="Historical daily portfolio returns"
      />

      <h3>Posterior distributions</h3>

      <div className="junction-pair">

        <Plot
          n={2}
          alt="Posterior distribution of mean return"
        />

        <Plot
          n={3}
          alt="Posterior distribution of volatility"
        />

      </div>

      <h3>Convergence diagnostics</h3>

      <div className="model-comparison">
        <table className="results-table">

          <thead>
            <tr>
              <th>Parameter</th>
              <th>ESS (n_eff)</th>
              <th>R-hat</th>
            </tr>
          </thead>

          <tbody>
            {[
              ['μ', '12,291'],
              ['σ', '1,976'],
              ['lp__', '2,677']
            ].map(([p, ess]) => (
              <tr key={p}>
                <td>{p}</td>
                <td>{ess}</td>
                <td>1.00</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <h3>Posterior predictive distribution</h3>

      <Plot
        n={4}
        alt="Posterior predictive returns with dashed VaR threshold"
      />


      {/* ========================================
          QUANTUM AMPLITUDE ESTIMATION
      ======================================== */}

      <SectionDivider />

      <h3>Quantum Amplitude Estimation (Python &amp; Qiskit)</h3>

      <p>
        Iterative Quantum Amplitude Estimation (IQAE)
        implemented in Python using Qiskit and a
        statevector-based simulator.
      </p>

      <h3>Quantum state preparation</h3>

      <p>
        The reference probability of 0.05 is encoded into
        a single-qubit quantum state using an RY rotation.
      </p>

      <Metrics items={[
        ['Qubits', '1'],
        ['Rotation angle', '0.451 rad'],
        ['Reference probability', '0.05']
      ]} />

      <figure className="junction-plot">
        <img
          src={`${base}quantum_circuit.png`}
          alt="Single-qubit RY state preparation circuit"
          loading="lazy"
          style={{
            width: '100%',
            maxWidth: '420px',
            margin: '0 auto'
          }}
        />
      </figure>

      <h3>IQAE configuration</h3>

      <Metrics items={[
        ['Shots per circuit', '1,024'],
        ['Target precision (ε)', '0.002'],
        ['Significance level (α)', '0.05'],
        ['Random seed', '123']
      ]} />

      <h3>Quantum estimation results</h3>

      <Metrics items={[
        ['Reference probability', '0.05000000'],
        ['Quantum estimate', '0.04997869'],
        ['Absolute error', '0.00002131'],
        ['Relative error', '0.0426%'],
        ['Oracle queries', '102,400'],
        ['Estimated precision', '0.00009992']
      ]} />

      <h3>95% confidence interval</h3>

      <Metrics items={[
        ['Lower bound', '0.04987877'],
        ['Upper bound', '0.05007861']
      ]} />

      <figure className="junction-plot">
        <img
          src={`${base}quantum_estimation.png`}
          alt="IQAE probability estimate with 95 percent confidence interval"
          loading="lazy"
        />
      </figure>


      {/* ========================================
          COMPUTATIONAL COMPLEXITY
      ======================================== */}

      <SectionDivider />

      <h3>Theoretical Query Complexity</h3>

      <Metrics items={[
        ['Classical Monte Carlo', 'O(1/ε²)'],
        ['Quantum amplitude estimation', 'O(1/ε)']
      ]} />

      <Plot
        n={5}
        alt="Theoretical query complexity of classical Monte Carlo and quantum amplitude estimation"
      />

      <p>
        Numerical comparison of classical and quantum
        query complexity across different precision levels,
        implemented in R.
      </p>


      {/* ========================================
          KEY FINDINGS
      ======================================== */}

      <SectionDivider />

      <h3>Key findings</h3>

      <p>
        Bayesian risk modelling produced a 95% VaR of −2.33%
        and a CVaR of −2.93%.
      </p>

      <p>
        Classical and quantum probability estimates were
        nearly identical, with a relative difference of
        only 0.0426%.
      </p>

      <p>
        Although quantum amplitude estimation has a theoretical
        advantage in computational complexity, the results
        did not demonstrate a practical efficiency advantage
        over classical Monte Carlo.
      </p>

    </div>
  );
}

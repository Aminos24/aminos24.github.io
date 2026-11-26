
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

export function QuantumPortfolio() {
  return (
    <div className="junction-portfolio">
      {['Nokia', 'Nordea', 'Sampo'].map(name => (
        <div className="metric-card" key={name}>
          <span className="metric-label">{name}</span>
          <strong className="metric-value">33.3%</strong>
        </div>
      ))}
    </div>
  );
}

export function QuantumMethodology() {
  return (
    <div className="junction-method">

      <p>Daily returns from January 2020 · Equal weights</p>

      <div className="junction-flow">
        {[
          'Historical stock prices',
          'Daily portfolio returns',
          'Bayesian normal model: rₜ ~ N(μ, σ²)',
          'MCMC / NUTS (Stan)',
          'Posterior predictive simulation',
          'VaR & CVaR',
          'QAE (Qiskit)'
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

export default function QuantumResults() {
  return (
    <div className="project-results junction-results">

      {/* ========================================
          BAYESIAN RISK MODELLING
      ======================================== */}

      <h3>Bayesian Risk Modelling</h3>

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

      <p>
        R-hat values are shown at the precision reported by Stan.
      </p>

      <h3>Posterior predictive distribution</h3>

      <Plot
        n={4}
        alt="Posterior predictive returns with dashed VaR threshold"
      />


      {/* ========================================
          ORIGINAL QUANTUM RESULTS
      ======================================== */}

      <hr style={{
        border: 0,
        borderTop: '1px solid var(--line)',
        margin: '40px 0'
      }} />

      <h3>Quantum Amplitude Estimation</h3>

      <p>
        Original results from the Junction 2026
        OP Quantum Finance Challenge.
      </p>

      <Metrics items={[
        ['Classical probability', '0.05000'],
        ['Quantum estimate', '0.04972'],
        ['Absolute error', '0.00028'],
        ['Relative error', '0.56%']
      ]} />

      <h3>Classical vs. quantum estimation</h3>

      <Plot
        n={6}
        alt="Classical reference 0.05000 and QAE estimate 0.04972"
      />

      <h3>Theoretical query complexity</h3>

      <Metrics items={[
        ['Classical Monte Carlo', 'O(1/ε²)'],
        ['Quantum amplitude estimation', 'O(1/ε)']
      ]} />

      <Plot
        n={5}
        alt="Theoretical scaling of classical Monte Carlo and QAE"
      />

      <p>
        Numerical comparison of classical and quantum
        query complexity across different precision levels.
      </p>


      {/* ========================================
          EXTENDED QUANTUM SIMULATION
      ======================================== */}

      <hr style={{
        border: 0,
        borderTop: '1px solid var(--line)',
        margin: '40px 0'
      }} />

      <h3>Extended Quantum Simulation</h3>

      <p>
        A follow-up experiment conducted after the hackathon
        using Iterative Quantum Amplitude Estimation (IQAE)
        in Qiskit with a statevector-based simulator.
      </p>

      <h3>Quantum state preparation</h3>

      <p>
        The reference probability of 0.05 is encoded into
        a single-qubit state using an RY rotation.
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
        ['Classical probability', '0.05000000'],
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
          alt="IQAE estimate with 95 percent confidence interval and classical reference probability"
          loading="lazy"
        />
      </figure>

      <h3>Comparison of quantum experiments</h3>

      <div className="model-comparison">
        <table className="results-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Junction 2026</th>
              <th>Follow-up</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Reference probability</td>
              <td>0.05000</td>
              <td>0.05000</td>
            </tr>

            <tr>
              <td>Quantum estimate</td>
              <td>0.04972</td>
              <td>0.04997869</td>
            </tr>

            <tr>
              <td>Absolute error</td>
              <td>0.00028</td>
              <td>0.00002131</td>
            </tr>

            <tr>
              <td>Relative error</td>
              <td>0.56%</td>
              <td>0.0426%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Key findings</h3>

      <p>
        Both quantum estimates closely matched the classical
        reference probability. The follow-up simulation produced
        a smaller estimation error, with the reference probability
        falling within the estimated 95% confidence interval.
      </p>

      <p>
        The follow-up experiment uses a known probability encoded
        into a single-qubit state. It demonstrates amplitude
        estimation rather than an end-to-end quantum implementation
        of Bayesian financial risk modelling. A practical quantum
        advantage was not established.
      </p>

    </div>
  );
}

const base = '/images/junction/';

function Plot({ n, alt }: { n: number; alt: string }) {
  return <figure className="junction-plot"><img src={`${base}junction_plot_${n}.png`} alt={alt} loading="lazy" /></figure>;
}

function Metrics({ items }: { items: [string, string][] }) {
  return <div className="results-grid">{items.map(([label, value]) => <div className="metric-card" key={label}><span className="metric-label">{label}</span><strong className="metric-value">{value}</strong></div>)}</div>;
}

export function QuantumPortfolio() {
  return <div className="junction-portfolio">{['Nokia', 'Nordea', 'Sampo'].map(name => <div className="metric-card" key={name}><span className="metric-label">{name}</span><strong className="metric-value">33.3%</strong></div>)}</div>;
}

export function QuantumMethodology() {
  return <div className="junction-method"><p>Daily returns from January 2020 · Equal weights</p><div className="junction-flow">{['Historical stock prices', 'Daily portfolio returns', 'Bayesian normal model: rₜ ~ N(μ, σ²)', 'MCMC / NUTS (Stan)', 'Posterior predictive simulation', 'VaR & CVaR', 'QAE (Qiskit)'].map((step, i) => <div key={step}>{i > 0 && <span aria-hidden="true">↓</span>}<div className="junction-step">{step}</div></div>)}</div><Metrics items={ [['Chains','4'],['Iterations per chain','4,000'],['Warm-up per chain','1,000'],['Posterior draws','12,000']] } /></div>;
}

export default function QuantumResults() {
  return <div className="project-results junction-results">
    <Metrics items={ [['Value-at-Risk (95%)','−2.33%'],['Conditional VaR (95%)','−2.93%']] } />
    <h3>Historical portfolio returns</h3><Plot n={1} alt="Historical daily portfolio returns" />
    <h3>Posterior distributions</h3><div className="junction-pair"><Plot n={2} alt="Posterior distribution of mean return" /><Plot n={3} alt="Posterior distribution of volatility" /></div>
    <h3>Convergence diagnostics</h3><div className="model-comparison"><table className="results-table"><thead><tr><th>Parameter</th><th>ESS (n_eff)</th><th>R-hat</th></tr></thead><tbody>{[['μ','12,291'],['σ','1,976'],['lp__','2,677']].map(([p, ess]) => <tr key={p}><td>{p}</td><td>{ess}</td><td>1.00</td></tr>)}</tbody></table></div><p>R-hat values are shown at the precision reported by Stan.</p>
    <h3>Posterior predictive distribution</h3><Plot n={4} alt="Posterior predictive returns with dashed VaR threshold" />
    <h3>Classical vs. quantum estimation</h3><Plot n={6} alt="Classical reference 0.05000 and QAE estimate 0.04972" /><Metrics items={ [['Absolute error','0.00028'],['Relative error','0.56%']] } />
    <h3>Theoretical query complexity</h3><Metrics items={ [['Classical Monte Carlo','O(1/ε²)'],['Quantum amplitude estimation','O(1/ε)']] } /><Plot n={5} alt="Theoretical scaling of classical Monte Carlo and QAE" /><p>Numerical comparison of classical and quantum query complexity across different precision levels.</p>
    <h3>Key finding</h3><p>The quantum estimate closely matched the classical reference. A practical quantum advantage was not established.</p>
  </div>;
}

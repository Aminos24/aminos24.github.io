import { diabetesResults as results } from '../lib/content';

export default function ProjectResults() {
  return (
    <div className="project-results">

      <div className="results-grid">

        <div className="metric-card">
          <span className="metric-label">
            Observations
          </span>
          <strong className="metric-value">
            {results.observations.toLocaleString('en-US')}
          </strong>
          <span className="metric-description">
            Balanced dataset
          </span>
        </div>

        <div className="metric-card">
          <span className="metric-label">
            Nonlinear model accuracy
          </span>
          <strong className="metric-value">
            {results.nonlinearAccuracy}%
          </strong>
          <span className="metric-description">
            In-sample classification
          </span>
        </div>

        <div className="metric-card">
          <span className="metric-label">
            ELPD difference
          </span>
          <strong className="metric-value">
            +{results.elpdDifference}
          </strong>
          <span className="metric-description">
            Nonlinear vs. linear
          </span>
        </div>

        <div className="metric-card">
          <span className="metric-label">
            MCMC chains
          </span>
          <strong className="metric-value">
            {results.chains}
          </strong>
          <span className="metric-description">
            {results.iterations.toLocaleString('en-US')} iterations per chain
          </span>
        </div>

      </div>

      <div className="results-chart">

        <h3>Classification performance</h3>
        <p>In-sample accuracy comparison</p>

        <div className="chart-row">
          <div className="chart-label">
            <span>Linear model</span>
            <strong>{results.linearAccuracy}%</strong>
          </div>

          <div className="chart-track">
            <div
              className="chart-bar linear"
              style={{
                width: `${results.linearAccuracy}%`
              }}
            />
          </div>
        </div>

        <div className="chart-row">
          <div className="chart-label">
            <span>Nonlinear model</span>
            <strong>{results.nonlinearAccuracy}%</strong>
          </div>

          <div className="chart-track">
            <div
              className="chart-bar nonlinear"
              style={{
                width: `${results.nonlinearAccuracy}%`
              }}
            />
          </div>
        </div>

        <div className="chart-axis">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>

      </div>

      <div className="model-comparison">

        <h3>Model comparison — LOO-CV</h3>

        <table className="results-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Linear</th>
              <th>Nonlinear</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Accuracy</td>
              <td>{results.linearAccuracy}%</td>
              <td>{results.nonlinearAccuracy}%</td>
            </tr>

            <tr>
              <td>ELPD-LOO</td>
              <td>{results.linearElpd}</td>
              <td>{results.nonlinearElpd}</td>
            </tr>

            <tr>
              <td>Pareto k</td>
              <td>{results.paretoK}</td>
              <td>{results.paretoK}</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}
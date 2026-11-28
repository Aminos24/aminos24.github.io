import { electricityResults } from '../lib/content';

function Plot({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="junction-plot">
      <img
        src={src}
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
   DATASET
======================================== */

export default function ElectricityResults() {

  const { plots, forecasts, github } = electricityResults;

  return (
    <div className="project-results junction-results">

      <h3>Dataset</h3>

      <p>Fingrid Open Data · Electricity consumption in Finland</p>

      <Metrics items={[
        ['Study period', '2019–2025'],
        ['Original observations', '128,462'],
        ['Hourly observations', '61,368'],
        ['Training observations', '52,608'],
        ['Test observations', '8,760'],
        ['Forecast horizons', '24h / 168h']
      ]} />


      {/* ========================================
          EXPLORATORY DATA ANALYSIS
      ======================================== */}

      <SectionDivider />

      <h3>Exploratory Data Analysis</h3>

      <h3>Daily electricity consumption</h3>

      <Plot
        src={plots.dailyConsumption}
        alt="Daily electricity consumption in Finland from 2019 to 2025"
      />

      <h3>Hourly and weekly consumption patterns</h3>

      <div className="junction-pair">

        <Plot
          src={plots.hourlyProfile}
          alt="Average electricity consumption by hour of day"
        />

        <Plot
          src={plots.weeklyProfile}
          alt="Average electricity consumption by weekday"
        />

      </div>

      <h3>Monthly consumption patterns</h3>

      <Plot
        src={plots.monthlyProfile}
        alt="Average electricity consumption by month"
      />

      <p>
        Electricity consumption is generally higher during winter,
        lower during summer and lower on weekends than on weekdays.
      </p>


      {/* ========================================
          TIME SERIES DECOMPOSITION
      ======================================== */}

      <SectionDivider />

      <h3>Time Series Decomposition</h3>

      <p>
        MSTL decomposition was used to separate the time series
        into trend, seasonal and remainder components.
      </p>

      <Metrics items={[
        ['Daily seasonality', '24h'],
        ['Weekly seasonality', '168h'],
        ['Annual seasonality', '≈ 8,766h']
      ]} />

      <Plot
        src={plots.decomposition}
        alt="MSTL decomposition with daily, weekly and annual seasonal components"
      />


      {/* ========================================
          MODEL DEVELOPMENT
      ======================================== */}

      <SectionDivider />

      <h3>Model Development</h3>

      <div className="junction-flow">
        {[
          'Fingrid electricity consumption data',
          'Data preprocessing and hourly aggregation',
          'Exploratory data analysis',
          'Time series decomposition',
          'ACF, PACF and differencing',
          'ARIMA and SARIMA models',
          'Residual diagnostics',
          'Forecasting and evaluation'
        ].map((step, i) => (
          <div key={step}>
            {i > 0 && <span aria-hidden="true">↓</span>}
            <div className="junction-step">{step}</div>
          </div>
        ))}
      </div>

      <div className="model-comparison">
        <table className="results-table">

          <thead>
            <tr>
              <th>Model</th>
              <th>Specification</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>ARIMA</td>
              <td>(1,1,0)</td>
            </tr>
            <tr>
              <td>SARIMA</td>
              <td>(1,1,0)(0,1,1)[24]</td>
            </tr>
          </tbody>

        </table>
      </div>

      <Metrics items={[
        ['Training period', '2019–2024'],
        ['Test period', '2025']
      ]} />


      {/* ========================================
          FORECASTING RESULTS
      ======================================== */}

      <SectionDivider />

      <h3>Forecasting Results</h3>

      <h3>24-hour forecast</h3>

      <Plot
        src={plots.forecast24h}
        alt="Actual electricity consumption compared with 24-hour ARIMA and SARIMA forecasts"
      />

      <h3>168-hour forecast</h3>

      <Plot
        src={plots.forecast168h}
        alt="Actual electricity consumption compared with one-week ARIMA and SARIMA forecasts"
      />

      <h3>Model comparison</h3>

      <div className="model-comparison">
        <table className="results-table">

          <thead>
            <tr>
              <th>Horizon</th>
              <th>Model</th>
              <th>MAE (MW)</th>
              <th>RMSE (MW)</th>
            </tr>
          </thead>

          <tbody>
            {forecasts.map(result => (
              <tr key={`${result.horizon}-${result.model}`}>
                <td>{result.horizon}</td>
                <td>{result.model}</td>
                <td>{result.mae.toFixed(2)}</td>
                <td>{result.rmse.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <p>
        Evaluation period: 1–7 January 2025.
        Lower MAE and RMSE indicate better forecast accuracy.
      </p>


      {/* ========================================
          KEY FINDINGS
      ======================================== */}

      <SectionDivider />

      <h3>Key Findings</h3>

      <p>
        SARIMA captured daily consumption patterns better,
        while ARIMA achieved lower forecast errors over
        both evaluated forecast horizons.
      </p>

      <p>
        The results showed that including seasonality in
        a model does not necessarily improve forecast accuracy.
      </p>

      <p>
        Both models showed residual autocorrelation,
        suggesting that some patterns remained unexplained.
      </p>

      <h3>Limitations</h3>

      <p>
        Forecast accuracy was evaluated only during the first
        week of 2025. Temperature and public holidays were
        not included in the models.
      </p>

      <SectionDivider />

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        View source code and dataset on GitHub ↗
      </a>

    </div>
  );
}
import React, { Component } from "react";
import { CHART_CONFIG } from './chartData.js';
import ChartComponent from '../pf-lib/c3Charts/chart.jsx';


export class main_page extends Component {

  render() {
    let defaultConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
    let config =  {...defaultConfig, ...CHART_CONFIG.line};

    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            <div className="card-pf-heading c">
              <h2 className="card-pf-title">
                C3 Charts Example
              </h2>
              <div className="card-pf-footer row">
                <div className="col-sm-offset-4 col-sm-4 ">
                  <h4> Line Chart Example: </h4>
                  {/* Chart component takes the element and config as a prop */}
                  <ChartComponent element='chart-pf-sparkline' config={config}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default main_page
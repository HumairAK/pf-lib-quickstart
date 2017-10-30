import React, { Component } from "react";
import { CHART_CONFIG } from './chartData.js';
import ChartComponent from '../pf-lib/c3Charts/chart.jsx';


export class main_page extends Component {
  render() {

    // Build config for line chart
    let defaultConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
    let lineConfig =  {...defaultConfig, ...CHART_CONFIG.line};

    // Build config for donut chart
    defaultConfig = $().c3ChartDefaults().getDefaultDonutConfig();
    let donutConfig =  {...defaultConfig, ...CHART_CONFIG.donut};

    // This call back will be invoked once the donut chart is generated
    let generateCallback = () =>
    {
      let donutChartTitle = d3.select("#chart-pf-donut").select('text.c3-chart-arcs-title');
      donutChartTitle.text("");
      donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
      donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
    };

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
                  <ChartComponent element='chart-pf-sparkline' config={lineConfig}/>
                </div>
              </div>

              <div className="card-pf-footer row">
                <div className="col-sm-offset-4 col-sm-4 ">
                  <h4> Donut Chart Example: </h4>
                  {/* Chart component can also take a callback that is invoked once the chart is generated */}
                  <ChartComponent element='chart-pf-donut' config={donutConfig} generateCallback={generateCallback}/>
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
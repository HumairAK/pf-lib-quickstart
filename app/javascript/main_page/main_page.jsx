import React, { Component } from "react";
import ChartComponent from '../pf-lib/c3Charts/chart.jsx';
import { CONF } from './chartData.js';

export class main_page extends Component {
  render() {
    return (
      <div className="container-fluid containers-cards-pf">


        <div className="row row-cards-pf">
          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Line Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-1' config={CONF.line1.config}/>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Line Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-2' config={CONF.line2.config} generateCallback={CONF.line2.callback}/>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Donut Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-3' config={CONF.donut1.config} generateCallback={CONF.donut1.callback}/>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Vertical Bar Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-4' config={CONF.vBarChart.config}/>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cards-pf">
          <div className="col-xs-12 col-md-6">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Grouped Vertical Bar Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-5' config={CONF.groupedVBarChart.config}/>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Horizontal Bar Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-6' config={CONF.hBarChart.config}/>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-md-3">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"/>
                Grouped Horizontal Bar Chart
              </h2>
              <div className="card-pf-body">
                <ChartComponent element='chart-ex-7' config={CONF.groupedHBarChart.config}/>
              </div>
            </div>
          </div>

        </div>


      </div>
    )
  }
}


export default main_page


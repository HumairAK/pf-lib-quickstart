import React, { Component } from "react";
import { CONF } from '../chartData.js';
import Card from '../card/card.jsx';

export class barCharts extends Component {
  render() {
    return (
      <div className="container-fluid containers-cards-pf">
        <div className="row row-cards-pf">
          <Card element="chart-ex-4" config={CONF.vBarChart.config} colClass="col-xs-6 col-md-3" title="Vertical Bar Chart" />
          <Card element="chart-ex-5" config={CONF.groupedVBarChart.config} colClass="col-xs-6 col-md-3" title="Grouped Vertical Bar Chart" />
          <Card element="chart-ex-8" config={CONF.stackedVBarChart.config} colClass="col-xs-6 col-md-3" title="Stacked Vertical Bar Chart" />
          <Card element="chart-ex-9" config={CONF.stackedHBarChart.config} colClass="col-xs-6 col-md-3" title="Stacked Horizontal Bar Chart" />
          <Card element="chart-ex-6" config={CONF.hBarChart.config} colClass="col-xs-6 col-md-3" title="Stacked Horizontal Bar Chart" />
          <Card element="chart-ex-7" config={CONF.groupedHBarChart.config} colClass="col-xs-6 col-md-3" title="Stacked Horizontal Bar Chart" />
        </div>
      </div>
    )
  }
}



export default barCharts
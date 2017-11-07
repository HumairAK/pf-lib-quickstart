import React, { Component } from "react";
import { CONF } from '../chartData.js';
import Card from '../card/card.jsx';

export class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid containers-cards-pf">
        <div className="row row-cards-pf">
          <Card element="chart-ex-1" config={CONF.line1.config}
                colClass="col-xs-6 col-md-3" title="Line Chart" />
          <Card element="chart-ex-2" config={CONF.line2.config}
                colClass="col-xs-6 col-md-3" title="Line Chart" callback={CONF.line2.callback} />
          <Card element="chart-ex-donut-1" config={CONF.donutGeneric.config}
                colClass="col-xs-6 col-md-3" title="Donut Chart" callback={CONF.donutGeneric.callback} />
          <Card element="chart-ex-4" config={CONF.vBarChart.config}
                colClass="col-xs-6 col-md-3" title="Vertical Bar Chart" />
        </div>

        <div className="row row-cards-pf">
          <Card element="chart-ex-5" config={CONF.groupedVBarChart.config}
                colClass="col-xs-12 col-md-6" title="Grouped Vertical Bar Chart" />
          <Card element="chart-ex-6" config={CONF.hBarChart.config}
                colClass="col-xs-6 col-md-3" title="Horizontal Bar Chart" />
          <Card element="chart-ex-7" config={CONF.groupedHBarChart.config}
                colClass="col-xs-6 col-md-3" title="Grouped Horizontal Bar Chart" />
        </div>
      </div>
    )
  }
}


export default Dashboard


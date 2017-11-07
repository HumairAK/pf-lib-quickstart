import React, { Component } from "react";
import { CONF } from '../chartData.js';
import Card from '../card/card.jsx';

export class DonutCharts extends Component {
  render() {
    return (
      <div className="container-fluid containers-cards-pf">
        <div className="row row-cards-pf">
          <Card element="chart-ex-donut-1" config={CONF.donutGeneric.config} colClass="col-xs-6 col-md-3" title="Donut Chart" callback={CONF.donutGeneric.callback}/>
          <Card element="chart-ex-donut-2" config={CONF.donutChartNoLegend.config} colClass="col-xs-6 col-md-3" title="Donut Chart No Legend" callback={CONF.donutChartNoLegend.callback}/>
          <Card element="chart-ex-donut-3" config={CONF.donutChartRightConfig.config} colClass="col-xs-6 col-md-3" title="Donut Chart Right Legend" callback={CONF.donutChartRightConfig.callback}/>
          <Card element="chart-ex-donut-4" config={CONF.donutChartBottomConfig.config} colClass="col-xs-6 col-md-3" title="Donut Chart Right Legend" callback={CONF.donutChartBottomConfig.callback}/>
        </div>
      </div>
    )
  }
}


export default DonutCharts


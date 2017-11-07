import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartComponent from '../pf-lib/c3Charts/chart.jsx';

export class Card extends Component {
  static get propTypes() {
    return {
      element: PropTypes.string.isRequired,
      config: PropTypes.object.isRequired,
      colClass: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      span: PropTypes.string,
      callback: PropTypes.func,
    }
  }

  render() {
    let span = "fa fa-shield";
    if(this.props.span !== undefined) span = this.props.span;

    return (
      <div className={this.props.colClass}>
        <div className="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 className="card-pf-title">
            <span className={span}/>
            {this.props.title}
          </h2>
          <div className="card-pf-body">
            <ChartComponent element={this.props.element}
                            config={this.props.config} generateCallback={this.props.callback}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Card


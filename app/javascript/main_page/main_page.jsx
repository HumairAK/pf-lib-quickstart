import React, { Component } from "react";
import { setMessageWithTimeout } from '../pf-lib/message/messageActions.js'
import PropTypes from "prop-types";
import { connect } from 'react-redux';

export class main_page extends Component {
  static get propTypes(){
    return {
      setMessageWithTimeout: PropTypes.func,
    }
  }

  render() {
    const onClickHandler = () => {
      this.props.setMessageWithTimeout('You pressed a button.', 'success')
    };

    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            <div className="card-pf-heading c">
              <h2 className="card-pf-title">
                Main Page!
              </h2>
              <div className="card-pf-footer">
                <button className="btn btn-primary m-r-8" onClick={onClickHandler}>
                  Click me!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageWithTimeout: (msg, status) => {
      dispatch(setMessageWithTimeout(msg, status))
    },
  }
};

export default connect(null, mapDispatchToProps)(main_page);
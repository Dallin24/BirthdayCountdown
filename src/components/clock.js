import React, { Component } from 'react';

export default class Clock extends Component {
  render() {
    return (
        <div className="clock">
            <div className="clock__days clock-box">
                <label className="clock__title">DAYS</label>
                <label className="clock__amount">{this.props.timeRemaining.days}</label>
            </div>
            <div className="clock__hours clock-box">
                <label className="clock__title">HRS</label>
                <label className="clock__amount">{this.props.timeRemaining.hours}</label>
            </div>
            <div className="clock__minutes clock-box">
                <label className="clock__title">MINS</label>
                <label className="clock__amount">{this.props.timeRemaining.minutes}</label>
            </div>
            <div className="clock__seconds clock-box">
                <label className="clock__title">SECS</label>
                <label className="clock__amount">{this.props.timeRemaining.seconds}</label>
            </div>
        </div>
    );
  }
}

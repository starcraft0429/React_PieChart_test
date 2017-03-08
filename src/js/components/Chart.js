import './Chart.scss';
import React, { Component } from 'react';
import Pie from './Pie.js';


export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
                  data: [100, 100, 100]
                  };
  }
  update(color, direction) {
    let newData = this.state.data;
    direction == 1 ? newData[color] = newData[color]+10 : newData[color]>10? newData[color] = newData[color]-10 : newData[color];
    this.setState({data: newData});
  }
  render() {
    var colors = ['#f0ad4e', '#3d8af7', '#ff3823'];
    return (
      <div id="mainView">
        <div className="staticDiv">
          <div className="chartDiv">
            <Pie
              data={ this.state.data }
              radius={ 150 }
              hole={ 0 }
              colors={ colors }
              labels={ true }
              percent={ true }
              strokeWidth={ 3 }
              stroke={ '#fff' }
            />
          </div>
          <div className="btnDiv">
            <div className="cus_btn" style={{background: '#f0ad4e'}} onClick={() => this.update(0, 1)}>+</div>
            <div className="cus_btn" style={{background: '#3d8af7'}} onClick={() => this.update(1, 1)}>+</div>
            <div className="cus_btn" style={{background: '#ff3823'}} onClick={() => this.update(2, 1)}>+</div>
          </div>
          <div className="btnDiv">
            <div className="cus_btn" style={{background: '#f0ad4e'}} onClick={() => this.update(0, 0)}>-</div>
            <div className="cus_btn" style={{background: '#3d8af7'}} onClick={() => this.update(1, 0)}>-</div>
            <div className="cus_btn" style={{background: '#ff3823'}} onClick={() => this.update(2, 0)}>-</div>
          </div>
        </div>
      </div>
    )
  }
}
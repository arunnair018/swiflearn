import React, { Component } from "react";
import "../css/videos.css";

class Videos extends Component {
  state = {
    classNumber: 5,
  };

  componentDidUpdate(prevProps) {
    if (this.props.classNumber !== prevProps.classNumber) {
      this.setState({ classNumber: this.props.classNumber });
    }
  }

  render() {
    let data = Data[this.state.classNumber];
    return (
      <div className='vid'>
        <h4 className='header'>
          Concept Videos <br />
          <span className='small'>select a number</span>
        </h4>
        <div class='carousel'>
          {data.map((item, index) => {
            return (
              <a class='carousel-item' href='#one!'>
                <img
                  className='carousel-img'
                  src='/img/button.png'
                  alt='loading..'
                />
                <span className='classnumber'>Class: {this.props.classno}</span>
                <span className='number'>Video: {index}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Videos;

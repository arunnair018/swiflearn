import React, { Component } from "react";
import "../css/classes.css";

class Classes extends Component {
  state = {
    active: 5,
  };

  changeActive = (e) => {
    e.preventDefault();
    let active = parseInt(e.target.innerHTML);
    this.setState({
      active: active,
    });
    this.props.setclass(active);
  };

  render() {
    let classes = [5, 6, 7, 8, 9];
    return (
      <div>
        <h4 className='header'>
          Live Classes <br />
          <span className='small'>select a number</span>
        </h4>
        <div class=' pager'>
          <ul class='pagination'>
            {classes.map((item) => {
              let style =
                this.state.active === item
                  ? { borderBottom: "3px solid gray" }
                  : {};
              return (
                <li class='waves-effect' style={style}>
                  <a href='#!' onClick={this.changeActive}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Classes;

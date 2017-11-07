import { NavLink } from "react-router-dom";
import React from "react";
import sidebar from "./css/sidebar.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickeddiv: ""
    };
  }
  handleClick = e => {
    const prediv = this.state.clickeddiv;
    if (prediv !== "")
      prediv.style.backgroundColor = this.props.styleProps.bgcolor;
    e.target.style.backgroundColor = this.props.styleProps.clickedcolor;
    this.setState({
      clickeddiv: e.target
    });
  };

  render() {
    return (
      <div className="sidenav ">
        {this.props.links.map((row, i) => (
          <NavLink
            to={row.linkdir}
            style={{
              textDecoration: "none",
              color: this.props.styleProps.bgcolor
            }}
            key={i}
            activeStyle={{ color: this.props.styleProps.clickedcolor }}
            onClick={this.handleClick}
          >
            <div className="container" id={"nav" + i}>
              <div className="label">{row.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    );
  }
}

SideBar.defaultProps = {
  styleProps: { bgcolor: "black", clickedcolor: "darkred" }
};

export default SideBar;

import React from "react";

export default class WindowResizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize(event) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    return (
      <div>
        <p> Largura da tela: {this.state.width}</p>
        <p> Altura da tela: {this.state.height}</p>
      </div>
    );
  }
}

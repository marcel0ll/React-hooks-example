import React from "react";

export default function withResizer(Wrapped) {
  return class WindowResizer extends React.Component {
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
      return <Wrapped {...this.state} {...this.props} />;
    }
  };
}

import React from "react";

class imageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }
  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.addSpan);
  }
  addSpan = () => {
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 7);
    this.setState({ spans: spans });
  };

  render(props) {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default imageCard;

import React, { Component } from "react";

export class BandanaOptionsItem extends Component {
  render() {
    const handleSetSingleBandana = (e) => {
      this.props.setSingleBandana(e);
    };

    return (
      <div>
        <h1
          className="bandanaItem"
          id={this.props.elem.id}
          onClick={handleSetSingleBandana}
        >
          {this.props.elem.name}
        </h1>
      </div>
    );
  }
}

export default BandanaOptionsItem;

import React from "react";
import BandanaOptionsItem from "./BandanaOptionsItem";

class BandanaOptions extends React.Component {
  render() {
    return this.props.name.map((elem) => {
      return (
        <div>
          <BandanaOptionsItem
            elem={elem}
            key={elem.id}
            setSingleBandana={this.props.setSingleBandana}
          />
        </div>
      );
    });
  }
}

export default BandanaOptions;

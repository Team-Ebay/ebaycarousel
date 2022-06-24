import React from "react";
import "./App.css";
import BandanaOptions from "./component/BandanaOptions";
import { ChoiceList } from "./component/ChoiceList";
import { PriceButtonsDiv } from "./component/PriceButtonsDiv";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      id: null,
      loading: true,
      loadingMessage: "Let me Fetch your Bandana options..",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3009/api/bandanacarousel/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data,
          loading: false,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <div className="bandanaCarouselSection">
          <div className="customerSelection">
            <div className="chooseBandana">
              <BandanaOptions name={this.state.name} />
            </div>
            <div className="choicelist">
              <hr></hr>
              <ChoiceList />
            </div>
            <PriceButtonsDiv />
            <div className="bandanaCarousel"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

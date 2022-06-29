import React from "react";
import "./App.css";
import BandanaCarousel from "./component/BandanaCarousel";
import BandanaOptions from "./component/BandanaOptions";
import { ChoiceList } from "./component/ChoiceList";
import HaveOneToSell from "./component/HaveOneToSell";
import { PriceButtonsDiv } from "./component/PriceButtonsDiv";
import SellerInformation from "./component/SellerInformation";
import ShopWithConfidence from "./component/ShopWithConfidence";
import StandardShipping from "./component/StandardShipping";

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
        <div className="wholeContainer">
          <div className="bandanaCarouselSection">
            {/* Carousel component */}
            <div className="bandanaCarousel">
              <BandanaCarousel />
            </div>
          </div>
          <div className="container">
            <div className="customerSelection">
              <div className="chooseBandana">
                <BandanaOptions name={this.state.name} />
              </div>
              <h1 className="partOfTitle">27 inches</h1>
              <hr className="firstHr"></hr>
              <div className="choicelist">
                <ChoiceList />
              </div>
              <hr className="secondHr"></hr>
              <PriceButtonsDiv />
              <div className="rightContainer">
                <ShopWithConfidence />
                <SellerInformation />
              </div>
              <div>
                <HaveOneToSell />
              </div>
              <div>
                <StandardShipping />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
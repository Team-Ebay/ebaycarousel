export const PriceButtonsDiv = () => {
  return (
    <div>
      <div className="bandanaButtonsDiv">
        <h2 className="price">Price:</h2>
        <p className="integer">US $16.49</p>
        <div className="allButtons">
          <button className="buy">Buy It Now</button>
          <br></br>
          <button className="cart">Add to cart</button>
          <br></br>
          <button className="wishlist">🤍 Add to Watchlist</button>
        </div>
        <hr className="thirdHr"></hr>
        <div className="shippingInfo">
          <div className="FreeShipping">
            <h3 className="free">Free shipping</h3>
            <h3 className="free2"> and returns</h3>
          </div>
          <div className="sold">
            <h3 className="sold32">38 sold</h3>
          </div>
          <div className="USshipping">
            <h3 className="us">Ships from </h3>
            <h3 className="us2">United States</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

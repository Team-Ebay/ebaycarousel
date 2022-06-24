export const PriceButtonsDiv = () => {
  return (
    <div>
      <div className="bandanaButtonsDiv">
        <hr />
        <h2 className="price">Price:</h2>
        <p className="integer">US $16.49</p>

        <button className="buy">Buy It Now</button>
        <br></br>
        <button className="cart">Add to cart</button>
        <br></br>
        <button className="wishlist">🤍 Add to Watchlist</button>
        <hr></hr>
        <div className="FreeShipping">
          <h3 className="free">Free shipping and returns</h3>
        </div>
        <div className="sold">
          <h3 className="sold32">32 sold</h3>
        </div>
        <div className="USshipping">
          <h3 className="us">Ships from United States</h3>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import PaymentIcons from "./PaymentIcons";

function StandardShipping() {
  return (
    <div className="overallShippingInfo">
      <h1 className="lastShipping">
        Shipping:
        <h2 className="FreeStandardShipping">
          FREE Standard Shipping |<p className="details">See details</p>
          <p className="located">
            Located in: Los Angeles, California, United States
          </p>
        </h2>
      </h1>
      <h1 className="delivery">Delivery:</h1>
      <p className="estimated">Estimated between Tue, Jul 5 and Sat, Jul 9</p>

      <h1 className="Returns">Returns:</h1>
      <p className="thirtyDay">30 days returns | Seller pays for return</p>
      <p className="thirtyShipping">shipping | See details</p>
      <h1 className="payments">Payments:</h1>
      <PaymentIcons />

      <div className="coupon">
        <img src="https://th.bing.com/th/id/OIP.DE3i4xiTm0OiA5JEQvE67wHMCH?w=279&h=103&c=7&r=0&o=5&pid=1.7" />
      </div>
    </div>
  );
}

export default StandardShipping;

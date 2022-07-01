import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function BandanaCarousel() {
  return (
    <Carousel
      showArrows={true}
      showThumbs
      thumbWidth={true}
      showIndicators={false}
      dynamicHeight
    >
      <div>
        <img
          src="https://i.ebayimg.com/images/g/DJAAAOSws45humck/s-l64.jpg"
          className="bandanaStack"
        />
      </div>
      <div>
        <img src="https://i.ebayimg.com/images/g/QW4AAOSwsu9humcj/s-l64.jpg" />
      </div>
      <div>
        <img src="https://i.ebayimg.com/images/g/3akAAOSw6xFhumcj/s-l64.jpg" />
      </div>
      <div>
        <img src="https://i.ebayimg.com/images/g/YSYAAOSwKgthumcj/s-l64.jpg" />
      </div>
      <div>
        <img src="https://i.ebayimg.com/images/g/bUYAAOSwFuBhumcj/s-l64.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/black-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/green-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/grey-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/hotpink-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/orange-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/purple-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/red-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/royalblue-paisley-topview-bandana.jpg" />
      </div>
      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/white-paisley-topview-bandana.jpg" />
      </div>

      <div>
        <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/yellow-paisley-topview-bandana.jpg" />
      </div>
    </Carousel>
  );
}

export default BandanaCarousel;

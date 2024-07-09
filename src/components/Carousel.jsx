import React, { useState } from "react";

function Carousel({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            data-index={index}
            onClick={(e) => setActive(+e.target.dataset.index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

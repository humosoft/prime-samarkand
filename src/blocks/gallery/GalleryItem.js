import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import { SERVER_URL } from "../../helpers/constants";

export default function GalleryItem({ item }) {
  const [toggler, setToggler] = useState(false);
  const images = item.images?.data;
  return (
    <>
      <div
        onClick={() => setToggler(!toggler)}
        key={item.id}
        title={item.title}
        className="gallery-item">
        <div className="gallery-content">
          <div className="text">
            <h6>{item.title}</h6>
          </div>
        </div>

        <div className="img object-fit">
          <div className="object-fit-cover">
            <img
              src={`${SERVER_URL}${images[0]?.attributes?.formats?.medium?.url}`}
              alt={item.title}
            />
          </div>
        </div>

        <div className="img-bg-color"></div>
      </div>
      {images.length > 0 && (
        <FsLightbox
          toggler={toggler}
          sources={images.map((x) => `${SERVER_URL}${x?.attributes?.url}`)}
        />
      )}
    </>
  );
}

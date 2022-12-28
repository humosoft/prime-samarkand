import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

import useAxios from "../../hooks/useAxios";
import GalleryItem from "./GalleryItem";

const GalleryContent = () => {
  const { lang } = useContext(TranslationContext);
  //it actually fetches home page data, it was mistake in backend
  const { response } = useAxios({
    endpoint: "/gallery",
    params: {
      locale: lang,
      populate:
        "item.images",
    },
  });
  return (
    <div className="wrapper">
      <div className="content">
        <div className="gallery-items clearfix">
          {response?.data?.data &&
            response?.data?.data.attributes?.item?.map((item) => <GalleryItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;

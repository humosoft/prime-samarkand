import React from "react";

const NewsDescription = ({ content }) => {
  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};

export default NewsDescription;

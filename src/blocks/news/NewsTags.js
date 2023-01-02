import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

const NewsTags = ({tags}) => {
  const {translations} = useContext(TranslationContext)
  return (
    <div className="tags">
      <p>
        <span className="tags-title">{translations?.tags}</span>
        {tags?.map(tag => (
          <span className="tags-item" key={tag.id}>
            {tag.title}
          </span>
        ))}
      </p>
    </div>
  );
};

export default NewsTags;

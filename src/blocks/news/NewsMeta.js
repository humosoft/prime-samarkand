import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

const NewsMeta = ({ createdAt }) => {
  const { lang } = useContext(TranslationContext);
  const formatter = Intl.DateTimeFormat(lang, {
    dateStyle: "full",
  });

  console.log(createdAt)

  return (
    <div className="meta">
      <p>
        <span className="date s-small bold">
          {createdAt && formatter.format(new Date(createdAt))}
        </span>
      </p>
    </div>
  );
};

export default NewsMeta;

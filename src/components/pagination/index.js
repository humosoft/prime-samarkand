import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

export default function Pagination({ loading, page, pageCount }) {
  const { translations } = useContext(TranslationContext);

  if(pageCount <= 1) return null;

  return (
    <div
      style={{ gap: "16px" }}
      className="d-flex spacer m-top-lg loadmore justify-content-center">
      <Link
        to={`/news?page=${page - 1}`}
        className={`btn btn-secondary transform-scale-h ${
          loading || page === 1 ? "disabled" : ""
        }`}>
        {loading ? translations?.loading : translations?.prev}
      </Link>
      <Link
        to={`/news?page=${page + 1}`}
        className={`btn btn-secondary transform-scale-h ${
          loading || page === pageCount ? "disabled" : ""
        }`}>
        {loading ? translations?.loading : translations?.next}
      </Link>
    </div>
  );
}

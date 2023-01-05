import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

const LoadMoreNews = ({ loading, page }) => {
  const { translations } = useContext(TranslationContext);
  return (
    <div className="loadmore spacer m-top-lg">
      <Link
        disabled={loading}
        to={`/news?page=${page + 1}`}
        className="btn btn-secondary transform-scale-h">
        {loading ? translations?.loading : translations?.loadMore}
      </Link>
    </div>
  );
};

export default LoadMoreNews;

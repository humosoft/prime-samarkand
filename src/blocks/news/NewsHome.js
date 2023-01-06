import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

import { SERVER_URL } from "../../helpers/constants";
import useAxios from "../../hooks/useAxios";

const NewsHome = () => {
  const { lang } = useContext(TranslationContext);
  //it actually fetches home page data, it was mistake in backend
  //omg this generated newss??
  const { response } = useAxios({
    endpoint: "/newss",
    params: {
      locale: lang,
      pagination: {
        pageSize: 3,
      },
      populate: "image,tags",
    },
  });

  return (
    <div className="row gutter-width-md with-pb-lg">
      {response?.data?.data?.length > 0 &&
        response?.data?.data?.map((news) => (
          <div
            key={news.id}
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="card card-post">
              <div className="card-top position-relative">
                <Link
                  title={news.attributes.title}
                  to={`/news/${news.id}`}>
                  <div className="img object-fit overflow-hidden">
                    <div className="object-fit-cover transform-scale-h">
                      <img
                        className="card-top-img"
                        src={`${SERVER_URL}${news.attributes.image?.data?.attributes?.formats?.medium?.url}`}
                        alt={news.attributes.title}
                      />

                      <div className="img-bg-color"></div>
                    </div>
                  </div>
                </Link>

                <div className="card-category">
                  <span className="btn btn-sm btn-secondary transform-scale-h border-0">
                    {news.attributes?.tags[0]?.title}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <Link
                    title={news.attributes?.title}
                    to={`/news/${news.id}`}>
                    {news.attributes?.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsHome;

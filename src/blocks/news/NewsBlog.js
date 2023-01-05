import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";

import { TranslationContext } from "../../context/TranslationContext";
import { SERVER_URL } from "../../helpers/constants";
import useAxios from "../../hooks/useAxios";
import useQuery from "../../hooks/useQuery";

const NewsBlog = () => {
  const query = useQuery();
  const { lang } = useContext(TranslationContext);
  const page = +query.get("page") || 1;
  const { response, loading } = useAxios({
    endpoint: "/newss",
    params: {
      locale: lang,
      populate: "image,tags",
      pagination: {
        pageSize: 9,
        page: page,
      },
    },
    watch: [page],
  });

  return (
    <>
      <div className="row gutter-width-md with-pb-lg">
        {response?.data?.data.map(({attributes: item, id}) => (
          <div key={id} className="col-lg-4 col-md-6 col-sm-6">
            <div className="card card-post">
              <div className="card-top position-relative">
                <Link to={`/news/${id}`} title={item.title}>
                  <div className="img object-fit overflow-hidden">
                    <div className="object-fit-cover transform-scale-h">
                      <img
                        className="card-top-img"
                        src={`${SERVER_URL}${item.image?.data?.attributes?.url}`}
                        alt={item.title}
                      />

                      <div className="img-bg-color"></div>
                    </div>
                  </div>
                </Link>

                <div className="card-category">
                  <span
                    className="btn btn-sm btn-secondary transform-scale-h border-0">
                    {item?.tags[0]?.title}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  <Link title={item.title} to={`/news/${id}`}>
                    {item.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination loading={loading} page={page} pageCount={response?.data?.meta?.pagination?.pageCount} />
    </>
  );
};

export default NewsBlog;

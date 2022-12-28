import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";
import { SERVER_URL } from "../../helpers/constants";
import useAxios from "../../hooks/useAxios";

export default function ServicesContent({ servicesId }) {
  const { lang, translations } = useContext(TranslationContext);
  //it actually fetches home page data, it was mistake in backend
  const { response } = useAxios({
    endpoint: "/services",
    params: {
      locale: lang,
      populate: "*",
    },
  });

  return (
    <div className="service-items clearfix type-1">
      {response?.data?.data?.map((service) => (
        <Link
          key={service.id}
          className="service-item"
          to={`/services/${service.id}`}>
          <div className="service-content">
            <div className="service-content-sec">
              <div className="text">
                <h5 className="service-title">{service.attributes.title}</h5>
                <p>{service.attributes.blurb}</p>
              </div>

              <div className="button no-space">
                <p className="p-small bold transform-scale-h">
                  {translations?.readMore}
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-middle"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src={`${SERVER_URL}${service.attributes.images?.data[0]?.attributes?.url}`}
                alt={service.attributes.title}
              />
            </div>
          </div>

          <div className="img-bg-color"></div>
        </Link>
      ))}
    </div>
  );
}

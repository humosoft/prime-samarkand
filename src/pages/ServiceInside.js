import React, { Fragment, useContext, useEffect } from "react";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import ServiceInsideSwiper from "../blocks/service-inside/ServiceInsideSwiper";
import ServiceInsideWidget from "../blocks/service-inside/ServiceInsideWidget";
import useAxios from "../hooks/useAxios";
import { useParams, Redirect } from "react-router-dom";
import { GlobalContentContext } from "../context/GlobalContentContext";
import Meta from "../components/Meta";
import { SERVER_URL } from "../helpers/constants";
import { TranslationContext } from "../context/TranslationContext";

const ServiceInside = () => {
  const { id } = useParams();
  const { global } = useContext(GlobalContentContext);
  const { lang } = useContext(TranslationContext);
  const { response, fetchData } = useAxios({
    endpoint: `/services/${id}`,
    params: {
      populate: "images,services,localizations",
      locale: lang,
    },
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    document.body.classList.add("single");
    document.body.classList.add("single-adveits_service");

    return () => {
      document.body.classList.remove("single");
      document.body.classList.remove("single-adveits_service");
    };
  }, []);

  if (
    response?.data?.data?.attributes?.locale &&
    response?.data?.data?.attributes?.locale !== lang
  )
    return (
      <Redirect
        to={`/services/${
          response?.data?.data?.attributes?.localizations?.data?.find(
            (x) => x.attributes?.locale === lang
          )?.id
        }`}
      />
    );

  return (
    <Fragment>
      <Meta
        title={`${global?.title} - ${response?.data?.data?.attributes?.title}`}
        description={response?.data?.data?.attributes?.blurb}
      />

      <main id="main" className="site-main">
        <PageTitleCommon
          title={response?.data?.data?.attributes?.title}
          bg={`${SERVER_URL}${response?.data?.data?.attributes?.images?.data?.[0]?.attributes?.formats?.large.url}`}
        />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="single">
                <div className="row gutter-width-md single-content mb-5">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    {response?.data?.data?.attributes?.images?.data && (
                      <ServiceInsideSwiper
                        images={response?.data?.data?.attributes?.images?.data}
                      />
                    )}

                    <div className="description style clearfix spacer m-top-lg">
                      <h5>{response?.data?.data?.attributes?.blurb}</h5>
                      {response?.data?.data?.attributes?.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              response?.data?.data?.attributes?.description,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <aside id="aside" className="widget-area style-default">
                      <div id="service" className="widget_service">
                        <ServiceInsideWidget
                          services={response?.data?.data?.attributes?.services}
                        />
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ServiceInside;

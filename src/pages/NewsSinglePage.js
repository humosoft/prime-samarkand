import React, { Fragment, useContext, useEffect } from "react";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import NewsMeta from "../blocks/news/NewsMeta";
import NewsDescription from "../blocks/news/NewsDescription";
import NewsTags from "../blocks/news/NewsTags";
import NewsComments from "../blocks/news/NewsComments";
import Widget from "../blocks/widget/Widget";
import Meta from "../components/Meta";
import { Redirect, useParams } from "react-router-dom";
import { GlobalContentContext } from "../context/GlobalContentContext";
import { TranslationContext } from "../context/TranslationContext";
import useAxios from "../hooks/useAxios";
import { SERVER_URL } from "../helpers/constants";

const NewsSinglePage = () => {
  const { id } = useParams();
  const { global } = useContext(GlobalContentContext);
  const { lang } = useContext(TranslationContext);
  const { response, fetchData, loading } = useAxios({
    endpoint: `/newss/${id}`,
    params: {
      populate: "image,tags,localizations",
      locale: lang,
    },
  });

  useEffect(() => {
    // TODO: fix double request
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    document.body.classList.add("single-post");
    document.body.classList.add("header-menu-true");

    return () => {
      document.body.classList.remove("single-post");
      document.body.classList.remove("header-menu-true");
    };
  }, []);

  if (
    response?.data?.data?.attributes?.locale &&
    response?.data?.data?.attributes?.locale !== lang
  )
    return (
      <Redirect
        to={`/news/${
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
        description={response?.data?.data?.attributes?.title}
      />

      <main id="main" className="site-main">
        <PageTitleCommon
          title={response?.data?.data?.attributes?.title}
          bg={`${SERVER_URL}${response?.data?.data?.attributes?.image?.data?.attributes?.url}`}
        />

        <section id="page-content" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="single">
                <div className="row gutter-width-md single-content">
                  <div className="container">
                    <div className="img object-fit">
                      <div className="object-fit-cover">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */ }
                        <img
                          src={`${SERVER_URL}${response?.data?.data?.attributes?.image?.data?.attributes?.url}`}
                          alt={response?.data?.data?.attributes?.title}
                        />
                      </div>
                    </div>

                    <NewsMeta
                      createdAt={response?.data?.data?.attributes?.publishedAt}
                    />

                    <NewsDescription
                      content={response?.data?.data?.attributes?.content}
                    />

                    <NewsTags tags={response?.data?.data?.attributes?.tags} />
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

export default NewsSinglePage;

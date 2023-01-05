import React, { Fragment, useContext, useEffect } from "react";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import NewsBlog from "../blocks/news/NewsBlog";
import { TranslationContext } from "../context/TranslationContext";
import { GlobalContentContext } from "../context/GlobalContentContext";
import Meta from "../components/Meta";
import { SERVER_URL } from "../helpers/constants";

const News = () => {
  const { translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);

  useEffect(() => {
    document.body.classList.add("blog");
    document.body.classList.add("header-menu-true");

    return () => {
      document.body.classList.remove("blog");
      document.body.classList.remove("header-menu-true");
    };
  }, []);

  return (
    <Fragment>
      <Meta
        title={`${global?.title} - ${translations?.news}`}
        description={global?.description}
      />
      <main id="main" className="site-main">
        <PageTitleCommon
          bg={`${SERVER_URL}${global?.newsImage?.data?.attributes?.url}`}
          title={translations?.news}
        />

        <section id="page-content" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="blog">
                <NewsBlog />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default News;

import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import Widget from "../blocks/widget/Widget";
import NewsBlog from "../blocks/news/NewsBlog";

const News = () => {
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
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>
          News | Erso - Logistics & Transportation React JS Template
        </title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <main id="main" className="site-main">
        <PageTitleCommon title="News" />

        <section id="page-content" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="content">
              <div id="blog">
                <div className="row gutter-width-md style-default">
                  <NewsBlog />

                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <aside id="aside" className="widget-area">
                      <Widget />
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

export default News;

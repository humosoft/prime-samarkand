import React, { Fragment, useContext, useEffect } from "react";

import FooterSecondary from "../blocks/footer/FooterSecondary";

import PageTitle404 from "../blocks/page-title/PageTitle404";
import BackToHome from "../components/button/BackToHome";
import Meta from "../components/Meta";
import { TranslationContext } from "../context/TranslationContext";
import { GlobalContentContext } from "../context/GlobalContentContext";

const Page404 = () => {
  const { translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);
  useEffect(() => {
    document.body.classList.add("error404");
    document.body.classList.add("header-menu-true");

    return () => {
      document.body.classList.remove("error404");
      document.body.classList.remove("header-menu-true");
    };
  }, []);

  return (
    <Fragment>
      <Meta
        title={`${global?.title} - ${404}`}
        description={global?.description}
      />

      <main id="main" className="site-main">
        <PageTitle404 />

        <div id="page-content" className="block">
          <div className="wrapper">
            <p className="text w-50 mb-0 after">{translations?.notFoundText}</p>

            <BackToHome />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Page404;

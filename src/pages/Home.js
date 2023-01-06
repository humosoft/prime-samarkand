import React, { useContext, useEffect } from "react";
import MetaTags from "react-meta-tags";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import ServicesContent from "../blocks/services/ServicesContent";
import AboutUsPrimary from "../blocks/about/AboutUsPrimary";
import AboutUsMedia from "../blocks/about/AboutUsMedia";
import WhyUsContent from "../blocks/why-us/WhyUsContent";
import GalleryContent from "../blocks/gallery/GalleryContent";
import NewsHome from "../blocks/news/NewsHome";
import ContactsContent from "../blocks/contacts/ContactsContent";
import useAxios from "../hooks/useAxios";
import { TranslationContext } from "../context/TranslationContext";
import { GlobalContentContext } from "../context/GlobalContentContext";
import { Link, useLocation } from "react-router-dom";
import Meta from "../components/Meta";

export default function Home() {
  const location = useLocation();
  const { lang, translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);
  //it actually fetches home page data, it was mistake in backend
  const { response } = useAxios({
    endpoint: "/hero-banner",
    params: {
      locale: lang,
      populate:
        "heroBanner.bg,aboutUs.image,aboutUs.video,aboutUs.counter,whyUs.Items,services",
    },
  });

  const initSections = () => {
    document.body.classList.add("home");
    document.body.classList.add("header-menu-true");
    document.body.classList.add("header-absolute-true");
    document.body.classList.add("header-fixed-true");
    document.body.classList.add("button-clicked-true");
  };

  const disableSections = () => {
    document.body.classList.remove("home");
    document.body.classList.remove("header-menu-true");
    document.body.classList.remove("header-absolute-true");
    document.body.classList.remove("header-fixed-true");
    document.body.classList.remove("button-clicked-true");
  };

  useEffect(() => {
    initSections();

    return disableSections;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Meta title={global?.title} description={global?.description} />

      <main id="main" className="site-main">
        <PageTitleHome banner={response?.data?.data?.attributes?.heroBanner} />

        <section id="services" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <span className="transform-scale-h">
                  {translations?.services}
                </span>
              </h2>
            </div>

            <ServicesContent />
          </div>
        </section>

        <section id="about-us" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="row gutter-width-md">
              <AboutUsPrimary
                counters={response?.data?.data?.attributes?.aboutUs?.counter}
                title={response?.data?.data?.attributes?.aboutUs?.title}
                description={response?.data?.data?.attributes?.aboutUs?.text}
              />

              <AboutUsMedia
                youtubeUrl={
                  response?.data?.data?.attributes?.aboutUs
                    ?.youtubeEmbedVideoUrl
                }
                image={
                  response?.data?.data?.attributes?.aboutUs?.image?.data
                    ?.attributes?.medium?.url
                }
              />
            </div>
          </div>
        </section>

        <section id="why-us" className="block spacer p-top-xl">
          <div className="bg-light spacer p-top-lg p-bottom-lg">
            <div className="wrapper">
              <div className="title">
                <h2>
                  <span className="transform-scale-h">
                    {response?.data?.data?.attributes?.whyUs?.title}
                  </span>
                </h2>
              </div>
            </div>
            {/* Typo from backend ( */}
            <WhyUsContent
              items={response?.data?.data?.attributes?.whyUs?.Items}
            />
          </div>
        </section>

        <section id="gallery" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <span className="transform-scale-h">
                  {translations?.gallery}
                </span>
              </h2>
            </div>
          </div>

          <GalleryContent />
        </section>

        <section id="news" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <Link className="transform-scale-h" to="/news">
                  {translations?.currentNews}
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </Link>
              </h2>
            </div>

            <NewsHome />
          </div>
        </section>

        <section id="contacts" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <span className="transform-scale-h">
                  {translations?.contacts}
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </span>
              </h2>
            </div>
          </div>

          <ContactsContent />
        </section>
      </main>
    </>
  );
}

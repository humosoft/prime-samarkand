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

export default function Home() {
  const { lang, translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);
  //it actually fetches home page data, it was mistake in backend
  const { response } = useAxios({
    endpoint: "/hero-banner",
    params: {
      locale: lang,
      populate: "heroBanner.bg,aboutUs.image,aboutUs.video,whyUs,services",
    },
  });

  const initSections = () => {
    document.body.classList.add("home");
    document.body.classList.add("header-menu-true");
    document.body.classList.add("header-absolute-true");
    document.body.classList.add("header-fixed-true");
    document.body.classList.add("button-clicked-true");

    const header = document.getElementById("header");
    const services = document.getElementById("services");

    window.addEventListener(
      "scroll",
      function (event) {
        if (isInViewport(services)) {
          document.body.classList.add("header-fixed");
          header.classList.add("animated");
          header.classList.add("slideInDown");
        } else {
          document.body.classList.remove("header-fixed");
          header.classList.remove("animated");
          header.classList.remove("slideInDown");
        }
      },
      false
    );
  };

  const disableSections = () => {
    document.body.classList.remove("home");
    document.body.classList.remove("header-menu-true");
    document.body.classList.remove("header-absolute-true");
    document.body.classList.remove("header-fixed-true");
    document.body.classList.remove("button-clicked-true");
  };

  const isInViewport = (services) => {
    let bounding = services.getBoundingClientRect();

    if (window.screenTop - bounding.top > -20) {
      return true;
    }
  };

  useEffect(() => {
    initSections();

    return disableSections;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>{global?.title}</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${global?.description}`} />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

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

            {response?.data?.data?.attributes?.services?.data && (
              <ServicesContent
                servicesId={response?.data?.data?.attributes?.services?.data?.map(
                  (x) => x?.id
                )}
              />
            )}
          </div>
        </section>

        <section id="about-us" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="row gutter-width-md">
              <AboutUsPrimary isHomepage={true} />

              <AboutUsMedia />
            </div>
          </div>
        </section>

        <section id="why-us" className="block spacer p-top-xl">
          <div className="bg-light spacer p-top-lg p-bottom-lg">
            <div className="wrapper">
              <div className="title">
                <h2>
                  <a
                    title="Why us"
                    className="transform-scale-h"
                    href={"/why-us"}>
                    Why us
                    <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                  </a>
                </h2>
              </div>
            </div>

            <WhyUsContent />
          </div>
        </section>

        <section id="gallery" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <a
                  title="Gallery"
                  className="transform-scale-h"
                  href={"/gallery"}>
                  Gallery
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </a>
              </h2>
            </div>
          </div>

          <GalleryContent />
        </section>

        {/* <section id="reviews" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <a
                  title="Customer reviews"
                  className="transform-scale-h"
                  href={ "/reviews"}>
                  Customer reviews
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </a>
              </h2>
            </div>

            <ReviewsContent />
          </div>
        </section> */}

        {/* <section id="clients" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <a
                  title="Our clients"
                  className="transform-scale-h"
                  href={ "/clients"}>
                  Our clients
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </a>
              </h2>
            </div>

            <ClientsList />
          </div>
        </section> */}

        <section id="news" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <a
                  title="Current news"
                  className="transform-scale-h"
                  href={"/news"}>
                  Current news
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </a>
              </h2>
            </div>

            <NewsHome />
          </div>
        </section>

        <section id="contacts" className="block spacer p-top-xl">
          <div className="wrapper">
            <div className="title">
              <h2>
                <a
                  title="Contacts"
                  className="transform-scale-h"
                  href={"/contacts"}>
                  Contacts
                  <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                </a>
              </h2>
            </div>
          </div>

          <ContactsContent />
        </section>
      </main>
    </>
  );
}

import React from "react";

import LanguagePicker from "../../components/LanguagePicker";
import { SERVER_URL } from "../../helpers/constants";

export default function PageTitleHome({ banner }) {
  return (
    <section
      id="page-title"
      className="block"
      style={{
        backgroundImage: `url("${SERVER_URL}${banner?.bg?.data?.attributes?.url}")`,
      }}>
      <div className="wrapper h-100">
        <div className="d-flex justify-content-between position-relative h-100">
          <div className="align-self-center">
            <div className="title">
              <h1>{banner?.title}</h1>
            </div>

            <p className="spacer p-top-lg mb-0">{banner?.description}</p>
          </div>

          <div className="lang-position">
            <LanguagePicker />
          </div>
        </div>
      </div>

      <div className="page-title-bg-color"></div>
    </section>
  );
}

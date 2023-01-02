import React from "react";

import LanguagePicker from "../../components/LanguagePicker";

export default function PageTitleCommon({ bg, title }) {
  return (
    <section
      id="page-title"
      className="block"
      style={{
        backgroundImage: `url("${bg}")`,
      }}>
      <div className="wrapper h-100">
        <div className="d-flex justify-content-between position-relative h-100">
          <div className="align-self-center">
            <div className="title">
              <h1>{title}</h1>
            </div>
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

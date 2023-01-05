import React, { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
// import ReCAPTCHA from "react-google-recaptcha";
import Meta from "../components/Meta";
import { GlobalContentContext } from "../context/GlobalContentContext";
import { TranslationContext } from "../context/TranslationContext";
import { SERVER_URL } from "../helpers/constants";
// import { CAPTCHA_KEY } from "../helpers/constants";
import useLazyAxios from "../hooks/useLazyAxios";

const dataStrings = {
  fullName: "text",
  address: "text",
  degree: "text",
  foreignLanguages: "text",
  major: "text",
  university: "text",
  lastSalary: "text",
  nationality: "text",
  phone: "text",
  placeOfBirth: "text",
  quitReason: "text",
  englishLevel: "text",
  knowsComputer: "checkbox",
  hasCar: "checkbox",
  mayStudy: "checkbox",
  lastWork: "textarea",
  purpose: "textarea",
  familyInfo: "textarea",
  image: "image",
};

const sizes = {
  text: "col-lg-6 col-md-12",
  textarea: "col-lg-12",
  image: "col-lg-12",
  checkbox: "col-lg-4 col-md-12",
};

export default function Resume() {
  const { translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);
  const history = useHistory();
  const { fetchData, loading, response } = useLazyAxios({
    endpoint: "/resumes",
    method: "POST",
  });
  const elForm = useRef(null);
  // const elCaptcha = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(elForm.current);
    const newFormData = new FormData();
    const data = {};

    Object.keys(dataStrings)
      .filter((key) => dataStrings[key] === "checkbox")
      .forEach((checkbox) => {
        formData.get(checkbox)
          ? formData.set(checkbox, true)
          : formData.set(checkbox, false);
      });

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    newFormData.append(
      "files.image",
      formData.get("image"),
      formData.get("image").name
    );
    newFormData.append("data", JSON.stringify(data));

    fetchData({
      body: newFormData,
    }).catch(() => {
      alert(translations?.error);
    });
  }

  useEffect(() => {
    if (response?.data?.data?.id) {
      alert(translations?.success);

      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  function getInput(key) {
    if (dataStrings[key] === "text")
      return (
        <>
          <label className="mb-1" htmlFor={`form-${key}`}>
            {translations?.[key]}
          </label>
          <input
            required
            name={key}
            type="text"
            className="form-control"
            id={`form-${key}`}
            placeholder={translations?.[key]}
          />
        </>
      );
    if (dataStrings[key] === "checkbox")
      return (
        <div className="form-check">
          <input
            name={key}
            type="checkbox"
            className="form-check-input"
            id={`form-${key}`}
          />
          <label htmlFor={`form-${key}`} className="form-check-label">
            {translations?.[key]}
          </label>
        </div>
      );
    if (dataStrings[key] === "textarea")
      return (
        <>
          <label className="mb-1" htmlFor={`form-${key}`}>
            {translations?.[key]}
          </label>
          <textarea
            name={key}
            required
            className="form-control"
            id={`form-${key}`}
            rows="2"></textarea>
        </>
      );
    if (dataStrings[key] === "image")
      return (
        <div className="input-group custom-input-file">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor={`form-${key}`}>
              {translations?.[key]}
            </label>
          </div>

          <input
            accept="image/png, image/jpeg"
            type="file"
            required
            name={key}
            className="form-control"
            id={`form-${key}`}
          />
        </div>
      );
  }

  return (
    <>
      <Meta
        title={`${global?.title} - ${translations?.sendResume}`}
        description={global?.description}
      />
      <main id="main" className="site-main">
        <PageTitleCommon bg={`${SERVER_URL}${global?.sendResumeImage?.data?.attributes?.url}`} title={translations?.sendResume} />
        <div className="container">
          <form ref={elForm} onSubmit={handleSubmit} className="px-3 py-3">
            <div className="row">
              {Object.keys(dataStrings).map((key) => (
                <div key={key} className={sizes[dataStrings[key]]}>
                  <div className="form-group my-3">{getInput(key)}</div>
                </div>
              ))}
            </div>
            <div className="d-flex flex-wrap">
              {/* <ReCAPTCHA size="invisible" className="my-2 captcha" ref={elCaptcha} sitekey={CAPTCHA_KEY} /> */}
              <button type="submit" className="btn btn-primary">
                {loading ? translations?.loading : translations?.sendResume}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

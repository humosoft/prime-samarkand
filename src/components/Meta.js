import React from "react";
import { MetaTags } from "react-meta-tags";

export default function Meta({ title, description }) {
  return (
    <MetaTags>
      <meta charSet="UTF-8" />
      <title>{title}</title>

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="robots" content="index, follow, noodp" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
    </MetaTags>
  );
}

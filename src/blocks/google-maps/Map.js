import React from "react";
import { useContext } from "react";
import { GlobalContentContext } from "../../context/GlobalContentContext";

export default function Map() {
  const { global } = useContext(GlobalContentContext);
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe id="embed-map" src={global?.mapUrl} title={global?.title}></iframe>
  );
}

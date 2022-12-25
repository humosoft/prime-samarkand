import React, { useContext } from "react";
import { GlobalContentContext } from "../../context/GlobalContentContext";
import { SERVER_URL } from "../../helpers/constants";

const HeaderLogo = () => {
  const { global } = useContext(GlobalContentContext);

  return (
    <a
      className="logo logo-primary transform-scale-h"
      title={global?.title}
      href={"/"}>
      { /* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        width="90"
        src={`${SERVER_URL}${global?.logo?.data?.attributes?.url}`}
        alt={global?.title}
      />
    </a>
  );
};

export default HeaderLogo;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContentContext } from "../../context/GlobalContentContext";
import { SERVER_URL } from "../../helpers/constants";

const HeaderLogo = () => {
  const { global } = useContext(GlobalContentContext);

  return (
    <Link
      className="logo logo-primary transform-scale-h"
      title={global?.title}
      to={"/"}>
      { /* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        width="90"
        src={`${SERVER_URL}${global?.logo?.data?.attributes?.url}`}
        alt={global?.title}
      />
    </Link>
  );
};

export default HeaderLogo;

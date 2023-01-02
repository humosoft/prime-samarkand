import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export function DynamicLink(props) {
  const rLocation = useLocation();
  return rLocation.pathname === "/" ? (
    <a {...props}>{props.children}</a>
  ) : (
    <RouterLink {...props} to={`/${props.href}`}>
      {props.children}
    </RouterLink>
  );
}

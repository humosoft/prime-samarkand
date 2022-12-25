import React, { useContext } from "react";
import { GlobalContentContext } from "../../context/GlobalContentContext";
import { TranslationContext } from "../../context/TranslationContext";

export default function Loading() {
  const { loading: tLoading } = useContext(TranslationContext);
  const { loading: gLoading } = useContext(GlobalContentContext);
  return (
    <div
      className={
        tLoading || gLoading ? "loading" : "loading animated slideOutRight"
      }>
      <div className="wrapper h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="loading-content">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

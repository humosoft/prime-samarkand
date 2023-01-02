import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

const ServiceInsideWidget = ({services}) => {
  const {translations} = useContext(TranslationContext)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{translations?.servicesIncluded}</h5>

        <div className="card-text">
          {services?.map(x => (
            <p key={x.id}>{x.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInsideWidget;

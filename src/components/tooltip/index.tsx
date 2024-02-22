import React from "react";
import PropTypes from "prop-types";
import { ITooltip } from "../../interfaces/ITooltip";
import "./styled.css";

const Tooltip = ({ content, tooltipRef, disabled, children }: ITooltip) => {
  return (
    <div className="tooltipContainer">
      <div className={`tooltip${disabled ? " disabled" : ""}`} ref={tooltipRef}>
        {content}
      </div>
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  tooltipRef: PropTypes.object,
  disabled: PropTypes.bool.isRequired
};

export default Tooltip;
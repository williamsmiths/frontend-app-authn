import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { useIntl } from "@edx/frontend-platform/i18n";
import { Hyperlink, Image } from "@openedx/paragon";
import classNames from "classnames";

import messages from "./messages";

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 d-flex">
      <div className="col-md-9" style={{ background: "linear-gradient(135deg, #2f4dd3 0%, #1c64b7ff 100%)" }}>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="min-vh-100 d-flex align-items-center justify-content-center px-5">
          <div className="text-center">
            <h1
              className="display-2 text-white font-weight-bold mw-xs"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
            >
              {formatMessage(messages["start.learning"])}
              <div className="text-white mt-3" style={{ color: "#cddfff" }}>
                {formatMessage(messages["with.site.name"], { siteName: getConfig().SITE_NAME })}
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-3 bg-white p-0">
        <svg className="ml-n1 w-100 h-100" preserveAspectRatio="xMaxYMin meet" style={{ fill: "#cddfff" }}>
          <g transform="skewX(171.6)">
            <rect x="0" y="0" height="100%" width="100%" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LargeLayout;

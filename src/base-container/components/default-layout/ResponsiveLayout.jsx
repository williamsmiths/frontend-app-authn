import React from "react";
import { getConfig } from "@edx/frontend-platform";
import { useIntl } from "@edx/frontend-platform/i18n";
import { Hyperlink, Image } from "@openedx/paragon";
import LOGO_DTU from "../../../assets/images/logo-dtu.png";
import HERO_IMG from "../../../assets/images/educational-banner.png";
import messages from "./messages";

const ResponsiveLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center bg-white min-vh-100 py-4">
      
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image
          alt={getConfig().SITE_NAME}
          src={LOGO_DTU}
          className="mb-4 img-fluid"
          style={{ maxHeight: "386px", objectFit: "contain" }}
        />
      </Hyperlink>

      <h1 className="fw-bold mb-4 text-primary">
        {formatMessage(messages["start.learning"])}{" "}
        <span className="text-danger">
          {formatMessage(messages["with.site.name"], {
            siteName: getConfig().SITE_NAME,
          })}
        </span>
      </h1>

      <Image
        alt="Learning Illustration"
        src={HERO_IMG}
        className="img-fluid d-none d-lg-block"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      
    </div>
  );
};

export default ResponsiveLayout;

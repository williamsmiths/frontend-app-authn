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
    <div
      className="right-banner d-flex flex-column justify-content-center align-items-center text-center bg-white"
    >
      <Image
        alt="Logo"
        src={LOGO_DTU}
        className="mt-4 logo-responsive px-5"
      />

      <h1 className="fw-bold my-4 text-primary-blue">
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
        className="d-none d-lg-block"
        style={{ maxWidth: "80%", height: "auto" }}
      />

    </div>
  );
};

export default ResponsiveLayout;

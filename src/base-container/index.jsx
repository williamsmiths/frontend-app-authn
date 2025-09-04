import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { breakpoints } from "@openedx/paragon";
import classNames from "classnames";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { DefaultLargeLayout, DefaultMediumLayout, DefaultSmallLayout, DefaultResponsiveLayout } from "./components/default-layout";
import {
  ImageExtraSmallLayout,
  ImageLargeLayout,
  ImageMediumLayout,
  ImageSmallLayout,
} from "./components/image-layout";
import { AuthLargeLayout, AuthMediumLayout, AuthSmallLayout } from "./components/welcome-page-layout";

const BaseContainer = ({ children, showWelcomeBanner, fullName }) => {
  const enableImageLayout = getConfig().ENABLE_IMAGE_LAYOUT;

  if (enableImageLayout) {
    return (
      <div className="layout">
        <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth - 1}>
          {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageExtraSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.small.minWidth} maxWidth={breakpoints.small.maxWidth - 1}>
          {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          {showWelcomeBanner ? <AuthMediumLayout fullName={fullName} /> : <ImageMediumLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          {showWelcomeBanner ? <AuthLargeLayout fullName={fullName} /> : <ImageLargeLayout />}
        </MediaQuery>
        <div className={classNames("content", { "align-items-center mt-0": showWelcomeBanner })}>{children}</div>
      </div>
    );
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #FFCDD2 0%, #ffffff 50%, #FFCDD2 100%)", minHeight: "100vh" }}>
      {/* <div className="col-md-12 extra-large-screen-top-stripe" /> */}
      <div className="row mx-0 align-items-center justify-content-between w-100">
        <div className={classNames(
          "col-12 col-lg-7",
          "order-2 order-lg-1"
        )}>
          <div className={classNames("w-100 content items-center mt-0", { "": showWelcomeBanner })}>
            {children}
          </div>
        </div>

        <div className="col-12 col-lg-5 order-1 order-lg-2 p-0">
          <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
            {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <DefaultResponsiveLayout />}
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
            {showWelcomeBanner ? <AuthMediumLayout fullName={fullName} /> : <DefaultResponsiveLayout />}
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
            {showWelcomeBanner ? <AuthLargeLayout fullName={fullName} /> : <DefaultResponsiveLayout />}
          </MediaQuery>
        </div>
      </div>


    </div>
  );
};

BaseContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default BaseContainer;

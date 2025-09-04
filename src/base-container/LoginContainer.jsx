
import classNames from "classnames";
import PropTypes from "prop-types";

import { DefaultResponsiveLayout } from "./components/default-layout";
import bgLogin from "../assets/images/bg-authn.png";

const LoginContainer = ({ children, showWelcomeBanner, fullName }) => {

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <div className="col-md-12 extra-large-screen-top-stripe" /> */}
      <div className="row mx-0 min-vh-100 d-flex flex-column flex-lg-row">
        <div
          className={classNames(
            "col-12 col-lg-7 p-0",
            "order-2 order-lg-1",
            "d-flex align-items-center justify-content-center"
          )}
          style={{
            backgroundImage: `url(${bgLogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            flexGrow: 1,
          }}
        >
          <div className="mt-6 mt-lg-0">
            <div className={classNames("w-100 content items-center mt-0", { "": showWelcomeBanner })}>
              {children}
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block col-12 col-lg-5 order-1 order-lg-2 p-0">
          <DefaultResponsiveLayout />
        </div>
      </div>


    </div>
  );
};

LoginContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default LoginContainer;

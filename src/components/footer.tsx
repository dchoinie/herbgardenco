import React from "react";
import Container from "./container";
import { navItems } from "./header";
import { NavItem } from "../types/common";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary py-12">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-6 gap-12">
            {navItems
              .filter((item: NavItem) => item.name !== "account")
              .filter((item: NavItem) => item.name !== "cart")
              .map((item: NavItem) => (
                <Link to={item.path}>{item.display}</Link>
              ))}
          </div>
          <div className="flex gap-6 mb-6">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
          <div>
            <small>
              &copy; {`${new Date().getFullYear()}`} Herb Garden Co. All rights
              reserved.
            </small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

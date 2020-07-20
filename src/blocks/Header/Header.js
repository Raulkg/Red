import React from "react";
import styled from "@emotion/styled";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCircle,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const ImageContain = styled.img({
  width: "150px",
  height: "150px",
  padding: "5px",
  border: "1px solid rgba(0,0,0,.13)",
  background: "whitesmoke",
  borderRadius: "50%",
  margin: "5px 5px",
  color: "black",
  fontFamily: "Roboto",
  fontWeight: "200"
});

const Header = ({ img, linkedin, github, name, phone, location }) => {
  function myFunction(id) {
    const copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  return (
    <Container>
      <ImageContain src={img} />
      <div
        style={{
          position: "relative",
          top: "-156px",
          right: "-241px",
          marginRight: "10px",
          marginBottom: "-133px"
        }}
      >
        <p
          style={{
            fontSize: "32px"
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "16px"
          }}
        >
          <FontAwesomeIcon
            style={{
              color: "#ffffff"
            }}
            transform="shrink-10"
            size="2x"
            mask={faCircle}
            icon={faPhone}
          />
          <span
            style={{
              position: "relative",
              left: "10px",
              top: "-5px",
              marginRight: "20px"
            }}
          >
            {phone}
          </span>
          <FontAwesomeIcon
            style={{
              color: "#ffffff"
            }}
            transform="shrink-10"
            size="2x"
            mask={faCircle}
            icon={faMapMarkerAlt}
          />
          <span
            style={{
              position: "relative",
              left: "10px",
              top: "-5px",
              marginRight: "10px"
            }}
          >
            {location}
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Header;

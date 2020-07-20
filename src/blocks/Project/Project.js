import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import ReactWordcloud from "react-wordcloud";
import Container from "../Container/Container";
import Headline from "../Headline/Headline";

const Divider = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.13);
`;

const SubContainer = styled.div({
  width: "calc(100%-20px)",
  padding: "10px",
  border: "1px solid rgba(0,0,0,.13)",
  background: "whitesmoke",
  borderRadius: "8px",
  margin: "5px 5px",
  color: "black",
  fontFamily: "Roboto",
  fontWeight: "200"
});

const options = {
  colors: ["#f9f8ee", "#e6e7c8"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "Roboto",
  fontSizes: [10, 20],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

const words = [
  {
    text: "told",
    value: 64
  },
  {
    text: "mistake",
    value: 11
  }
];
const Project = ({ title, github, from, to }) => {
  return (
    <Container>
      <Headline>
        <FontAwesomeIcon
          style={{
            color: "#ffffff"
          }}
          transform="shrink-10"
          size="lg"
          mask={faCircle}
          icon={faToolbox}
        />
        &nbsp; {title}
      </Headline>
      <div
        style={{
          height: 100,
          width: 200,
          position: "relative",
          top: "-98px",
          right: "0px",
          float: "right",
          marginBottom: "-98px"
        }}
      >
        <ReactWordcloud options={options} words={words} />{" "}
      </div>
      <div
        style={{
          height: 50,
          width: 35,
          position: "relative",
          top: "-58px",
          right: "0px",
          float: "right",
          marginBottom: "-58px"
        }}
      >
        {github ? (
          <a href={github} target="_blank">
            <FontAwesomeIcon
              style={{
                color: "#ffffff"
              }}
              title="Github"
              transform="shrink-10"
              size="2x"
              mask={faCircle}
              icon={faCode}
            />
          </a>
        ) : (
          <p />
        )}
      </div>
      <div
        style={{
          height: 100,
          width: 250,
          position: "relative",
          top: "-67px",
          right: "25px",
          float: "right",
          marginBottom: "-98px",
          marginRight: "10px"
        }}
      >
        {from || to ? (
          <p>
            {" "}
            {from} &nbsp; - &nbsp; {to}
          </p>
        ) : (
          <p />
        )}
      </div>

      <SubContainer>
        <p css={theme => ({ color: theme.color })}>
          Used YouTube Data API and YouTube Iframe Player API to get the json
          data of captions from YouTube.{" "}
        </p>
      </SubContainer>
    </Container>
  );
};

export default Project;

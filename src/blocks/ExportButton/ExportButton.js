import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocalPacker,
  Document,
  Header,
  Footer,
  Packer,
  Paragraph,
  TextRun,
  SymbolRun,
  HeadingLevel
} from "docx";
import {
  faDownload,
  faCircle,
  faCode
} from "@fortawesome/free-solid-svg-icons";

const RedButton = styled.button({
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "4px",
  cursor: "pointer"
});

const ExportButton = ({ text }) => {
  const doc = new Document();
  let hasExperienceTitle = false;
  let hasEducationTitle = false;
  let hasSkillsTitle = false;
  let hasProjectsTitle = false;

  function processDoc() {
    let node = [];

    addEducation(
      node,
      "Big Data Software Engineer                       Siemens CT, New Jersey		            Mar 2017 – Present",
      ["I hae worked here"]
    );
    addExperience(
      node,
      "Big Data Software Engineer                       Siemens CT, New Jersey		            Mar 2017 – Present",
      ["I hae worked here"]
    );
    addExperience(
      node,
      "Big Data Software Engineer                       Siemens CT, New Jersey		            Mar 2017 – Feb2015",
      ["I hae worked here", "I hae worked here"]
    );
    addSkills(  node,                    "Languages: ",                    ["Java", "C","C++"]);
    addSkills(  node,                    "IDEs: ",                    ["Intellij", "Eclipse"]);

    addProject(node,"Closed Captions - YouTube -  Web Application , [MongoDB, jQuery, NodeJS]",["Used YouTube Data API and YouTube Iframe Player API to get the json data of captions from YouTube."])
    addProject(node,"Euphonium:     Scalable e-commerce web application, [JavaScript, AWS, Angular 2, Atom, Kong API, Ansible]",["Built a website that converts an uploaded PDF to speech(TTS) using Angular 2 and NodeJS.","Integrated Ansible on top of AWS for auto-scaling and load balancing of EC2 instances"])

    doc.addSection({
      headers: {
        default: new Header({
          children: [new Paragraph("Rahulkumar Gaddam ")]
        })
      },
      footers: {
        default: new Footer({
          children: [new Paragraph("Footer text")]
        })
      },
      children: node
    });

    Packer.toBlob(doc).then(b => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      let url = window.URL.createObjectURL(b);
      a.href = url;
      a.download = "rahul.docx";
      a.click();
      window.URL.revokeObjectURL(url);
      url = window.URL.createObjectURL(b);
    });
  }

  function addEducation(node, title, lines) {
     if(!hasEducationTitle){
      addResumeItemTitle(node, "Education");
      hasEducationTitle = true;
     }
    addResumeItem(node, title, lines);
  }

  function addExperience(node, title, lines) {
   if(!hasExperienceTitle){
    addResumeItemTitle(node, "Professional Experience");
    hasExperienceTitle = true;
   }
    addResumeItem(node, title, lines);
  }

  function addProject(node, title, lines) {
     if(!hasProjectsTitle){
      addResumeItemTitle(node, "Academic Projects");
      hasProjectsTitle = true;
     }
      addResumeItem(node, title, lines);
    }


      function addSkills(node, title, lines) {
         if(!hasSkillsTitle){
          addResumeItemTitle(node, "Technical Skills");
          hasSkillsTitle = true;
         }

        let formattedLines = [];
           //title added
           formattedLines.push(

           );
           formattedLines.push(
                 new TextRun({
                   text: title,
                   bold: true
                 }));
           // description added
           lines.map(e =>
             formattedLines.push(
               new TextRun({
                 text: e+", ",
                 bullet: {
                   level: 0
                 }
               })
             )
           );
          let line =  new Paragraph({
                         children: formattedLines,
                         spacing: {
                           before: 240,
                           after: 60
                         }
                       })
           node.push(line);

        }

  function addResumeItemTitle(node, title) {
    node.push(
      new Paragraph({
        children: [
          new TextRun({
            text: title,
            bold: true,
            allCaps: true
          })
        ],
        spacing: {
          before: 240,
          after: 60
        },
        border: {
          bottom: {
            color: "auto",
            space: 1,
            value: "single",
            size: 6
          }
        }
      })
    );
  }

  function addResumeItem(node, title, lines) {
    let formattedLines = [];
    //title added
    formattedLines.push(
      new Paragraph({
        children: [
          new TextRun({
            text: title,
            bold: true
          })
        ],
        spacing: {
          before: 240,
          after: 60
        }
      })
    );
    // description added
    lines.map(e =>
      formattedLines.push(
        new Paragraph({
          text: e,
          bullet: {
            level: 0
          }
        })
      )
    );

    node.push(...formattedLines);
  }

  return (
    <RedButton onClick={processDoc}>
      {" "}
      {text}{" "}
      <FontAwesomeIcon
        style={{
          color: "#ffffff",
          padding: "0px 10px"
        }}
        title="Github"
        transform="shrink-10"
        size="2x"
        mask={faCircle}
        icon={faDownload}
      />
    </RedButton>
  );
};

export default ExportButton;

import React from "react";
import styles from "./styles.module.css";

export { default as Project } from "./blocks/Project/Project";
export { default as Education } from "./blocks/Education/Education";
export { default as Experience } from "./blocks/Experience/Experience";
export { default as Header } from "./blocks/Header/Header";
export { default as ExportButton } from "./blocks/ExportButton/ExportButton";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

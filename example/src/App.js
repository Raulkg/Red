import React from "react";
import { ExportButton, Project, Education, Experience, Header } from "red";
import "red/dist/index.css";

const App = () => {
  return (
    <div>
      <ExportButton text="Rahul"></ExportButton>
      <Header
        name="Rahulkumar Gaddam"
        github="gitt"
        linkedin="linkedin"
        phone="3154207439"
        location="Princeto,NJ"
      />
      <Experience title="Siemens" from="August 2017" to="July 2017">
        {" "}
      </Experience>
      <Experience title="Euphony" from="August 2017" to="July 2017">
        {" "}
      </Experience>
      <Education title="Syracuse University" from="August 2017" to="July 2017">
        {" "}
      </Education>
      <Education title="Osmania University" from="August 2017" to="July 2017">
        {" "}
      </Education>
      <Project
        title="Closed Captions - YouTube -  Web Application "
        github="http://github.com"
        from="August 2017"
        to="July 2017"
      />
    </div>
  );
};

export default App;

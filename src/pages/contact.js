import React from "react";
import SEO from "../components/seo";

import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <p>
        For any quick questions, contact me on{" "}
        <a href="https://twitter.com/tanishaaa03">twitter</a>.
      </p>
      <br />
      <p>
        You can reach me out at{" "}
        <a href="mailto:tanisha031199@gmail.com">tanisha031199@gmail.com</a> for
        any clarifications or official work. If you want to contribute to this
        project, have a look at my{" "}
        <a href="https://github.com/tanisha03/a11y-friendly">github</a>.
      </p>
    </Layout>
  );
};

export default Contact;

import React from "react";
import SEO from "../components/seo";

import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <p>
        Hey there, fellow a11y enthusiast !!! I am{" "}
        <a href="https://twitter.com/tanishaaa03">Tanisha Sabherwal</a>. It is
        great to have you onboard in this journey. If you're not sure, what is
        a11y, go check it out{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
          here
        </a>
        . I hope you're also trying to make web a better place for all by making
        it super accessible. Here is my little effort to do the same.
      </p>
      <br />
      <p>
        Accessibility is an often ignored topic when it comes to development. We
        fail to realize its impact and how great an affect it causes to any
        business out there. It is not just limited to people with physical
        disabilities rather it also incorporates{" "}
        <a href="https://userway.org/blog/how-situational-disabilities-impact-us-all">
          situational impairment
        </a>
        . Hence, it is extremely essential for us to develop things that can
        seamlessly interact with all our users. Remember, the web itself is
        accessible, it is our way of doing certain things that breaks this
        accessibility.
      </p>
      <br />
      <h3>
        The next time you think of writing a cleaner code, make it sure to think
        of writing an "accessible" code as well.
      </h3>
    </Layout>
  );
};

export default About;

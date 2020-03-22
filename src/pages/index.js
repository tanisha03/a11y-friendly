import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";

const IndexPage = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
            }
          }
        }
      }
    `
  );
  console.log(posts);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      {posts.allMdx.nodes.map(p => (
        <pre>{JSON.stringify(p, null, 2)}</pre>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
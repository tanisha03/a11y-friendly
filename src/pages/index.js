import React from "react";

import Layout from "../components/layout";
// import Image from "../components/image";
import Post from "../components/posts";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";

const IndexPage = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              title
              date
              path
            }
            excerpt
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Home" />
      {/* <p>Welcome to new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
      {/* </div> */}
      {posts.allMdx.nodes.map(p => (
        <Post
          title={p.frontmatter.title}
          path={p.frontmatter.path}
          date={p.frontmatter.date}
          description={p.excerpt}
        />
        // <pre>{JSON.stringify(p, null, 2)}</pre>
      ))}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default IndexPage;

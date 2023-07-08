import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <h1>Hello Internet</h1>
      <Bio />
      <div>
	<p>Perhaps you're here to view my <a href="resume.pdf">resume</a>.</p>
      </div>
      <div>
        <p>While you're here, check out the <a href="blog/">blog</a>.</p>
      </div>
    </Layout>
  );
};

export default HomeIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

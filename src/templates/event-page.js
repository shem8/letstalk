import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>event page</div>
  );
}

// export const pageQuery = graphql`
//   query EventByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//       }
//     }
//   }
// `;

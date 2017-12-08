import React from 'react';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import EventCard from '../components/EventCard'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section class="section">
        <div className="columns">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <div className="column is-8 hero is-fullheight">
            <div className="hero is-danger is-bold is-small promo-block">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                     Open Events
                  </h1>
                </div>
              </div>
            </div>
            {posts.filter(post => post.node.frontmatter.templateKey === 'event-page').map(({ node: post }) => {
              return <EventCard event={post}/>;
            })}
          </div>
          <div className="column is-4 hero">
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            subtitle
            location
            deadline(formatString: "MMMM DD, YYYY")
            expenses
            expenses_desc
            event_link
            cfp_link
            twitter
            facebook
          }
        }
      }
    }
  }
`;

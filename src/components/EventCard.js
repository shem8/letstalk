import React from 'react';
import Link from 'gatsby-link';

const EventCard = ({ event }) => (
  <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={event.id}>
    <p>
      <Link className="has-text-primary" to={event.frontmatter.path}>
        {event.frontmatter.title}
      </Link>
      <span> &bull; </span>
      <small>{event.frontmatter.date}</small>
    </p>
    <p>
      {event.excerpt}
      <br />
      <br />
      <Link className="button is-small" to={event.frontmatter.path}>
        Keep Reading →
      </Link>
    </p>
  </div>
);

export default EventCard;

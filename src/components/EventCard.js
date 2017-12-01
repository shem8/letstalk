import React from 'react';
import Link from 'gatsby-link';

const EventCard = ({ event }) => (
  <Link to={event.frontmatter.path}>
  <div className="card" key={event.id}>
    <div className="card-content">
      <div className="card-header">
        <div className="card-header-title">
          <p class="title">
              {event.frontmatter.title}
            <span> &bull; </span>
            <small>{event.frontmatter.date}</small>
          </p>
          <p class="subtitle">
            {event.frontmatter.subtitle}
          </p>
          <p class="location">
            {event.frontmatter.location}
          </p>
        </div>
        <div className="card-header-dates">
          <p className="card-header-dates-event">
            Event date: {event.frontmatter.date}
          </p>
          <p className="card-header-dates-cfp">
            CFP deadline: {event.frontmatter.deadline}
          </p>
        </div>
      </div>
      <p>
        {event.excerpt}
        <br/>
        <a class="button is-primary" href={event.frontmatter.cfp_link}>
         Submit
        </a>
        <a class="button is-info" href={event.frontmatter.event_link}>
         Event homepage
        </a>
        <a class="button is-small" href={event.frontmatter.facebook}>
         Facebook
        </a>
        <a class="button is-small" href={event.frontmatter.twitter}>
         Twitter
        </a>
      </p>
    </div>
  </div>
  </Link>
);

export default EventCard;


  // - {label: "Travel expenses", name: "expenses", widget: "boolean"}
  // - {label: "Travel expenses description", name: "expenses_desc", widget: "text"}

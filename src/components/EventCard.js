import React from 'react';
import Link from 'gatsby-link';
import './EventCard.sass';

const EventCard = ({ event }) => (
  <Link to={event.frontmatter.path}>
    <div className="card" key={event.id}>
      <div className="card-content">
        <div className="level-top level">
          <div className="level-left">
            <div>
              <h1 className="title">
                {event.frontmatter.title}
              </h1>
              <h2 className="subtitle">
                {event.frontmatter.subtitle}
              </h2>
            </div>
          </div>
          <div className="level-right">
            <div>
              <div className="date-event">
                <span className="icon">
                  <i className="fa fa-home"></i>
                </span>
                {event.frontmatter.date}
              </div>
              <p className="date-cfp">
                {event.frontmatter.deadline}
              </p>
              <p className="location">
                {event.frontmatter.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer event-card-footer">
        <a className="button is-primary" href={event.frontmatter.cfp_link}>
         Submit
        </a>
      </div>
    </div>
  </Link>
);

export default EventCard;

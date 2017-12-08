import React from 'react';
import Link from 'gatsby-link';
import './EventCard.sass';

const EventCard = ({ event }) => (
    <div className="card article" key={event.id}>
      <div className="card-content">
        <div className="columns">
          <div className="column is-two-thirds">
            <div>
              <h1 className="title">
                {event.frontmatter.title}
              </h1>
              <h2 className="subtitle">
                {event.frontmatter.subtitle}
              </h2>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="date-event">
                <span className="icon">
                  <i className="fa fa-calendar-o"></i>
                </span>
                {event.frontmatter.date}
              </p>
              <p className="date-cfp">
                <span className="icon">
                  <i className="fa fa-file-text-o"></i>
                </span>
                {event.frontmatter.deadline}
              </p>
              <p className="location">
                <span className="icon">
                  <i className="fa fa-map-marker"></i>
                </span>
                {event.frontmatter.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer event-card-footer level">
        <Link to={event.frontmatter.path} className="button is-link level-left">
          More info >
        </Link>
        <a className="button is-primary level-right" href={event.frontmatter.cfp_link} target="_blank">
         Submit
        </a>
      </div>
    </div>
);

export default EventCard;

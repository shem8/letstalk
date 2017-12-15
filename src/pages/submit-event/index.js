import React from 'react';

const SubmitEvent = ({ active }) => (
  <form className="section" name="submit-event" netlify>
    <div className="field">
      <label className="label">Event Title</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">Subtitle</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">Event description</label>
      <div className="control">
        <textarea className="textarea"></textarea>
      </div>
    </div>

    <div className="field">
      <label className="label">Event date</label>
      <div className="control">
        <input className="input" type="date"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">CFP deadline</label>
      <div className="control">
        <input className="input" type="date"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">Location</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox"/> Travel expenses
        </label>
      </div>
    </div>

    <div className="field">
      <label className="label">Travel expenses cover</label>
      <div className="control">
        <textarea className="textarea" rows="2"></textarea>
      </div>
    </div>

    <div className="field">
      <label className="label">Event link</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">CFP link</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">Twitter link</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <label className="label">Facebook page</label>
      <div className="control">
        <input className="input" type="text"></input>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link" type="submit">Submit</button>
      </div>
    </div>
  </form>
);

export default SubmitEvent;

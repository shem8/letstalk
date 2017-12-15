import React from 'react';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class SubmitEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

render() {
  return (
      <form
        className="section"
        name="submit-event"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}>

        <label hidden>
          Don’t fill this out: <input name="bot-field" />
        </label>
        <div className="field">
          <label className="label">Event Title</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Subtitle</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Event description</label>
          <div className="control">
            <textarea className="textarea" onChange={this.handleChange}></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Event date</label>
          <div className="control">
            <input className="input" type="date" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">CFP deadline</label>
          <div className="control">
            <input className="input" type="date" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" onChange={this.handleChange}/> Travel expenses
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label">Travel expenses cover</label>
          <div className="control">
            <textarea className="textarea" rows="2" onChange={this.handleChange}></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Event link</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">CFP link</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Twitter link</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Facebook page</label>
          <div className="control">
            <input className="input" type="text" onChange={this.handleChange}></input>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link" type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

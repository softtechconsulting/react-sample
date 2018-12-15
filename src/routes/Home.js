import React, { Component } from "react";

export default class Home extends Component<PropType> {
  render() {
    return (
      <div>
        <h1>Front End Task</h1>
        <p>
          Please create the user interface components and logic to allow users
          to edit the Person information displayed on /people using the PersonService.
        </p>
        <p>
          The PersonService API is as follows:
          <br /><code>PersonService.findAll()</code>
          <br /><code>PersonService.update(personObject)</code>
        </p>
      </div>
    );
  }
}

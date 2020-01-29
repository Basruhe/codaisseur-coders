// Add a Developer component which displays a single developer (say, their name and email address).
//Loop over the developers and use this new component to display each one of them. console.log(this.props.dev) first to check what you are getting as props from the store.

import React, { Component } from "react";

export default class Developer extends Component {
  render() {
    console.log("Logging the props: ", this.props.singleDeveloper);
    // console.log("devItem name: ", this.props.devItem.name);
    return (
      // note: should add ID to the div as well.
      <div>
        <h2>{this.props.singleDeveloper.name}</h2>
        <h2>{this.props.singleDeveloper.email}</h2>
      </div>

      // const devs = this.props
      // console.log(this.props.devs.count)
      // console.log(this.props.devs)
      // console.log(this.props.devs);
    );
  }
  // console.log (this.props.rows)
  // console.log(this.props.devs)
}

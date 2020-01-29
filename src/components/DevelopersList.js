// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from "./Developer";
import { developersFetched } from "../store/developers/actions";
import actions from "../store/developers/actions";
// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    api("/developers").then(data => {
      // Tell the Redux store the data has been fetched
      const action = developersFetched(data);
      console.log(action);
      this.props.dispatch(action);
      // // below is the old version of the dispatch
      // this.props.dispatch({
      //   type: "developers/FETCHED",
      //   payload: data
      // });
    });
  }

  //important: use names that are useful and consistent. In this case: full data: call it 'list'. one mapped element: call it 'element', or in this case 'single'. For the parameter, use 'item'? Need to work on a consistent system. (maybe always 'element' for parameter, 'item' for single mapped things?)
  devList = developerlist => {
    return developerlist.map(
      devItem => (
        console.log("Logging the devItem", devItem),
        (<Developer singleDeveloper={devItem} />)
      )
    );
  };
  // see different solution at https://github.com/Codaisseur/course-content-exercises/tree/master/coders-network/src/components

  render() {
    const loading = !this.props.devs;

    // cleaner: if (!data) { <p>loading..<p> } else {}
    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>
            {/* <p>This is the list of developers: {devList(Developer)}</p> */}
            {this.devList(this.props.devs.rows)}
          </div>
        )}
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);

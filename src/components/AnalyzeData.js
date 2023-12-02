import axios from "axios";
import React from "react";
class AnalyzeData extends React.Component {
  state = {
    clinicalData: [],
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/clinicalservices/api/patient/analyze/" +
          this.props.match.params.patientId
      )
      .then((resp) => this.setState(resp.data))
      // .then((data) => {
      //   this.setState({ clinicalData: data });
      // })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  render() {
    return (
      <div>
        <h2>Analyze:</h2>
        <b>First Name: </b> {this.state.firstName} <b>Last Name: </b>
        {this.state.lastName}
        <br />
        <b>Age:</b> {this.state.age}
        <table align="center">
          <thead>
            <tr>
              <th>Component Name</th>
              <th>ComponentValue</th>
              <th>Measured Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.clinicalData.map((eachEntry) => (
              <RowCreator
                key={eachEntry.Id}
                item={eachEntry}
                patientId={this.state.Id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class RowCreator extends React.Component {
  render() {
    var eachEntry = this.props.item;
    return (
      <tr key={eachEntry.Id}>
        <td>{eachEntry.componentName}</td>
        <td>{eachEntry.componentValue}</td>
        <td>{eachEntry.measuredDateTime}</td>
      </tr>
    );
  }
}

export default AnalyzeData;

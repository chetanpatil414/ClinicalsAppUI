import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    patientData: [],
  };

  componentDidMount() {
    // Fetch data or perform any asynchronous operations here
    fetch("http://localhost:8080/clinicalservices/api/Allpatient")
      .then((response) => response.json())
      .then((data) => {
        // Handle the data here
        this.setState({ patientData: data }); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Patient:</h2>
        <table align="center">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.patientData.map((patient) => (
              <RowCreator key={patient.id} item={patient} />
            ))}
          </tbody>
        </table>
        <br />
        <Link to={"/addPatient"}>
          <font size="5">Register Patient</font>
        </Link>
      </div>
    );
  }
}

class RowCreator extends React.Component {
  render() {
    var patient = this.props.item;
    return (
      <tr key={patient.id}>
        <td>{patient.id}</td>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.age}</td>
        <td>
          <Link to={"/patientDetails/" + patient.id}>Add data</Link>
        </td>
        <td>
          <Link to={"/analyze/" + patient.id}>Analyze</Link>
        </td>
      </tr>
    );
  }
}

export default Home;

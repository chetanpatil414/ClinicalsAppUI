import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
class CollectClinicals extends React.Component {
  state = {};
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/clinicalservices/api/patients/" +
          this.props.match.params.patientId
      )
      .then((resp) => {
        this.setState(resp.data);
      });
  }

  handleSubmit(event) {
    const data = {
      patientId: this.props.match.params.patientId,
      componentName: this.componentName,
      componentValue: this.componentValue,
    };
    event.preventDefault();
    axios
      .post("http://localhost:8080/clinicalservices/api/saveClinicalData", data)
      .then((resp) =>
        toast("Patient Data Saved Successfully", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      );
  }
  render() {
    return (
      <div>
        <h2>Patient Details:</h2>
        <b>First Name: </b>
        {this.state.firstName} <b>Last Name:</b> {this.state.lastName}
        <br />
        <b> Age:</b> {this.state.age}
        <h2>Patient Clinical Data:</h2>
        <form>
          <select
            onChange={(event) => (this.componentName = event.target.value)}
          >
            <option>Select One </option>
            <option value={"bp"}>Blood Pressure(Sys/Dys)</option>
            <option value={"hw"}>Height/weight</option>
            <option value={"heartRate"}>Heart Rate</option>
          </select>
          Value:
          <input
            type="text"
            name="componentValue"
            onChange={(event) => (this.componentValue = event.target.value)}
          />
          <button onClick={(event) => this.handleSubmit(event)}>Confirm</button>
        </form>
      </div>
    );
  }
}

export default CollectClinicals;

import React from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// toast.configure();
class AddPatient extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };

    axios
      .post("http://localhost:8080/clinicalservices/api/savePatient", data)
      .then((resp) => {
        toast("Patient Added Successfully", {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Add Patient:</h2>
        <form>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={(event) => (this.firstName = event.target.value)}
          />
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={(event) => (this.lastName = event.target.value)}
          />
          Age:
          <input
            type="text"
            name="age"
            onChange={(event) => (this.age = event.target.value)}
          />
          <button onClick={(event) => this.handleSubmit(event)}>Confirm</button>
        </form>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default AddPatient;

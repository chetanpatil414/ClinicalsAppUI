import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ClinicalCollection from "./components/CollectClinicals";
import AddPatient from "./components/AddPatient";
import AnalyzeData from "./components/AnalyzeData";
import ChartGenerator from "./components/ChartGenerator";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/patientDetails/:patientId"
            component={ClinicalCollection}
          />
          <Route exact path="/addPatient" component={AddPatient} />
          <Route exact path="/analyze/:patientId" component={AnalyzeData} />
          <Route
            exact
            path="/chart/:componentName/:patientId"
            component={ChartGenerator}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import * as React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PersonService from "../services/PersonService";

const columns = [
  {
    dataField: "id",
    text: "Person ID"
  },
  {
    dataField: "name.last",
    text: "Last Name"
  },
  {
    dataField: "name.first",
    text: "First Name"
  },
  {
    dataField: "eyeColor",
    text: "Eye Color"
  },
  {
    dataField: "email",
    text: "Email"
  },
  {
    dataField: "address",
    text: "Address"
  }
];

const data = PersonService.findAll();

export default class PeopleViewer extends React.Component {
  render() {
    return <BootstrapTable keyField="id" data={data} columns={columns} bootstrap4={true}/>;
  }
}

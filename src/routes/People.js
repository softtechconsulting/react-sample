import React, { Component } from "react";
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

export default class PeopleViewer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const data = await PersonService.findAll();
    console.warn('got data length '+data.length)
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    if (!data) return null;

    return (
      <BootstrapTable keyField="id" data={data} columns={columns} bootstrap4={true} />
    );
  }
}

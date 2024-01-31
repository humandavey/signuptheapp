import { useEffect, useState } from "react";
import { getNum } from "../firebase";
import Header from "../components/Header";
import { Button, Table } from "react-bootstrap";


export default () => {

  return (
    <>
      <Header />
      
      <div className="signup-table">
        <h2 style={{color: "white"}}>Your sign ups...</h2>
        <Table
          bordered
          hover
          striped
        >
          <thead>
            <tr>
              <td>Name</td>
              <td>Slots Filled</td>
              <td># of Questions</td>
              <td>Expiration</td>
              <td>Settings</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Davey</td>
              <td>5/58</td>
              <td>12</td>
              <td>2/6/2024</td>
              <td>
                <Button style={{margin: "0.125rem"}}>✎</Button>
                <Button style={{margin: "0.125rem"}}>📄</Button>
                <Button style={{margin: "0.125rem"}}>🔗</Button>
                <Button style={{margin: "0.125rem"}}>✖</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

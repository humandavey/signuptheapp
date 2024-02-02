import { useEffect, useState } from "react";
import { getNum } from "../firebase";
import Header from "../components/Header";
import { Button, Table } from "react-bootstrap";


export default () => {

  return (
    <>
      <Header />
      
      <div className="signup-table" style = {{backgroundColor: "#b7b7b7ff"}}>
        <h2 style={{color: "white", position: "center-align"}} >Writing Center Sign Up</h2>
        <Table
          bordered
          hover
          striped
        >
          <thead>
            <tr>
              <td>Name</td>
              <td>Date</td>
              <td>Time</td>
              <td>Expiration</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Davey_Is_An_Alien</td>
              <td>9/11</td>
              <td>2:35 AM</td>
              <td>1/2/2050</td>
              <td>
                <Button style={{margin: "0.5rem auto"}}>Sign Up</Button>
                
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

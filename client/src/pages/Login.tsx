import Header from "../components/Header";
import { InputGroup, Button, Form } from "react-bootstrap";


export default () => {

  return (
    <>
      <Header />

      <div className="login-container" style={{width: "20%", margin: "3em auto"}}>
        <div style={{textAlign: "center"}}>
            <h3 style={{color: "white"}}>Login</h3>
            <InputGroup style={{marginTop: ".5em"}}>
                <Form.Control 
                    placeholder="Email Address..."
                />
            </InputGroup>
            <InputGroup style={{marginTop: ".5em"}}>
                <Form.Control 
                    placeholder="Password..."
                />
            </InputGroup>
            <InputGroup style={{marginTop: ".5em"}}>
                <Button style={{width: "100%"}}>Login</Button>
            </InputGroup>
        </div>
        <a href="" style={{color: "white"}}>No account? Click to sign up!</a>
      </div>
    </>
  );
};

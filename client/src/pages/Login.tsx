import Header from "../components/Header";
import { InputGroup, Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const onButtonClick = () => {

    }
  };
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
                    onChange={(ev) => setEmail(ev.target.value)}

                />

            </InputGroup>
            <InputGroup style={{marginTop: ".5em"}}>
                <Form.Control 
                    placeholder="Password..."
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </InputGroup>

            <label className="errorLabel">{passwordError}</label>

            <InputGroup style={{marginTop: ".5em"}}>
                <Button style={{width: "100%"}}>Login</Button>
            </InputGroup>
        </div>
        <a href="" style={{color: "white"}}>No account? Click to sign up!</a>
      </div>
    </>
  );
};


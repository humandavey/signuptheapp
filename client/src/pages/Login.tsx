import Header from "../components/Header";
import { InputGroup, Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
    const navigate = useNavigate()
    const onButtonClick = () => {
      if ('' === email) {
        setEmailError('Please enter your email')
        return
      }
    
      if ("!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/".test(email)) {
        setEmailError('Please enter a valid email')
        return
      }

      if("^[0-9]".test(password)){
        setPasswordError('Please include a number in your password')
        return
      }
    
      if ('' === password) {
        setPasswordError('Please enter a password')
        return
      }
    
      if (password.length < 7) {
        setPasswordError('The password must be 8 characters or longer')
        return
      }
    
    }

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
              <label className="emailerrorLabel">{emailError}</label>
            </InputGroup>
            <InputGroup style={{marginTop: ".5em"}}>
                <Form.Control 
                    placeholder="Password..."
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </InputGroup>

            <label className="passworderrorLabel">{passwordError}</label>

            <InputGroup style={{marginTop: ".5em"}}>
                <Button style={{width: "100%"}} onClick={() => onButtonClick()}>Login</Button>
            </InputGroup>
        </div>
        <a href="" style={{color: "white"}}>No account? Click to sign up!</a>
      </div>
    </>
  );
};


import { Button } from "react-bootstrap";
import logo from '../imgs/icon.png';
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="header">
            <img className="logo-icon" src={logo} alt="" onClick={() => navigate("/")}/>
            <div style={{margin: "auto 0"}}>
                <h1 className="title-text" onClick={() => navigate("/")}>Sign Up Tech</h1>
            </div>
            <div style={{display: "flex"}}>
                <Button className="login-btn" onClick={() => navigate("/login")}>Login</Button>
            </div>
        </div>
        </>
    );
};

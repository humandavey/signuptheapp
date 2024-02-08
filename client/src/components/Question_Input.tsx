import { InputGroup, Button, Form } from "react-bootstrap";
export default () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>What is your favorite color?</h1>
        
                <InputGroup style={{marginTop: ".5em"}}>
                    <Form.Control 
                        placeholder="Enter your answer here"></Form.Control>
                </InputGroup>
            
            </div>
            
        

        </>
    );
};

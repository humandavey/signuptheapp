import { InputGroup, Button, Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>What is your favorite color?</h1>
        
    
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Blue</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Red</Dropdown.Item>
                </DropdownButton>
                    
            </div>          
        </>
    );
};

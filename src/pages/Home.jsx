import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div >
        <h1>Light Control</h1>
        <div className="divButton">
            <Link to="/auto">
                <Button className="buttonCtrl">Automatic</Button>
            </Link>
            <Link to="/manual">
                <Button className="buttonCtrl">Manual</Button>
            </Link>
        </div>
        </div>
    );
}
export default Home

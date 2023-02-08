import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div >
        <h1>Light Control</h1>
        <div className="divButton">
            <Link to="/auto">
                <Button className="buttonCtrl">automatic</Button>
            </Link>
            {/* <Link to="/auto">
            <img src="https://i.ibb.co/ySzJWH5/auto.png" className="imgAuto"/>
            </Link> */}
            <Button className="buttonCtrl">Manual</Button>
        </div>
        </div>
    );
}
export default Home

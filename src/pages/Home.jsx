import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState(undefined)
    function manageMode(mode) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: mode
          }),
        };
        fetch("https://ecourse.cpe.ku.ac.th/exceed13/lights/mode", requestOptions)
          .then((response) => response.json())
          .then((data) => setData({ postId: data.id }));
      }
    return (
        <div >
        <h1>Light Control</h1>
        <div className="divButton">
            <Link to="/auto">
                <Button className="buttonCtrl" onClick={() => {
                manageMode("auto");
              }}>Automatic</Button>
            </Link>
            <Link to="/manual">
                <Button className="buttonCtrl" onClick={() => {
                manageMode("manual");
              }} >Manual</Button>
            </Link>
        </div>
        </div>
    );
}
export default Home

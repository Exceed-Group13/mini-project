import React, { useEffect, useState } from "react";
import { MaterialUISwitch } from "./MaterialUISwitch";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import MaterialUISlide from './MaterialUISlide'
import CustomizedSlider from './MaterialUISlide'
// import { Link } from 'react-router-dom'
// import '/App.css'

const Controller = (props) => {
  const [controller, setController] = useState(false);

  function manageSwitch(room, state) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: !state,
        room: room,
      }),
    };

    fetch("https://ecourse.cpe.ku.ac.th/exceed13/light/control", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  function manageDim(room, dim) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        light: dim,
        room: room,
      }),
    };
    fetch("https://ecourse.cpe.ku.ac.th/exceed13/dim", requestOptions)
      .then((response) => response.json())
      .then((data) => setController({ postId: data.id }));
  }

  useEffect(() => {
    if (props.data) {
      setController(props.data.state);
      console.log("data", props.data.state);
    }
  }, [props.data]);

  useEffect(() => {
    console.log(controller);
  }, [controller]);

  function manageCheckBox(led, ev) {
    if (ev.target.checked) {
      // console.log(ev.target.value)
      return true;
    } else {
      // console.log(led,"close")
      return false;
    }
  }
  console.log(props);
  return (
    <div className="component">
      <div className="room1">
        <div className="Bedroom">
          <br />
          <h1>{props.Name}</h1>
          <br />
          <br />

          <br />
          <div>
            <span style={{ fontSize: "40px" }}>OFF</span>
            <MaterialUISwitch
              checked={controller}
              onChange={() => {
                manageSwitch(props.data.room, controller);
              }}
            />
            <span style={{ fontSize: "40px" }}>ON</span>
          </div>
          <div>
            <Box sx={{ width: 320 }}>
              <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Tooltip value label</Typography>
              <Slider
                className="slide"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  manageDim(props.data.room, e.target.value);
                }}

                aria-label="custom thumb label"
                defaultValue={20}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;

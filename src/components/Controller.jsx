import React , { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import '/App.css'

const Controller = (props) => {
    const [controller, setController] = useState(false)

    function manageSwitch(room, state) {
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "state": !state,
            "room": room
        })
    };
    fetch('https://ecourse.cpe.ku.ac.th/exceed13/light/control', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    }

    function manageDim(room, dim) {
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "light": dim,
            "room": room
        })
    };
    fetch('https://ecourse.cpe.ku.ac.th/exceed13/dim', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    }

    useEffect(() => {
        if (props.data) {
            setController(props.data.state)
            console.log('data',props.data.state)
        }
    } , [props.data])

    useEffect(() => {
        console.log(controller)
    },[controller])

    function manageCheckBox(led,ev) {
        if (ev.target.checked) {
            // console.log(ev.target.value)
            return true
        }else {
            // console.log(led,"close")
            return false
        }

    }
	return (
		<div className="component">
            <div className="room1">
                <div className="Bedroom">
                    <br/>
                    <h1 >{props.Name}</h1>
                    <br/>
                    <div className="form-switch">
                    <h2 className='off'>OFF</h2>
                    <div className='box'>
                        <input className="form-check-input" type="checkbox" checked={controller} onChange={(e) => manageSwitch(props.data.room, props.data.state)}/>
                    </div>
                    <h2 className='on'>ON</h2>
                    </div>
                    <div className="range">
                        <input type="range" className="form-range" id="customRange1" disabled={!controller} min="0" max="255" onChange={(e) => manageDim(props.data.room, e.target.value)}></input>
                    </div>
                </div> 
            </div>
        </div>
	)
}

export default Controller
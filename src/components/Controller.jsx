import React from 'react'
// import { Link } from 'react-router-dom'
// import '/App.css'

const Controller = (pros) => {
console.log(pros)
	return (
		<div className="component">
            <div className="room1">
                <div className="Bedroom">
                    <br/>
                    <h1 >{pros.Name}</h1>
                    <br/>
                    <h2>OFF</h2>
                    <br/>
                    <h2>ON</h2>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                    </div> 
                    <div className="range">
                        <input type="range" class="form-range" id="customRange1"></input>
                    </div>
                </div> 
            </div>
        </div>
	)
}

export default Controller
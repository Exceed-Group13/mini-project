import React , { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import '/App.css'

const Controller = (props) => {
    const [controller, setController] = useState(false)


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
                        <input className="form-check-input" type="checkbox" checked={controller} onChange={(e) => setController(e.target.checked)}/>
                    </div>
                    <h2 className='on'>ON</h2>
                    </div>
                    <div className="range">
                        <input type="range" className="form-range" id="customRange1" disabled={!controller} min="0" max="255"></input>
                    </div>
                </div> 
            </div>
        </div>
	)
}

export default Controller
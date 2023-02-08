import React , { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import '/App.css'

const Controller = (props) => {
    
    console.log(props)
    useEffect(()=>{
        setInterval(() => {
            console.log("Tick!")
        },1000)
    },[])


    function manageCheckBox(led,ev) {
        if (ev.target.checked) {
            console.log(ev.target.value)
        }else {
            console.log(led,"close")
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
                        <input className="form-check-input" type="checkbox" value={`${props.led} open`} onChange={(ev) => manageCheckBox(props.led, ev)}/>
                    </div>
                    <h2 className='on'>ON</h2>
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
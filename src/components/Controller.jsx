import React , { useEffect } from 'react'
import MaterialUISlide from './MaterialUISlide'
import CustomizedSlider from './MaterialUISlide'
import { MaterialUISwitch } from './MaterialUISwitch'
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
                    <br/>


                    <br/>
                    <div>
                        <span style={{fontSize:"40px"}}>OFF</span>
                        <MaterialUISwitch/>
                        <span style={{fontSize:"40px"}}>ON</span>
                    </div>
                    <div>
                    <MaterialUISlide/>
                    </div>
                </div> 
            </div>
        </div>
	)
}

export default Controller
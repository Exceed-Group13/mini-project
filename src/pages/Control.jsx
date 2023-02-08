import React, { useState, useEffect } from 'react'
// import '../styles/Home.css'
// import { useState } from 'react'
import Controller from '../components/Controller'

const Control = () => {
  // เริ่มต้นเราจะให้ข้อมูล state ของ places เริ่มต้นเป็นข้อมูล sample ที่เตรียมมาโดยใส่ไปใน argument ของ useState ซึ่งเป็นการตั้งค่า default ของ state นั้นๆ
//   const [controls, setControls] = useState(0)
    const [data, setData] = useState(undefined)
    const URL = "https://ecourse.cpe.ku.ac.th/exceed13/lights"

    useEffect(()=>{
      // const timer = setInterval(() => {
      //     fetch(URL).then((response) => response.json()).then((response) => {
      //       console.log('result',response.result !== data)
      //       // if(response.result !== data){
      //         setData(response.result); 
      //       // }
      //       console.log(data)
      //     })
      
      //   },1000)
      //   return () => clearInterval(timer)
      fetch(URL).then((response) => response.json()).then((response) => {
        // console.log('result',response.result !== data)
        // if(response.result !== data){
          setData(response.result); 
        // }
        // console.log(data)
      })
    })

//   useEffect(() => {
//     getPlaces().then(data => setPlaces(data))
//   }, [])

  return data && (
    <div className='container'>
        <Controller Name='Bedroom' led={"led1"} data={data[0]}/>
        <Controller Name='Kitchen' led={"led2"} data={data[1]}/>
        <Controller Name='Lounge' led={"led3"} data={data[2]}/>
    </div>

  )
}

export default Control
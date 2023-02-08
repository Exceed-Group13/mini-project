import React from 'react'
// import '../styles/Home.css'
// import { useState } from 'react'
import Controller from '../components/Controller'

const Control = () => {
  // เริ่มต้นเราจะให้ข้อมูล state ของ places เริ่มต้นเป็นข้อมูล sample ที่เตรียมมาโดยใส่ไปใน argument ของ useState ซึ่งเป็นการตั้งค่า default ของ state นั้นๆ
//   const [controls, setControls] = useState(0)


//   useEffect(() => {
//     getPlaces().then(data => setPlaces(data))
//   }, [])

  return (
    <div className='container'>
        <Controller Name='Bedroom' led={"led1"}/>
        <Controller Name='Kitchen' led={"led2"}/>
        <Controller Name='Louge' led={"led3"}/>
    </div>

  )
}

export default Control
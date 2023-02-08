import React, { useEffect } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import FoodBanner from '../components/FoodBanner'
import banner from '../assets/food-banner.webp'
import '../styles/Home.css'
import { useState } from 'react'
import { getPlaces } from '../services/places'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Control = () => {
  // เริ่มต้นเราจะให้ข้อมูล state ของ places เริ่มต้นเป็นข้อมูล sample ที่เตรียมมาโดยใส่ไปใน argument ของ useState ซึ่งเป็นการตั้งค่า default ของ state นั้นๆ
  const [places, setPlaces] = useState(sampleData)


  useEffect(() => {
    getPlaces().then(data => setPlaces(data))
  }, [])
  return (
    <div className='home-container'>
      <FoodBanner image={banner} />
      <CategoryPanel />
      <div className="home-page-content">
        <div className="content-header">
          <h2>ร้านแนะนำสุดๆ</h2>
          <Link to='/addplace'><Button name="เพิ่มร้าน" /></Link>
        </div>

        {/* TODO: เอาข้อมูลร้านต่างๆมาแสดงในรูปแบบของ Component <Card /> ที่สร้างไว้ */}
        {places.map(place => <Card {...place} />)}
      </div>
    </div>
  )
}

export default Control
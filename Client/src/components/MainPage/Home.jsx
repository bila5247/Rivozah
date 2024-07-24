import React from "react"
// import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import UpdateBanner from "./bannerupdate"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container-fluid d_flex'>
          {/* <Categories /> */}
          <SliderHome />
          {/* <UpdateBanner/> */}
        </div>
      </section>
    </>
  )
}
export default Home

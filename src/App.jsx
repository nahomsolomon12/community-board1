import React, {useState} from 'react'
import myImage from './assets/logo.avif'
import './App.css'
import Cards from './components/Cards'


//Card Images
import sign from './assets/mary.jpg'
import mini from './assets/light-and-prayer.jpg'
import teams from './assets/mary.jpg'
import priest from './assets/priest.jpg'
import faq from './assets/faq.jpg'
import test from './assets/prayer.jpg'
import start from './assets/video.jpg'
import teen from './assets/kids.jpg'
import food from './assets/food.jpg'
import meet from './assets/kids-1.jpg'


function App(card) {

  return (
    <>
     <title>2025 Winter Conference</title>
      <h1 className='major-header'>
        <img src={myImage} alt='OTYD-Logo'/> Winter Conference 2025
      </h1>

      <div className = "main-cards">

      <Cards 
        title="Sign-in and Information Table" 
        description="Here you can share updates and announcements." 
        image={sign}
      />

      <Cards 
        title="Mini Souvenirs and Gift Shop" 
        description="Join us for a community meetup this Saturday at 4PM!" 
        image={mini}
      />

      <Cards 
        title="How-to-Join Our Teams" 
        description="Don't forget to RSVP for the event." 
        image={teams}
      />

      <Cards 
        title="Priest's Room" 
        description="Here you can share updates and announcements." 
        image={priest}
      />

      <Cards 
        title="FAQ about Orthodoxy" 
        description="Join us for a community meetup this Saturday at 4PM!"
        image={faq} 
        
      />

      <Cards 
        title="Testimonials Table (share and ask about)" 
        description="Don't forget to RSVP for the event."
        image={test} 
      />

      <Cards 
        title= "How We Started (video replay area)" 
        description="Here you can share updates and announcements." 
        image={start}
      />

      <Cards 
        title="Teenage Program Schedule and Group Activities" 
        description="Join us for a community meetup this Saturday at 4PM!" 
        image={teen}
      />

      <Cards 
        title="Food Court" 
        description="Don't forget to RSVP for the event." 
        image={food}
      />


      <Cards 
        title="Meet and mingle Room (to be utilized immediately after eating hours)" 
        description="Here you can share updates and announcements." 
        image={meet}
      />

      </div>
    </>
  )
}

export default App

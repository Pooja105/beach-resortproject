import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'; 
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <React.Fragment>
       <Hero hero="roomsHero">
           <Banner title="our Rooms">
               <Link to="/" className="btn-primary">
                   return home
               </Link>
           </Banner>
       </Hero>
       <RoomsContainer />
       </React.Fragment>
    )
}

//className in CSS has a default image specified here

export default Rooms;

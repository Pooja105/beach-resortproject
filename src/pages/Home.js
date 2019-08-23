import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturesRooms from '../components/FeaturedRooms';
import Button from '../components/StyledHero';

const Home = () => {
    return (
        <React.Fragment>
          <Hero>
              <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting $299" >
                  <Link to="/rooms" className="btn-primary">Our Rooms</Link>
              </Banner>
          </Hero>
          <Services />
          <FeaturesRooms />
          </React.Fragment>
    )
}

export default Home

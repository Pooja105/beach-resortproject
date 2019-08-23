import React, { Component } from 'react'
import Title from '../components/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state={
    services : [
      {
        icon:<FaCocktail />,
        title:"Free Cocktails",
        info: "lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaHiking />,
        title:"Endless Hiking",
        info: "lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaShuttleVan />,
        title:"Free Shuttle",
        info: "lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaBeer />,
        title:"Strongest Beer",
        info: "lorem ipsum lorem ipsum lorem ipsum"
      }
    ]
  }
    render() {
        return (
          <section>
          <Title title="Services"/>
          <div className="services-center">
            {this.state.services.map((item, index) => {
                return <article key={index} className="services">
                  <span>
                    {item.icon}
                  </span>
                  <h6>
                    {item.title}
                  </h6>
                  <p>
                    {item.info}
                  </p>
                </article>
            })}
          </div>
          </section>
        )
    }
}

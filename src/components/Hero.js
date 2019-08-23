import React, { Component } from 'react'

export default function Hero({children, hero}) {
        return (
           <header className={hero}>
                {children}
           </header>
        )
    }

    Hero.defaultProps = {
        hero: 'defaultHero'
    }

    //If any component imports the Hero Component and misses the default props , specifying default props here will help.


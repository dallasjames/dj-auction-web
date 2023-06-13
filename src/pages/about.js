import React, { useState } from 'react'
import Hero from 'src/components/Hero'
import Meta from 'src/components/Meta'
import TitleAndCopy from 'src/components/TitleAndCopy'

export default function Home() {

  let propList = {
    meta: {
      title: 'About - DJ\'s Auction House',
      description: 'DJ\'s Auction House is auctioning everything from VHS\'s to hot wheels click on a link and bid now.',
      image: {
        src: '/images/home/hero.jpg',
        alt: 'Hero',
        width: 589,
        height: 295,
      },
    },
    hero: {
      title: `About Us`,
      backgroundImage: '/images/hero/hero.jpg',
    },
    copy: {
      title: 'How it all started',
      copy: `I am a dude that is auctioning stuff off that I buy. There is a lot of 
      video tapes and hot wheels and I'll probably buy other stuff. I don't 
      know what else to put in here the web developer told me to put a lot of 
      stuff in here for something called SEO. I don't even know what that is 
      but I hope he just copy and pastes this in there with out looking at it 
      becuase that would be funny as hell. He said something about a blog too.
      I don't think I have enough stuff to say for a blog but I don't know. 
      Maybe I could rip something off from someone else's blog I mean who's
      out there copyrighting a blog. It's gotta be the last great thing you
      can steal from someone else right? Anyway this is dumb and I want to go
      to bed so stick around and bid on some stuff. All the links should take
      you to a site called Proxibid and you can bid on it there.`
    }
  }

  return (
    <div>
      <Meta {...propList.meta} />
      <Hero {...propList.hero}/>
      <TitleAndCopy {...propList.copy} />
    </div>
  )
}


// 7 to 14 days avg auction

// payment terms of sale and shipping instructions

// check the box for saving terms and conditions

// internet preimuim fill out

// always stager end times
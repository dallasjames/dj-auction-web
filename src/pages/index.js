import React, { useEffect, useState } from 'react'
import AuctionCollapsible from 'src/components/AuctionCollapsible'
import Hero from 'src/components/Hero'
import Meta from 'src/components/Meta'

export default function Home() {
  
  const [openSection, setOpenSection] = useState('auctions');

  let propList = {
    meta: {
      title: 'DJ\'s Auction House',
      description: 'DJ\'s Auction House is selling everything you could possibly need or want! Get in quick to see our latest items!',
      image: {
        src: '/images/favicon.png',
        alt: 'DJ\'s Auction House',
        width: 1024,
        height: 1024,
      },
    },
    hero: {
      title: `DJ's Auction House`,
      backgroundImage: '/images/hero/hero.jpg',
    },
    AuctionSections: [
      {
        title: 'Auctions',
        auctions: [],
        onOpen: onOpen,
        open: openSection === 'auctions',
        keyname: 'auctions',
      }, // auctions
    ]
  }

  function onOpen(label) {
    if (openSection !== label) {
      setOpenSection(label)
    }
    else {
      setOpenSection('');
    }
  }

  return (
    <div>
      <Meta {...propList.meta} />
      <Hero {...propList.hero}/>
      {propList.AuctionSections.map((section, index) => {
        return (
          <AuctionCollapsible key={'section-'+index} {...section} />
        )
      })}
    </div>
  )
}

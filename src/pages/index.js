import React, { useState } from 'react'
import AuctionCollapsible from 'src/components/AuctionCollapsible'
import Hero from 'src/components/Hero'
import Meta from 'src/components/Meta'
import Nav from 'src/components/Nav'

export default function Home() {
  const [openSection, setOpenSection] = useState('current')

  let propList = {
    meta: {
      title: 'DJ\'s Auction House',
      description: 'DJ\'s Auction House is selling everything you could possibly need or want! Get in quick to see our latest items!',
      image: {
        src: '/images/home/hero.jpg',
        alt: 'Hero',
        width: 589,
        height: 295,
      },
    },
    hero: {
      title: `DJ's Auction House`,
      backgroundImage: '/images/hero/hero.jpg',
    },
    AuctionSections: [
      {
        title: 'Current Auctions',
        auctions: [
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
        ],
        onOpen: onOpen,
        open: openSection === 'current',
        keyname: 'current',
      }, // current auctions
      {
        title: 'Past Auctions',
        auctions: [
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
        ],
        onOpen: onOpen,
        open: openSection === 'past',
        keyname: 'past',
      }, // past auctions
      {
        title: 'Upcoming Auctions',
        auctions: [
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
            category: 'misc',
          },
        ],
        onOpen: onOpen,
        open: openSection === 'future',
        keyname: 'future',
      }, // future auctions
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

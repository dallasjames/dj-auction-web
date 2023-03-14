import React, { useState } from 'react'
import HomePage from 'src/components/HomeBlocks/HomePage'

export default function Home() {
  const [openSection, setOpenSection] = useState('current')
  let propList = {
    hero: {
      title: `DJ's<br/>Auctions`
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
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
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
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
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
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
          },
          {
            image: {
              src: '/images/current-auctions/auction-1.jpg',
              alt: 'auction item alt',
            },
            title: 'Thing',
            description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
            proxyBidLink: '#',
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
      <HomePage propList={propList} />
    </div>
  )
}

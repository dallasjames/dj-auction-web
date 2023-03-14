import Hero from '../components/Hero'
import CurrentAuctions from 'src/components/CurrentAuctions'
import PastAuctions from 'src/components/PastAuctions'
import UpcomingAuctions from 'src/components/UpcomingAuctions'
import { useState } from 'react'

export default function Home() {
  const [openSection, setOpenSection] = useState('current')
  let propList = {
    hero: {
      title: `DJ's<br/>Auctions`
    },
    currentAuctions: {
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
    },
    pastAuctions: {
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
    },
    upcomingAuctions: {
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
    },
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
      <Hero {...propList.hero}/>
      <CurrentAuctions {...propList.currentAuctions} />
      <PastAuctions {...propList.pastAuctions} />
      <UpcomingAuctions {...propList.upcomingAuctions} />
    </div>
  )
}

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
        auctions: [
          {
            "Lot Number": "0401",
            "Lot Title": "Jerry Rice Rookie RC Card / Commemorative Ticket/8x10 Autograph",
            "Lot Description": "Picture(s) part of description. 1986 TOPPS Rookie Card #161 / 1997 Jerry Rice's 1000 Receptions Commemorative Ticket #1403 out of 10000 / 8 x 10 Autograph Photo with COA",
            "Starting Bid": 100,
            "Quantity": 1,
            "Reserve": 150,
            "image": "/images/auctions/10/0401.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0401",
          },
          {
            "Lot Number": "0402",
            "Lot Title": "TOPPS Stadium Club 50 Card Set",
            "Lot Description": "Picture(s) part of description. Members Only Football 1996",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0402.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0402",
          },
          {
            "Lot Number": "0403",
            "Lot Title": "PSA 8 x 10 Autograph Bernie Kozar",
            "Lot Description": "Picture(s) part of description. Certificate of Authenticity ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 25,
            "image": "/images/auctions/10/0403.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0403",
          },
          {
            "Lot Number": "0404",
            "Lot Title": "Dan Marino Lot of 2 ",
            "Lot Description": "Picture(s) part of description. (1) 1994 Collectors Edge 22K Excalibur 22 of 25 / (2) PD-25 Power Deck by Upper Deck",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0404.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0404",
          },
          {
            "Lot Number": "0405",
            "Lot Title": "Deion Sanders 1993 Game Day Collector Cards",
            "Lot Description": "Picture(s) part of description. McDonald's limited edition Sheet A 1 of 3",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0405.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0405",
          },
          {
            "Lot Number": "0406",
            "Lot Title": "John Elway #15 Beckett Graded 9 #315/750",
            "Lot Description": "Picture(s) part of description. 2000 Don Ross Preferred QBC Letterman Graded Series 1 of 300",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 25,
            "image": "/images/auctions/10/0406.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0406",
          },
          {
            "Lot Number": "0407",
            "Lot Title": "2000 UD Encore #245 Jamal Lewis SGC Graded 10",
            "Lot Description": "Picture(s) part of description. Star Rookie with original package",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 25,
            "image": "/images/auctions/10/0407.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0407",
          },
          {
            "Lot Number": "0409",
            "Lot Title": "1995 Classic Printers Proof Jerry Rice",
            "Lot Description": "Picture(s) part of description. Jerry Rice Printer Proof 1 of 499 / #2",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0409.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0409",
          },
          {
            "Lot Number": "0410",
            "Lot Title": "Tri-Star 1987 TOPPS #365 Andre Reed",
            "Lot Description": "Picture(s) part of description. BCCG Mint 10 or better in original packaging.",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0410.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0410",
          },
          {
            "Lot Number": "0411",
            "Lot Title": "Lot of 2 Russell Wilson RC Card / 8 x 10 Auto",
            "Lot Description": "Picture(s) part of description. (1) 2012 Russell Wilson Rookie Card #165 (2) Autographed 8 x 10 Photo with COA",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 45,
            "image": "/images/auctions/10/0411.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0411",
          },
          {
            "Lot Number": "0413",
            "Lot Title": "Lot of 4 Vintage Vikings ",
            "Lot Description": "Picture(s) part of description. 1978 Chuck Foreman #400 / Alan Page Rookie RC Card #59 / Jim Marshall #103 & #107",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 25,
            "image": "/images/auctions/10/0413.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0413",
          },
          {
            "Lot Number": "0414",
            "Lot Title": "1993 Game Day Collector Cards Sheet B 2 of 3",
            "Lot Description": "Picture(s) part of description. McDonald's limited edition Sheet B 2 of 3",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0414.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0414",
          },
          {
            "Lot Number": "0415",
            "Lot Title": "Lot of 3 TOPPS All-American Autographs",
            "Lot Description": "Picture(s) part of description. A-TF A-CCE A-JDC",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0415.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0415",
          },
          {
            "Lot Number": "0416",
            "Lot Title": "Vince Young Rookie Premiere Materials",
            "Lot Description": "Picture(s) part of description. 2000 Absolute Memorabilia 269 of 849",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0416.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0416",
          },
          {
            "Lot Number": "0417",
            "Lot Title": "TOPPS Rookie Throw Back Relics Adam 'PacMan' Jones",
            "Lot Description": "Picture(s) part of description. Authentic Player Worn Jersey RT-AJ 2005",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0417.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0417",
          },
          {
            "Lot Number": "0418",
            "Lot Title": "1989 Pro-Set #509 Timm Rosenbach RC",
            "Lot Description": "Picture(s) part of description. Autograph Rookie Card",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0418.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0418",
          },
          {
            "Lot Number": "0419",
            "Lot Title": "Don Ross Elite 2009 Larry Johnson #25",
            "Lot Description": "Picture(s) part of description. Chain Reaction Authentic Jersey 218-299",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0419.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0419",
          },
          {
            "Lot Number": "0420",
            "Lot Title": "Jerry Rice 1993 Game Day Collectors Card",
            "Lot Description": "Picture(s) part of description. McDonalds Limited Edition Sheet C 3 or 3",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0420.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0420",
          },
          {
            "Lot Number": "0422",
            "Lot Title": "Lot of 3 Reggie Bush 2 Sage Game Exclusive Jerseys Card",
            "Lot Description": "Picture(s) part of description. #TRR-RB Turkey Red Numbered 145/399",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0422.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0422",
          },
          {
            "Lot Number": "0423",
            "Lot Title": "2007 Game Worn Jersey Card Steve McNair ",
            "Lot Description": "Picture(s) part of description CA--19 Numbered 173/200",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0423.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0423",
          },
          {
            "Lot Number": "0424",
            "Lot Title": "2003 Leaf Certified Steve Smith #16 Card",
            "Lot Description": "Picture(s) part of description. Authentic Game Worn Jersey Card Number 6/50",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0424.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0424",
          },
          {
            "Lot Number": "0426",
            "Lot Title": "1993 Raiders Game Day Cards",
            "Lot Description": "Picture(s) part of description. McDonalds Limited Edition Sheet B 2 or 3",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0426.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0426",
          },
          {
            "Lot Number": "0427",
            "Lot Title": "Lot of 2 Emmanuel Sanders Numbered Cards",
            "Lot Description": "Picture(s) part of description. (1) TOPPS Unriveled #146 Rookie RC Card Signed #129/680 (2)2010 Certified Freshman Fabric #282 Authenic Autographed Numbered 138/699",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 20,
            "image": "/images/auctions/10/0427.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0427",
          },
          {
            "Lot Number": "0428",
            "Lot Title": "Marshall Faulk CGG #MF28-A",
            "Lot Description": "Picture(s) part of description. 2000 LEAF Certified Authentic Game Worn Away Jersey Numbered 53/100",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0428.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0428",
          },
          {
            "Lot Number": "0429",
            "Lot Title": "Lot of 2 Game Day ",
            "Lot Description": "Picture(s) part of description. (1) TOPPS Certified Autograph Issue Jahvid Best (2) Game Worn Jersey Relic Miles Austin",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0429.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0429",
          },
          {
            "Lot Number": "0430",
            "Lot Title": "Lot of 2 Flair Showcase Stitches",
            "Lot Description": "Picture(s) part of description. Edgerrin James / Matt Leinart Rookie Card",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0430.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0430",
          },
          {
            "Lot Number": "0431",
            "Lot Title": "2005 LEAF Limited Phenoms",
            "Lot Description": "Picture(s) part of description. Eric Shelton Event Worn Jersey / Auto Numbered 1/25",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0431.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0431",
          },
          {
            "Lot Number": "0432",
            "Lot Title": "TOPPS Platinum Refractor #ARP-RM Rashard Mendenhall",
            "Lot Description": "Picture(s) part of description. Authentic Game Worn Jersey Patch TOPP Certified Autograph Issue Numbered 080/ 350",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0432.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0432",
          },
          {
            "Lot Number": "0433",
            "Lot Title": "2010 Prestige Connections Game Worn Jerseys Card",
            "Lot Description": "Picture(s) part of description. Matt Ryan and Rodney White Numbered 060/250",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0433.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0433",
          },
          {
            "Lot Number": "0434",
            "Lot Title": "Playoff Signature Proof #138 Card",
            "Lot Description": "Picture(s) part of description. #138 Chad Greenway Authentic Signature numbered 054/150",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0434.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0434",
          },
          {
            "Lot Number": "0435",
            "Lot Title": "TOPPS Prime Marcus Easley Numbered PLS-ME Card",
            "Lot Description": "Picture(s) part of description. Authentic Autograph and 4 pieces of Player Worn Jersey Numbered 358/399",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0435.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0435",
          },
          {
            "Lot Number": "0436",
            "Lot Title": "Brett Favre Authentic Jersey Piece ",
            "Lot Description": "Picture(s) part of description. ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0436.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0436",
          },
          {
            "Lot Number": "0438",
            "Lot Title": "Kurt Warner 8 x 10 Autographed Photo Plus Authentic Jersey & Card Set",
            "Lot Description": "Picture(s) part of description. ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 45,
            "image": "/images/auctions/10/0438.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0438",
          },
          {
            "Lot Number": "0439",
            "Lot Title": "TOPPS Cris Collingsworth #37 Card",
            "Lot Description": "Picture(s) part of description. ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0439.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0439",
          },
          {
            "Lot Number": "0440",
            "Lot Title": "Vintage 1970 Jack Snow #44 Card",
            "Lot Description": "Picture(s) part of description. ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0440.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0440",
          },
          {
            "Lot Number": "0441",
            "Lot Title": "2010 Rookies & Stars Freddie Barnes #196 Card ",
            "Lot Description": "Picture(s) part of description. RC Rookie Card #079/299",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0441.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0441",
          },
          {
            "Lot Number": "0442",
            "Lot Title": "Bowman Sterling Jacoby Ford Rookie Card",
            "Lot Description": "Picture(s) part of description. Bowman Refractor BSA-JF Rookie RC Card Autograph #12/50",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0442.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0442",
          },
          {
            "Lot Number": "0443",
            "Lot Title": "2010 Certified Mike Williams Rookie #296 Card",
            "Lot Description": "Picture(s) part of description. Freshman Fabric with Authentic Autograph numbered 216/699",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0443.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0443",
          },
          {
            "Lot Number": "0444",
            "Lot Title": "Authentic Jersey and Card Set Jerry Rice",
            "Lot Description": "Picture(s) part of description.",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0444.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0444",
          },
          {
            "Lot Number": "0446",
            "Lot Title": "Beckett Graded 9 A.J. Hawk Card",
            "Lot Description": "Picture(s) part of description. 2006 Score Rookie Card #373",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0446.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0446",
          },
          {
            "Lot Number": "0447",
            "Lot Title": "TOPPS Chrome Drew Brees #C30",
            "Lot Description": "Picture(s) part of description. ",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0447.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0447",
          },
          {
            "Lot Number": "0448",
            "Lot Title": "Matt Paradis Rookie RC Card Denver Broncos",
            "Lot Description": "Picture(s) part of description. Superbowl 50 Champion Only NFL Rookie Card",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0448.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0448",
          },
          {
            "Lot Number": "0449",
            "Lot Title": "PANINI Contenders 2018 Draft Picks RC Card",
            "Lot Description": "Picture(s) part of description. Leighton Vander Esch Autographed #299 Rookie RC Card",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0449.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0449",
          },
          {
            "Lot Number": "0450",
            "Lot Title": "Arnold Donald RC Rookie Card #102",
            "Lot Description": "Picture(s) part of description. 25 Card Rookie Pack",
            "Starting Bid": 5,
            "Quantity": 1,
            "Reserve": 10,
            "image": "/images/auctions/10/0450.jpg",
            "href": "https://www.proxibid.com/DJ-Auctions-LLC/AUCTION-LEGENDS-OF-THE-BALL-FOOTBALL-CARDS/event-catalog/249703?ipp=100#lot-image-0450",
          },
        ],
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

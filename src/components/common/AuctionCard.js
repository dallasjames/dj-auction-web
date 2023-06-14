import React from 'react'

export default function AuctionCard(props) {
  const {
    auction
  } = props;

  return (
    <a href={auction.href} target="_blank" className="AuctionCard">
      <div className="inner">
        <div className="front" style={{backgroundImage: `url(${auction.image})`}}>
        </div>
        <div className="back">
          <div className="title">Title: {auction["Lot Title"]}</div>
          <div className="description">Lot: {auction["Lot Number"]}</div>
          <div className="description">Description: {auction["Lot Description"]}</div>
          <div className="description">Starting Bid: ${auction["Starting Bid"]}</div>
          <div className="description">Quantity: {auction["Quantity"]}</div>
        </div>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';

        a.AuctionCard {
          background-color: transparent;
          width: 100%;
          aspect-ratio: 1/1;
          border: 1px solid #000000;
          perspective: 1000px;
          
          @include respond-to('md') {
            width: calc(33% - 20px);
            margin: 0 0 20px 20px;
          }

          &:hover {
            .inner {
              transform: rotateY(180deg);
            }
          }

          .inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;

            .front, .back {
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }

            .front {
              background-size: contain;
              background-position: center center;
              background-repeat: no-repeat;
              background-color: transparent;
            }

            .back {
              display: flex;
              margin: 0 0 20px;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: black;
              text-decoration: none;
              background-color: white;
              background-color: #2980b9;
              color: white;
              transform: rotateY(180deg);
    
              .title {
                margin: 10px 0 0;
                @include font-bold;
                font-size: 22px;
              }
    
              .description {
                @include font-default;
                font-size: 20px;
              }
            }

          }
        }
      `}</style>
    </a>
  )
}
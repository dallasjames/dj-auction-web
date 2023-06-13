import React from 'react'
import AuctionCard from './AuctionCard'

export default function AuctionMap(props) {
  const { auctions, keyname } = props;

  return (
    <div className="AuctionMap">
      {auctions.map((auction, index) => {
        return (
          <AuctionCard auction={auction} key={keyname+'-auction-'+index} />
        )
      })}
      <style global jsx>{`
        @import 'styles/components.scss';
        
        div.AuctionMap {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: flex-start;
        }
      `}</style>
    </div>
  )
}
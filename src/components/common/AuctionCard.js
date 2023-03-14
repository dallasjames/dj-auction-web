import React from 'react'

export default function AuctionCard(props) {
  const {
    proxyBidLink,
    image,
    title,
    description,
  } = props.auction;

  return (
    <a href={proxyBidLink} target="_blank" className="AuctionCard">
      <img src={image.src} alt={image.alt} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>

      <style global jsx>{`
        @import 'styles/components.scss';

        a.AuctionCard {
          width: 100%;
          margin-bottom: 20px;
          color: black;
          text-decoration: none;

          @include respond-to('md') {
            width: calc(33% - 20px);
            margin-left: 20px;
          }

          img {
            width: 100%;
            margin-bottom: 10px;
          }

          .title {
            margin-bottom: 10px;
            @include font-bold;
            font-size: 22px;
            text-align: center;
          }

          .description {
            @include font-default;
            font-size: 20px;
            @include overflow-ellipsis-lines(2);
          }
        }
      `}</style>
    </a>
  )
}
import React, { useEffect, useState, useRef } from 'react'
import Collapsible from 'src/utils/Collapsible'
import AuctionMap from '../common/AuctionMap'

export default function AuctionCollapsible(props) {
  const {
    title,
    auctions,
    open,
    onOpen,
    keyname,
  } = props;

  return (
    <section className="AuctionCollapsible">
      <div className="inner">
        <div className="title-container">
          <h2 onClick={() => onOpen(keyname)} dangerouslySetInnerHTML={{__html: title}}></h2>
          <img className={open ? 'open' : ''} src='/images/auctions/arrow.svg' alt='arrow' />
        </div>
        <Collapsible active={open}>
          <AuctionMap auctions={auctions} keyname={keyname}/>
        </Collapsible>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';

        section.AuctionCollapsible {
          @include section-generic;
          height: auto;

          .inner {

            .title-container {
              margin-bottom: 20px;
              display: flex;
              align-items: center;

              h2 {
                @include font-bold;
                font-size: 40px;
                color: $color-black;
              }

              img {
                width: 24px;
                height: 14px;
                margin: auto 20px;
                transform: rotate(90deg);
                transition: transform 300ms ease;

                &.open {
                  transform: rotate(180deg);
                }
              }
            }

          }
        }
      `}</style>
    </section>
  );
}

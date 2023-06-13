import React, { useEffect, useState, useRef } from 'react'
import Collapsible from 'src/utils/Collapsible'
import AuctionMap from './common/AuctionMap'

AuctionCollapsible.defaultProps = {
  title: ``,
  auctions: [],
  open: false,
  onOpen: () => {},
  keyname: ''
};

export default function AuctionCollapsible(props) {
  const {
    title,
    auctions,
    open,
    onOpen,
    keyname,
  } = props;

  function onClick(e) {
    if (e) e.preventDefault();
    onOpen(keyname);
  }

  return (
    <section className="AuctionCollapsible">
      <div className="inner">
        <a href='#' className="title-container" onClick={onClick}>
          <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
          <img className={open ? 'open' : ''} src='/images/auctions/arrow.svg' alt='arrow' />
        </a>
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
              text-decoration: none;

              h3 {
                @include font-bold;
                font-size: 28px;
                color: $color-black;

                @include respond-to('md') {
                  font-size: 40px;
                }
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

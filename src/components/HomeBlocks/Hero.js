import React, { useEffect, useState, useRef } from 'react'


Hero.defaultProps = {
  title: `DJ's<br/>Auctions`
};

export default function Hero(props) {
  const {
    title,
  } = props;

  return (
    <section className="Hero">
      <div className="inner">
        <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';

        section.Hero {
          @include section-generic;
          height: 400px;
          background-image: url('/images/hero/hero.jpg');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;

          .inner {
            width: 100%;

            h1 {
              width: 100%;
              @include font-bold;
              font-size: 70px;
              color: $color-white;
              text-align: center;
              -webkit-text-stroke: $color-black;
              -webkit-text-stroke-width: 2px;

              @include respond-to('md') {
                text-align: left;
              }
            }
          }
        }
      `}</style>
    </section>
  );
}

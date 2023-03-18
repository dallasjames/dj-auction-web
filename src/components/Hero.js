import React, { useEffect, useState, useRef } from 'react'


Hero.defaultProps = {
  title: ``,
  backgroundImage: '',
};

export default function Hero(props) {
  const {
    title,
    backgroundImage,
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
          background-image: url('${backgroundImage}');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;

          .inner {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            h1 {
              position: absolute;
              top: calc(50% - 120px);
              bottom: calc(50% - 120px);
              width: 310px;
              @include font-bold;
              font-size: 70px;
              color: $color-white;
              text-align: center;
              filter: drop-shadow(6px 6px 2px #000000);

              @include respond-to('md') {
                top: calc(50% - 40px);
                bottom: calc(50% - 40px);
                width: 100%;
              }
            }
          }
        }
      `}</style>
    </section>
  );
}

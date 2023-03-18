import React, { useEffect, useRef, useState } from 'react'

export default function UnderConstruction(props) {
  const { title } = props;

  const titleRef = useRef(null);

  return (
    <div className='big-background'>
      <h2 ref={titleRef}>{title}</h2>

      <style global jsx>{`
        @import 'styles/components.scss';

        div.big-background {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: radial-gradient(#e66465, #9198e5);
          z-index: 1;

          h2 {
            position: absolute;
            top: 50%;
            bottom: 50%;
            left: 0;
            right: 0;
            @include font-default;
            font-size: 70px;
            color: $color-white;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
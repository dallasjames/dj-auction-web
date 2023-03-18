import React, { useEffect, useState, useRef } from 'react'


TitleAndCopy.defaultProps = {
  title: '',
  copy: ``,
};

export default function TitleAndCopy(props) {
  const {
    title,
    copy,
  } = props;

  return (
    <section className="TitleAndCopy">
      <div className="inner">
        <h2>{title}</h2>
        <div className="copy" dangerouslySetInnerHTML={{ __html: copy}}></div>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';

        section.TitleAndCopy {
          @include section-generic;

          .inner {
            
            h2 {
              margin-bottom: 20px;
              @include font-bold;
              font-size: 28px;
              color: $color-black;

              @include respond-to('md') {
                font-size: 40px;
              }
            }

            .copy {
              @include font-default;
              font-size: 20px;
            }
          }
        }
      `}</style>
    </section>
  );
}

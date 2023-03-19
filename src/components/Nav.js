import React, { useEffect, useState, useRef } from 'react'


Nav.defaultProps = {
  links: [
    {
      label: '',
      href: '',
    },
  ],
  linkLength: 0,
};

export default function Nav(props) {
  const {
    links,
    linkLength,
  } = props;

  return (
    <nav className="Nav">
      <div className="inner">
        <ul>
          {links.map((link, index) => {
            const {
              label,
              href,
            } = link;
            return (
              <li key={'link-'+index}>
                <a href={href}>{label}</a>
              </li>
            )
          })}
        </ul>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';
        $link-length: ${linkLength};

        nav.Nav {
          @include section-generic;
          background-color: $color-white;

          .inner {

            ul {
              width: 100%;
              margin: 0;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              list-style: none;

              li {
                width: calc(100% / $link-length - 20px);
                border: 2px solid $color-black;
                margin: 0 auto;
                background-color: $color-white;
                padding: 0;
                text-align: center;

                a {
                  display: block;
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  @include font-default;
                  font-size: 20px;
                  color: $color-black;
                  text-decoration: none;
                }
              }
            }
          }
        }
      `}</style>
    </nav>
  );
}

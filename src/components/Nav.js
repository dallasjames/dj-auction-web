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
          background-color: $color-white;

          .inner {
            @include section-generic;

            ul {
              wwidth: 100%;
              margin: 0;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              list-style: none;

              li {
                width: 100%;
                margin: 0;
                padding: 10px 0;
                text-align: center;
                
                @include respond-to('md') {
                  width: calc(100% / $link-length);
                }

                a {
                  @include font-default;
                  font-size:20px;
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

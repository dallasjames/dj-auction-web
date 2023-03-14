import React, { useEffect, useState, useRef } from 'react'
import Collapsible from 'src/utils/Collapsible';

UpcomingAuctions.defaultProps = {
  title: 'Current Auctions',
  auctions: [
    {
      image: {
        src: '/images/upcoming-auctions/auction-1.jpg',
        alt: 'auction item alt',
      },
      title: 'Thing',
      description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
      proxyBidLink: '#',
    },
    {
      image: {
        src: '/images/upcoming-auctions/auction-1.jpg',
        alt: 'auction item alt',
      },
      title: 'Thing',
      description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
      proxyBidLink: '#',
    },
    {
      image: {
        src: '/images/upcoming-auctions/auction-1.jpg',
        alt: 'auction item alt',
      },
      title: 'Thing',
      description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
      proxyBidLink: '#',
    },
    {
      image: {
        src: '/images/upcoming-auctions/auction-1.jpg',
        alt: 'auction item alt',
      },
      title: 'Thing',
      description: `This is a title desccription that will be put on a limit of 2 lines at most because its not all that hard and now im making this really long so that it will cut off and i can make sure it works`,
      proxyBidLink: '#',
    },
  ],
};

export default function UpcomingAuctions(props) {
  const {
    title,
    auctions,
    open,
    onOpen,
  } = props;

  return (
    <section className="UpcomingAuctions">
      <div className="inner">
        <h2 onClick={() => onOpen('future')} dangerouslySetInnerHTML={{__html: title}}></h2>
        <Collapsible active={open}>
          <div className="auctions">
            {auctions.map((auction, index) => {
              const {
                image,
                title,
                description,
              } = auction;
              return (
                <div className="auction" key={'auction'+index}>
                  <img src={image.src} alt={image.alt} />
                  <div className="title">{title}</div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </div>
        </Collapsible>
      </div>

      <style global jsx>{`
        @import 'styles/components.scss';
        
        section.UpcomingAuctions {
          @include section-generic;
          height: auto;

          .inner {

            h2 {
              margin-bottom: 20px;
              @include font-bold;
              font-size: 40px;
              color: $color-black;
            }

            .auctions {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;

              .auction {
                width: 100%;
                margin-bottom: 20px;

                @include respond-to('md') {
                  width: calc(33% - 20px);
                  margin-right: 20px;
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
            }
          }
          
        }
      `}</style>
    </section>
  );
}

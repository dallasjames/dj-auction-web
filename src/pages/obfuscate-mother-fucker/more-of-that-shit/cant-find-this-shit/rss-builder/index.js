import React, { useEffect, useState } from "react"

export default function rssBuilder() {

  const [title, setTitle] = useState('');
  const [auctionLink, setAuctionLink] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');

  return (
    <div className="csvChecker">
      <form>
        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" onChange={(e) => setAuctionLink(e.target.value)} placeholder="Auction Link" />
        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="text" onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <input type="text" onChange={(e) => setImageWidth(e.target.value)} placeholder="Image Width" />
        <input type="text" onChange={(e) => setImageHeight(e.target.value)} placeholder="Image Height" />
      </form>
      <code>
        &nbsp;&nbsp;&nbsp;&nbsp;{`<item>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<title>${title}</title>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<link>${auctionLink}</link>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<guid isPermaLink="true">${auctionLink}</guid>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<atom:link href="${auctionLink}" rel="related" />`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<description>${description}</description>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<dc:creator>DJ's Auction House</dc:creator>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<pubDate>${new Date(new Date().setHours(0, 0, 0, 0)).toUTCString()}</pubDate>`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<media:content width="${imageWidth}" height="${imageHeight}" medium="image" url="${imageUrl}"/>`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`</item>`}
      </code>
      <style global jsx>{`
        @import 'styles/components.scss';

        .csvChecker {
          padding: 20px;

          form {
            display: block;

            input {
              display: block;
              margin: 0 0 15px;
            }
          }
          .json {
          }
        }
      `}</style>
    </div>
  )
}
import React from 'react'
import Head from 'next/head'

Meta.defaultProps = {
  title: '',
  description: '',
  image: {},
};

export default function Meta(props) {
  const {
    title,
    description,
    image,
  } = props;
  const siteName = 'DJ\'s Auction House';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />

      {(image && image.url) &&
        <meta property="og:image" content={image.url} />
      }
      {(image && image.src) &&
        <meta property="og:image" content={image.src} />
      }
      {image &&
        <meta property="og:image:alt" content={image.alt} />
      }
      {image &&
        <meta property="og:image:width" content={image.width} />
      }
      {image &&
        <meta property="og:image:height" content={image.height} />
      }
    </Head>
  );
}

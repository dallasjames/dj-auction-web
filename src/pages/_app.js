import Nav from 'src/components/Nav';
import UnderConstruction from 'src/components/UnderConstruction';
import '../../styles/app.scss'

export default function App({ Component, pageProps }) {
  const live = false;
  let links = [
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'category2',
      href: '/category2',
    },
    {
      label: 'category3',
      href: '/category3',
    },
    {
      label: 'category4',
      href: '/category4',
    },
    {
      label: 'category5',
      href: '/category5',
    },
  ];
  const navProps = {
    links: links,
    linkLength: links.length,
  }

  return (
    <>
    {!live && <UnderConstruction title="This ain't ready yet" />}
    {live && 
      <>
      <Nav {...navProps} />
      <Component {...pageProps} />
      </>
    }
    </>
  );
};

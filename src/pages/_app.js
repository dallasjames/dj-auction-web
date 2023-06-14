import Nav from 'src/components/Nav';
import UnderConstruction from 'src/components/UnderConstruction';
import '../../styles/app.scss'

export default function App({ Component, pageProps }) {
  const live = true;
  let links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about',
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

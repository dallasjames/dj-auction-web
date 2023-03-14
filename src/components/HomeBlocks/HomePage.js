import Hero from './Hero'
import AuctionCollapsible from './AuctionCollapsible'

export default function HomePage(props) {
  const { propList } = props;

  return (
    <div>
      <Hero {...propList.hero}/>
      {propList.AuctionSections.map((section, index) => {
        const {
          title,
          auctions,
          open,
          onOpen,
          keyname,
        } = section;
        return (
          <AuctionCollapsible 
            key={'section-'+index}
            title={title}
            auctions={auctions}
            open={open}
            onOpen={onOpen}
            keyname={keyname}
          />
        )
      })}
    </div>
  )
}

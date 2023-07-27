import React, { useEffect, useState } from "react"
import csvJSON from "src/utils/csvToJson"

export default function uploadCSV() {

  const [imageFolderName, setImageFolderName] = useState('');
  const [auctionUrl, setAuctionUrl] = useState('');
  const [csv, setCsv] = useState('');
  const [parsed, setParsed] = useState([]);
  const [showData, setShowData] = useState(false);

  function getCsv(e) {
    if (e) e.preventDefault();

    setCsv(e.target.files[0]);
  }

  function readCsv(e) {
    if (e) e.preventDefault();
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      let file = target.result;
      editCsv(csvJSON(file.replace("\"","")));
    };
    reader.readAsText(csv)
  }

  function editCsv(file) {
    let newParsed = file;
    for (let i = 0; i < newParsed.length; i++) {
      let item = newParsed[i];
      item["image"] = `/images/auctions/${imageFolderName}/${item["Lot Number"]}.jpg`
      item["href"] = auctionUrl
    }
    setParsed(newParsed);
  }

  useEffect(() => {
    if (parsed?.length > 0) {
      setShowData(true);
    }
  }, [parsed])

  return (
    <div className="csvChecker">
      <form onSubmit={readCsv}>
        <input type="text" onChange={(e) => setImageFolderName(e.target.value)} placeholder="Folder Name" />
        <input type="text" onChange={(e) => setAuctionUrl(e.target.value)} placeholder="Auction URL" />
        <input type="file" onChange={getCsv} />
        <input type="submit" value="Submit" />
      </form>
      <div className="json">
        {'['}
        {showData &&
          parsed.map((item, index) => {
            return (
              <div className="item" key={'item-'+index}>
                &nbsp;{'{'}
                  <div className="row">
                    &nbsp;&nbsp;"Lot Number": "{item["Lot Number"]}",
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"Lot Title": "{item["Lot Title"]}",
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"Lot Description": "{item["Lot Description"]}",
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"Starting Bid": {item["Starting Bid"]},
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"Quantity": {item["Quantity"]},
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"Reserve": {item["Reserve"]},
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"image": "{item["image"]}",
                  </div>
                  <div className="row">
                    &nbsp;&nbsp;"href": "{item["href"]}",
                  </div>
                &nbsp;{'},'}
              </div>
            )
          })
        }
        {']'}
      </div>
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
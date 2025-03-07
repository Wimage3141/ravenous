import React from "react";
import Business from "./Business";

/*
Create a BusinessList component that displays a collection of businesses.
The BusinessList component should utilize the Business component multiple
times to generate the list.
*/

function BusinessList() {
  // placeholder, we will get actual lists later, for now im just duplicating my index
  const businessList = Array.from({length: 9}, (_, index) => <Business key={index} />);

  return (
    <div className="business-list">
      {businessList}
    </div>
  );
}

export default BusinessList;
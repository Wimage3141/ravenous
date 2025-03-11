import React from "react";
import Business from "./Business";

/*
Create a BusinessList component that displays a collection of businesses.
The BusinessList component should utilize the Business component multiple
times to generate the list.
*/

function BusinessList(props) {
  // placeholder, we will get actual lists later, for now im just duplicating my index
  // .from() creates an array from an iterable
  
  // My plan:
  // props contains a list of objects
  // businessObjectList = props:
  // for businessObject in businessObjectList:
  //    map businessObject to <Business /> component
  // return all the list with all the <Business /> components

  const businessObjectList = props.businessObjectList;
  const businessComponentList = [];
  for(let businessObject of businessObjectList) {
    businessComponentList.push(<Business businessObject={businessObject} />);
  }

  return (
    <div className="business-list">
      {businessComponentList}
    </div>
  );
}

export default BusinessList;
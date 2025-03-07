import React from "react";

/*
Create a SearchBar component that users can use to search for businesses on the Yelp platform.

The search bar should contain two inputs, one for the user’s search terms and the selected location.
Don’t forget a search button as well.

The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed.
This functionality will be fully incorporated in a later part of the project, but for now,
concentrate on building the buttons and the structure needed to communicate with the Yelp API.

Review the details on what the API expects to receive, and follow the formatting and naming
convention set by the API documentation.

*/

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-filter">
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
      </div>

      <div className="search-input">
        <input type="text" placeholder="Search Business"/>
        <input type="text" placeholder="Where?"/>
      </div>
      
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
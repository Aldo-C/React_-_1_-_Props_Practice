import React from "react";
import Card from "./Card"; // Import other components
import Contacts from "../contacts"; // Import the contacts JS object for use here

// Notice that classes are added here in the .jsx functions and not in the index.js file
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card // This card uses hard-coded data
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 7890"
        email="b@beyonce.com"
      />
      <Card // The next two cards use the data from the imported contacts JS object
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;

function displayMailingLabel(name, address, city, state, zip) {
  let addresslabel = `${name}
    ${address}
    ${city}
    ${state}
    ${zip}`;

  console.log(addresslabel);
}
let fname = "Kanchan Pate";
let homeaddress = "USA";
let homecity = "Pittsburgh";
let homestate = "Pensylvannia";
let zipcode = "15789";
displayMailingLabel(fname, homeaddress, homecity, homestate, zipcode);

window.onload = init;
function init() {
  document
    .getElementById("getEstimatedCost")
    .addEventListener("click", getEstimatedCost);

  // document.getElementById("reset").addEventListener("click", resetForm);
}
// function resetForm(e) {
//   document.getElementById("carrental").innerHTML = "";

//   document.getElementById("finaloptions").innerHTML = "";
//   document.getElementById("surcharges").innerHTML = "";
//   document.getElementById("totaldue").innerHTML = "";
// }

//Result getestimatedCost
function getEstimatedCost(e) {
  // bring in the ui variables

  let checkindate = document.getElementById("checkindate").value;
  const checkoutdate = document.getElementById("checkoutdate").value;

  const adults = document.getElementById("adults").value;
  const childs = document.getElementById("childs").value;

  const queensize = document.getElementById("queensize").checked;
  const kingsize = document.getElementById("kingsize").checked;
  const multibedsuite = document.getElementById("multibedsuite").checked;

  const lunchpackage = document.getElementById("lunchpackage").checked;
  const transportation = document.getElementById("transportation").checked;
  const spa = document.getElementById("spa").checked;

  const none = document.getElementById("none").checked;
  const militory = document.getElementById("militory").checked;
  const premiummember = document.getElementById("premiummember").checked;

  let addons = 00;
  let taxes = 00;
  let discounts = 00;
  let totalDue = 00;
  let pernight = 00;

  var totalStay = parseInt(
    (new Date(checkoutdate) - new Date(checkindate)) / (1000 * 60 * 60 * 24),
    10
  );

  document.getElementById("totalStay").innerHTML = totalStay;

  let month = new Date(checkoutdate).toLocaleString("default", {
    month: "long",
  });
  if (queensize) {
    if (month === "June" || month === "July" || month === "August") {
      pernight = 250;
    } else {
      pernight = 150;
    }
  }
  if (kingsize) {
    if (month === "June" || month === "July" || month === "August") {
      pernight = 250;
    } else {
      pernight = 150;
    }
  }
  if (multibedsuite) {
    if (month === "June" || month === "July" || month === "August") {
      pernight = 350;
    } else {
      pernight = 210;
    }
  }
  document.getElementById("price").innerHTML = pernight * totalStay;

  // calculate ADDITIONAL SERVICES
  if (lunchpackage) {
    addons = 20;
  }
  if (transportation) {
    addons = parseFloat(addons) + 20;
  }
  if (spa) {
    addons = parseFloat(addons) + 50;
  }
  document.getElementById("addons").innerHTML = addons * totalStay;

  // calculate DISCOUNT
  if (militory) {
    discounts = (pernight + addons) * 0.05;
  }
  if (premiummember) {
    discounts = (pernight + addons) * 0.1;
  }
  document.getElementById("discounts").innerHTML = discounts * totalStay;

  // calculate TAXES FLAT 20 % ON AMOUNT AFTER DISCOUNT
  taxes = (pernight + addons - discounts) * 0.2;
  document.getElementById("taxes").innerHTML = taxes * totalStay;

  // calculate final cost

  totalDue = pernight + addons - discounts + taxes;
  document.getElementById("totalDue").innerHTML = totalDue * totalStay;
}

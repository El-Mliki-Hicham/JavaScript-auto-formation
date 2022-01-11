const xReq = new XMLHttpRequest();
xReq.onload = function() {
  const xData = JSON.parse(this.responseText);
  document.getElementById("para").innerHTML = xData.firstName;
}
xReq.open("GET", "ex2.txt");
xReq.send()
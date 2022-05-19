function search() {
  const input = document.getElementById("searchComponent");
  const filter = input.value.toUpperCase();

  var cardBody = document.querySelectorAll(".card--container");
  var headTitle = document.getElementsByTagName("h5");

  //   console.log(headTitle);
  for (i = 0; i < headTitle.length; i++) {
    const tag = headTitle[i];
    const value = tag.textContent || tag.innerText;
    // console.log(value);
    if (value.toUpperCase().indexOf(filter) > -1) {
      cardBody[i].style.display = "";
    } else {
      cardBody[i].style.display = "none";
    }
  }
}

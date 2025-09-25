// function get innerText
function getInnerTextValue(id) {
  const value = parseInt(document.getElementById(id).innerText);

  return value;
}
// set innerText

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Heart Icons Functionalities

const hearts = document.getElementsByClassName("card-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    const value = getInnerTextValue("nav-heart");

    const setValue = value + 1;

    setInnerText("nav-heart", setValue);
  });
}

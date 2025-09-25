let History = [];
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

// call -1 button functionality

document.getElementById("call-1").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling National Emergency 999");

  const data = {
    name: "National Emergency Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});

// call-2 button functionality

document.getElementById("call-2").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Police 999");

  const data = {
    name: "Police Helpline Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-3 button functionality

document.getElementById("call-3").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Fire Service 999");

  const data = {
    name: "Fire Service Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-4 button functionality

document.getElementById("call-4").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Ambulance 1994-999999");

  const data = {
    name: "Ambulance Service",
    number: "1994-999999",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-5 button functionality

document.getElementById("call-5").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Women & Child Helpline 109");

  const data = {
    name: "Women & Child Helpline",
    number: "109",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-6 button functionality

document.getElementById("call-6").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Anti-Corruption 106");

  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-7 button functionality

document.getElementById("call-7").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Electricity Helpline 16216");

  const data = {
    name: "Electricity Helpline",
    number: "16216",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-8 button functionality

document.getElementById("call-8").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Brac Helpline 16445");

  const data = {
    name: "Brac Helpline",
    number: "16445",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});
// call-9 button functionality

document.getElementById("call-9").addEventListener("click", function () {
  const coinValue = getInnerTextValue("coin");
  if (coinValue < 20) {
    alert(
      "❌ Insufficient balance. You need at least 20 coins to make a call."
    );
    return;
  }

  const coinSet = coinValue - 20;

  setInnerText("coin", coinSet);

  alert("Calling Bangladesh Railway Helpline 163");

  const data = {
    name: "Bangladesh Railway Helpline",
    number: "163",
    date: new Date().toLocaleTimeString(),
  };
  History.push(data);

  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";

  for (const his of History) {
    const div = document.createElement("div");

    div.innerHTML = `
       <div
          class="rounded-[8px] bg-[rgba(250,250,250,1)] p-4 min-h[83px] w-full my-[8px] flex justify-between items-center"
        >
          <div class="par-text">
            <h1 class="text-[rgba(17,17,17,1)] text-[18px] font-semibold">
              ${his.name}
            </h1>

            <p class="text-[rgba(92,92,92,1)] text-[18px] font-normal">
              ${his.number}
            </p>
          </div>
          <div class="time text-[rgba(17,17,17,1)] text-[18px] font-normal">
            ${his.date}
          </div>
        </div>

      `;

    mainContainer.appendChild(div);
  }
});

// clear button functionality

document.getElementById("clear-btn").addEventListener("click", function () {
  const mainContainer = document.getElementById("container");

  mainContainer.innerText = " ";
  History = [];

});

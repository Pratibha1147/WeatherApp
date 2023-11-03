console.log("Hello");
const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let city = "mandsaur";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather -> ", data);

    renderWeatherInfo(data);
  } catch (err) {
    console.warn(err);
  }
}

async function getCustomWeather() {
  try 
  {
    let latitude = 24.0667;
    let longitude = 75.0667;

    let result =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
      `);

    let data = await result.json();
    console.log("Weather -> ", data);
    renderWeatherInfo(data);
  } 
  catch (err) 
  {
    console.log(err);
  }
}

function switchTab(clickedTab)
{
   apiErrorContainer.classList.remove("active");
   
   if(clickedTab != currentTab)
   {
     currentTab.classList.remove("current-tab");
     currentTab = clickedTab;
     currentTab.classList.add("current-tab");

     if(!searchForm.classList.contains("active"))
     {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.remove("active");
     }
     else
     {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
       // getFromSessionStorage();

     }
   }
}

function getLocation()
{
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else
  {
    console.log("No geolocation support");
  }
}

function showPosition(position)
{
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}
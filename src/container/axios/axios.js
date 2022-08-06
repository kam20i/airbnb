import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://airbnb19.p.rapidapi.com/api/v1/test',
  headers: {
    'X-RapidAPI-Key': 'c612b20584msh3135c1251c79814p1f4706jsn3fdc5162b6e0',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

export const fuck = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
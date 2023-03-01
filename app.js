const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e52c01534amshb66c4f51e499489p171cb7jsn4be06448604f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
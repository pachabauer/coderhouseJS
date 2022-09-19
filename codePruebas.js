const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55af192985msh99f1a08ffa2d0aap1a97edjsn01946fb8f19c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/teams?search=estudiantes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
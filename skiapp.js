	var Enter = document.querySelector('.Enter');
	var inputValue = document.querySelector('.inputValue');
	var nameCity = document.querySelector('.nameCity');
	var desc = document.querySelector('.desc');
	var temp = document.querySelector('.temp');
	var decision = document.querySelector('decision');



	Enter.addEventListener('click',function(){
		fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=8bfae18f50802ea1fa043642507f8c5d')
		.then(response => response.json())
		.then(data => {
			var nameValue = "Here's what "+ data['name'] + ' looks like.';
			var tempValue = 'The current temperature is ' +data['main']['temp'] + " degrees";
			var descValue = data['weather'][0]['description'];
		
			nameCity.innerHTML = nameValue;
			temp.innerHTML = tempValue;
			desc.innerHTML = descValue;
			//if (tempValue < ) {
			//	var decisionLine = 'It looks like its a great day to hit the slopes.'
			//}
			//decision.innerHTML = decisionLine;
	})

	.catch(err => alert('Wrong City'))
	});
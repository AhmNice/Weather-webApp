const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&alt=43&start=2020-01-01&end=2020-12-31');
xhr.setRequestHeader('x-rapidapi-key', '9023be8da2msh62fcee973e28508p1d1035jsn519344908b4c');
xhr.setRequestHeader('x-rapidapi-host', 'meteostat.p.rapidapi.com');

xhr.send(data);
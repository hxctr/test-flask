let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'https://appmedia.onrender.com');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS');

function post() {
	var username = document.querySelector("#username").value;
	var headline = document.querySelector("#headline").value;
	var body_post = document.querySelector("#body_post").value;

	fetch('https://appmedia.onrender.com/add_post', {
		method: 'POST',
		headers: headers,
		body: `{  
					"username":"${username}",
					"headline":"${headline}",
    				"body_post":"${body_post}"
                     }`,
	})
		.then(response => response.json())
		.then(data => {
			alert(data.data)
		})
		.catch((error) => {
			console.error('Error:', error);
		});

}
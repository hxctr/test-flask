let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'https://appmedia.onrender.com');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS');

function getSignIn() {
	//Obtener el valor de los inputs
	var username = document.querySelector("#username").value;
	var password = document.querySelector("#password").value;
	//Mando a hacer la peticion
	fetch('https://appmedia.onrender.com/postLogin', {
		method: 'POST',
		headers: headers,
		body: `{
    				"username":"${username}",
        			"password":"${password}"
                     }`,
	})

		.then(response => response.json())
		.then(data => {
			if (data.data == "admin") {
				alert('Sign In as admin')
				window.location.replace('https://appmedia.onrender.com/admin')
			}
			else if (data.data == "true") {
				console.log(data.username)
				window.location.replace('https://appmedia.onrender.com/dashboard')
			} else {
				alert('Invalid credentials')
			}

		})
		.catch((error) => {
			console.error('Error:', error);
		});

}

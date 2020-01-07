var inputElement = document.querySelector('input');
var ulElements = document.querySelector('ul');

function adicionar() {
	var novoInput = inputElement.value;
	axios.get('https://api.github.com/users/' + novoInput + '/repos')
		.then(function(response) {
			for (data of response.data) {
				var li = document.createElement('li');
				var text = document.createTextNode(data.name);
				li.appendChild(text);
				ulElements.appendChild(li);
			};
		})
		.catch(function(error) {
			console.warn(error);
		});
}

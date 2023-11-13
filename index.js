const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });
    function submitData(name, email) {
      const url = 'http://localhost:3000/users';
      const data = { name, email };
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
    
      return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newId = data.id;
        const newElement = document.createElement('p');
        newElement.textContent = newId;
        document.body.appendChild(newElement);
      })
      .catch(error => {
        console.log(error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
      });
    }
        

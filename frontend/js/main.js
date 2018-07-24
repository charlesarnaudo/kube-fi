function getKubeLatency() {
    axios.get('http://localhost:8080/api/')
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.getElementById("demo1").innerHTML = response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("demo1").innerHTML = "Could not retrieve stats!";
        })

}

// We set the interval of getKubeLatency to 2 seconds
setInterval(getKubeLatency, 2000);

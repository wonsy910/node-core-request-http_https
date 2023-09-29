const https = require("https");

const url = ""; //put api url here.

https.request(url, (response) => {
	let data = "";
	response.on("data", (chunkData) => {
		data = data + chunckData.toString(); //bring data from the api and convert it into String, then overlap on empty "data"
	});
	response.on("end", () => {
		const content = JSON.parse(data); //Important data section from the source(api)
		console.log(content);
	});
});

request.on("error", (error) => {
	console.log("An error", error); //Error scenario
});

request.end();

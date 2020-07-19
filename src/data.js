import React from "react";

const codeSnippets = [
	{
		id: 0,
		title: "Get a random #",
		uses:
			"One particularly helpful use for this code snippet is if you want a different result from an API to populate each time a button is clicked or the page is reloaded. Setting the API id to a variable that holds the random # will ensure that a new bit of data will be pulled each time the function runs",
		codeLine1:
			"const apiResults = results.data.id // adjust as necessary depending on the api",
		codeLine2: "const number = Math.random() * apiresults.length",
		codeLine3: "let indexNumber = Math.floor(number)",
		codeLine4: "const objectID = apiResults[indexNumber]",
	},
];

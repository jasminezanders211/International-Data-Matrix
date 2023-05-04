export default function getCountryGovernment(id: string) {
	// import the contents of any file within the countryTopics directory by its {id} then exports it
	return import(`../countryTopics/${id}/government.txt?raw`).then(
		(mod) => mod?.default,
	) //change the result of what is read form .txt file
	// without this the import would return the module object with excess information
}

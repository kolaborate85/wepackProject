function template(obj){
	return `
		<strong>confidence:</strong> ${obj.confidence}<br>
        <strong>irony:</strong> ${obj.irony}<br>
        <strong>subjectivity:</strong> ${obj.subjectivity}<br>
		`;
}

export default template
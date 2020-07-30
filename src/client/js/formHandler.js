import template from './result-template.js'

const form = document.getElementById("textForm")
if (form){
    form.addEventListener('submit', handleSubmit)
}

const domElements = {
	text: document.getElementById('name'),
  	results: document.getElementById('results')
};


function placeInDom(HTML){
 	domElements.results.innerHTML = HTML;
	
}



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = domElements.text.value;
    

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/process?text='+formText)
    .then(res => res.json())
    .then(function(res) {
        placeInDom(template(res));
    })
}

export { handleSubmit, domElements }



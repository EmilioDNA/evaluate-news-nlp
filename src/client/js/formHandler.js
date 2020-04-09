function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (formText.length === 0 || !Client.isValidURL(formText)) {
        alert("Please introduce a valid URL in the field");
    } else {
        console.log(formText);
        console.log("::: Form Submitted :::")
     
        fetch('http://localhost:8081/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formText})
        })
        .then(res => res.json())
        .then(function(res) {
            Client.addResults(res.polarity, res.subjectivity, res.text);
        })

    }
}



const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }

}






export { handleSubmit }
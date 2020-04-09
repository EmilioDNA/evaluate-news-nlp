
const addResults = (polarity, subjectivity, text) => {
    const results = document.getElementById('results');
    const polarityContainer = document.createElement('H2');
    const subjectivityContainer = document.createElement('H3');
    const textEvaluated = document.createElement('P');
    polarityContainer.innerHTML = `Polarity: ${polarity}`;
    subjectivityContainer.innerHTML = `Subjectivity: ${subjectivity}`;
    textEvaluated.innerHTML = text;
    results.appendChild(polarityContainer);
    results.appendChild(subjectivityContainer);
    results.appendChild(textEvaluated);
}


export { addResults } 
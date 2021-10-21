export function textAnalyzer(e) {
    e.preventDefault()

    let url = document.getElementById('url').value

    Client.urlChecker(url)
    ? postText('/analyze', {url: url}).then(data => updateUI(data))
    : null
}

const postText = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try {
        const newData = await response.json()
        console.log(newData)
        return newData
    } catch (err) {
        console.log("error", err)
    }
}

const updateUI = (data) => {
  document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
  document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
  document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
}
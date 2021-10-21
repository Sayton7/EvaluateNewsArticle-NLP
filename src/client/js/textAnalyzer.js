export function textAnalyzer(e) {
    e.preventDefault()

    let url = document.getElementById('url').value

    Client.urlChecker(url)
    ? postText('/analyze', {url: url})
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
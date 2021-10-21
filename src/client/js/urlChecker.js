export function urlChecker(input) {
    let url

    try {
        url = new URL(input)
    } catch {
        url = false
    }

    if (!url || (url.protocol !== ("https:" || "http:"))) {
        alert('This is not a valid URL!')
        return false
    } else {
        return true
    }
}
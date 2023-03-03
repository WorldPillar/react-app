const rootUrl = 'http://localhost:8000/api'

export async function getImageFile(image_name) {
    try {
        const response = await fetch(`${rootUrl}/images/${image_name}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'image/jpeg'
            }
        })
        const blob = await response.blob()
        return [URL.createObjectURL(blob), null];
    }
    catch (error) {
        console.error(`get: error occurred ${error}`);
        return [null, error]
    }
} 
export const fetchUsingPromise = (URL) => {
    return new Promise((resolve, reject) => {
        fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`ERROR! Status: ${res.status}`);
            }
            return response.json();
        })
        .then(data => {
            resolve(data.slice(0,7));
        })
        .catch(error => {
            reject(error);
        })
    })
    
    }
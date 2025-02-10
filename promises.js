export const fetchUsingPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(URL)
        .then(response => {
            if (Ires.ok) {
                throw new Error('Error! Status: ${res.status}');
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
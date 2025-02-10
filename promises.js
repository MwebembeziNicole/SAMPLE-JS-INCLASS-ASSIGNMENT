export const fetchUsingPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(URL)
        .then(resp => {
            if (Ires.ok) {
                throw new Error('Error! Status: ${res.status}');
            }
            return resp.json();
        })
        .then(data => {
            resolve(data.slice(0,7));
        })
        .catch(error => {
            reject(error);
        })
    })
    
    }
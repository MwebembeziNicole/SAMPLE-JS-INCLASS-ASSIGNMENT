export const fetchUsingCallback = (URL, callback) =>{
    fetch(URL)
    .then(res => {
        if(!res.ok){
            throw new Error(`Error! Status: ${res.status}`);
            }
            return res.json();
    })
    .then(data => callback(null, data.slice(0,5)))
    .catch(error => callback(error,null));
}
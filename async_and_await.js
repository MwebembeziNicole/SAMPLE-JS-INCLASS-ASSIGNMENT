export const fetchUsingAsyncAwait = async (URL) => {
    try{
        const response = await fetch(URL);
        if (!response.ok){
            throw new Error(`Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.slice(0,7);
    }
    catch(error){
        throw new Error(error);
    }

}
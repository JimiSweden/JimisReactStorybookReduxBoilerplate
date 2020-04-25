import { handleResponse, handleError } from "./apiUtils";

/**
 *  IMPORTANT  -  REACT_APP_API_URL 
 *  is set in .env file. 
 */
const baseUrl = process.env.REACT_APP_API_URL + "/myDummyObjects/";


export function getMyDummyObjects() {
    console.log('baseUrl: ', baseUrl);
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveDummyObject(dummyObject) {
    return fetch(baseUrl + (dummyObject.id || ""), {
        // POST for create, PUT to update when id already exists.
        method: dummyObject.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dummyObject)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteDummyObject(dummyObjectId) {
    return fetch(baseUrl + dummyObjectId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}

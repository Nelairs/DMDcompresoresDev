const BASE_URL = import.meta.env.VITE_APP_API_URL;

export function getVariadores() {
    return BASE_URL + "api/variadores"
} 

export function postNewVariador() {
    return BASE_URL + "api/formPost"
} 

export function postNewStatus() {
    return BASE_URL + "api/update"
} 

export function postFinish() {
    return BASE_URL + "api/finish"
} 

export function postUser() {
    return BASE_URL + "login"
}

export function pruebaProtected() {
    return BASE_URL + "protected"
}
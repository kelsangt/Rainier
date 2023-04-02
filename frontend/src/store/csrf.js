export function storeCSRFToken(response){
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
        sessionStorage.setItem('X-CSRF-Token', token)
    }
}

export async function restoreCSRF() {
    const res = await csrfFetch('/api/session');
    storeCSRFToken(res);
    return res;
}



async function csrfFetch(url, options = {}) {
    options.headers ||= {};
    options.method ||= 'GET'
    if (options.method.toUpperCase() !== 'GET'){
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
        options.headers['Content-Type'] ||= 'application/json';
    }
    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
} 

export default csrfFetch;
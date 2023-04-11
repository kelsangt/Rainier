import csrfFetch from "./csrf";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user 
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

const storeCSRFToken = res => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken){
        sessionStorage.setItem("X-CSRF-Token", csrfToken);
    }
}

const storeCurrentUser = user => {
    if (user){
        sessionStorage.setItem("currentUser", JSON.stringify(user));
    } else {
        sessionStorage.removeItem("currentUser");
    }
}

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch("/api/session");
    storeCSRFToken(res);
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setUser(data.user));
    return res;
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential, 
            password 
        })
    });
    const data = await res.json(); 
    storeCurrentUser(data.user);
    dispatch(setUser(data.user));
    return res;
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
      method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeUser());
    window.location.reload();
    return res;
};

export const signup = (user) => async (dispatch) => {
    const { name, email, password } = user;
    const res = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setUser(data.user));
    return res;
};


const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        case REMOVE_USER:
            return { ...state, user: null};
        default: 
            return state; 
    }
};

export default sessionReducer;
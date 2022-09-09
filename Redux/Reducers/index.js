const loginInfo = [false, {
    userName: null,
    email: null,
    pfp: null
}]

export const LoginInfoReducer = (state = loginInfo, action) => {
    switch (action.type) {
        case 'log-on': return [true, {...action.loginInfo}]
        case 'log-off': return [false, {...loginInfo}]
        default: return state
    }
}
const loginInfo = [false, {
    userName: null,
    email: null,
    pfp: null
}]

export const LoginInfoReducer = (state = loginInfo, action) => {
    switch (action.type) {
        case 'log-on': return [true, {...action.loginInfo[1]}]
        case 'log-off': return [false, {...loginInfo}]
        default: return state
    }
}

export const ProfileDropDownReducer = (state = false, action) => {
    switch (action.type) {
        case 'PfpDropDown': return !state
        default: return state
    }
}
export const NewPostReducer = (state = false, action) => {
    switch (action.type) {
        case 'NewPost': return !state
        default: return state
    }
}
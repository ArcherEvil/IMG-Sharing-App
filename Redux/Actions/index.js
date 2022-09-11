export const loginAction = (data) => {

    if (data === null) {

        return {
            type: 'log-off'
        }
    }
    else {
        return {
            type: 'log-on',
            loginInfo: data
        }
    }
}

export const DropDownAction = () => {
    return {
			type: 'PfpDropDown',
		};
}
export const NewPostAction = () => {
    return {
			type: 'NewPost',
		};
}

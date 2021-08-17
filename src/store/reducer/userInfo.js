function userInfo(userInfo={
    avatar:""
}, action) {
    switch(action.type) {
        case "USERINFO_UPDATE":
            return {
                avatar:action.avatar,
            };
        default:
            return userInfo;
    }
}

export default userInfo;
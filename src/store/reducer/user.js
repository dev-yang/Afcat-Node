function user(user = {
  profile: {},
  articles: [],
  replies: []
}, action) {
  switch (action.type) {
    case "USER_PROFILE":
      return {
        profile: action.data||{},
      };
    case "USER_ARTICLES":
      return {
        articles: action.data.articles||[],
      };
    case "USER_REPLIES":
      return {
        replies: action.data.articles||[],
      };
    default:
      return user;
  }
}

export default user;

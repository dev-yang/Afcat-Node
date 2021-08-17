function user(user = {
  profile: {}
  // articles: [],
  // replies: []
}, action) {
  switch (action.type) {
    case "USER_PROFILE":
      return {
        profile: action.profile,
      };
    // case "USER_ARTICLES":
    //   return {
    //     articles: action.articles.articles,
    //   };
    // case "USER_REPLIES":
    //   return {
    //     replies: action.replies.articles,
    //   };
    default:
      return user;
  }
}

export default user;

function userReplies(userReplies = {
     replies: []
  }, action) {
    switch (action.type) {
      case "USER_REPLIES":
        return {
          replies: action.replies.articles,
        };
      default:
        return userReplies;
    }
  }
  
  export default userReplies;
  
function userArticles(userArticles = {
    articles: [] 
  }, action) {
    switch (action.type) {
      case "USER_ARTICLES":
        return {
          articles: action.articles.articles,
        };
       
      default:
        return userArticles;
    }
  }
  
  export default userArticles;
  
function category(category={
    data:[]  
   },action) {
    switch (action.type) {
       case "CATEGORY_LOAD":
          return {
            data:action.data, 
          }
        
    }
    return category;
  }
  
  export default category;

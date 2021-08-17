function replies(replies={
    data:[] 
},action) {
    switch (action.type) {
       case "REPLIES_LOAD":
          return {
            data:action.data, 
          }
        
    }
    return replies;
  }
  
  export default replies;

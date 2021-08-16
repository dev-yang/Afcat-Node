function topic(topic={
    data:[]   
   },action) {
    switch (action.type) {
       case "TOPIC_LOAD":
          return {
            data:action.data
          } 
          default:
    }
    return topic;
  }
  
  export default topic;

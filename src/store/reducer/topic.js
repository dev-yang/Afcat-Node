function topic(topic={
    data:[] 
  },action) {
    console.log(action.data );
    switch (action.type) {
       case "TOPIC_LOAD":
          return {
            data:action.data 
          }
    }
    return topic;
  }
  
  export default topic;

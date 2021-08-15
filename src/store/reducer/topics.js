function topics(topics = {
  data: [],
  loading: true
}, action) {
  switch (action.type) {
    case "TOPICS_LOADING":
      return {
        data: [],
        loading: true
      }
    case "TOPICS_LOAD":
      return {
        data: action.data,
        loading: false
      }
    case "TOPICS_SAVE":
      return {
        data: action.data,
        loading: false
      }
    default:
  }
  return topics;
}

export default topics;
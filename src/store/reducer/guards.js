function guards(guards={
    isLogin:false,
    prevPath:""
},action) {
  //debugger;
    switch (action.type) {
      case "GUARDS_LOGIN":
        return {
          isLogin:true,
          prevPath:guards.prevPath,
          user: action.user
        }
      case "GUARDS_LOGINOUT":
        return {
          isLogin:false,
          prevPath:'',
          user: ''
        }
      case "GUARDS_PATH":
        return {
          isLogin:false,
          prevPath:action.path
        }
    }
    return guards;
}

export default guards;


/**
 * 
 * reducer(prevState,action)
 * prevState 是上次计算的值
 * action是操作类型
 */
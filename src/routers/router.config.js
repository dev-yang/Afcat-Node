
import IndexPage from "./index/index";
import UndefinedPage from "./404/index";
import LoginPage from "./login";
import AboutPage from "./about/index";
import GetStartPage from "./getstart";
import CreateArticlePage from "./article/index";
import TopicPage from "./topic/index";
import { lazy, Suspense } from "react";
import UnRead from './unread/unread';
import SignUpPage from "./signup";
const APIPage = lazy(()=>import("./api/index"));


const router_list = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <IndexPage {...props} />
    }
  }, {
    path: "/getstart",
    exact: true,
    render(props) {
      return <GetStartPage {...props} />
    }
  }, {
    path: "/api",
    exact: true,
    render(props) {
      return <Suspense fallback={<h1>视图请求中</h1>}>
          <APIPage {...props} />
      </Suspense>
    }
  }, {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props} />
    }
  },
  {
    path: "/signup",
    exact: true,
    render(props) {
      return <SignUpPage {...props} />
    }
  },
  {
    path: "/login",
    exact: true,
    render(props) {
      return <LoginPage {...props} />
    }
  }, {
    path: "/topic/create",
    exact: true,
    render(props) {
      return <CreateArticlePage {...props} />
    }
  }, {
    path: "/topic",
    //exact: true,
    render(props) {
      return <TopicPage {...props} />
    }
  }/* , {
    path: "/unread",
    exact: true,
    render(props) {
      return <UnRead {...props} />
    }
  }*/,{
    path: "",
    render(props) {
      return <UndefinedPage {...props} />
    }
  }
];

/**
 * , {
    path: "/set",
    exact: true,
    render(props) {
      return <UnRead {...props} />
    }
  }, {
    path: "/loginout",
    exact: true,
    render(props) {
      return <UnRead {...props} />
    }
  }
  , {
    path: "/registry",
    exact: true,
    render(props) {
      return <UnRead {...props} />
    }
 * 
 * 
 */

const navs = [
  {
    to: "/",
    title: "首页"
  },{
    to: "/getstart",
    title: "新手入门"
  },{
    to: "/api",
    title: "API"
  },{
    to: "/about",
    title: "关于"
  },
  {
    to: "/signup",
    title: "注册"
  },
  {
    to: "/login",
    title: "登录"
  }/*,{
    to: "/registry",
    title: "注册"
  },{
    to: "/set",
    title: "设置"
  },{
    to: "/loginout",
    title: "退出"
  },{
    to: "/unread",
    title: "未读消息"
  }*/
];

export { router_list,navs };

import IndexPage from "./index/index";
import UndefinedPage from "./404/index";
import LoginPage from "./login";
import AboutPage from "./about/index";
import GetStartPage from "./getstart";
import CreateArticlePage from "./article/index";
import TopicPage from "./topic/index";
import UserPage from "./user/index"
import { lazy, Suspense } from "react";
import UnRead from './unread/unread';
import SignUpPage from "./signup";
import SettingPage from "./setting";
import SignOutPage from "./signout";
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
  }, 
  {
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
  },
  {
    path:"/setting",
    exact: true,
    render(props) {
      return <SettingPage />
    }
  },
  {
    path:"/signout",
    exact: true,
    render(props) {
      return <SignOutPage />
    }
  },
  {
    path:"/unread",
    exact: true,
    render(props) {
      return <UnRead />
    }
  }
  , {
    path: "/user",
    //exact: true,
    render(props) {
      return <UserPage {...props} />
    }
  },{
    path: "",
    render(props) {
      return <UndefinedPage {...props} />
    }
  }
];


const navs = [
  {
    to: "/",
    title: "首页"
  },{
    to: "/getstart",
    title: "新手入门"
  },
  // {
  //   to: "/api",
  //   title: "API"
  // },
  {
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
  }
];

const loginNavs = [
  {
    to: "/",
    title: "首页"
  },{
    to: "/getstart",
    title: "新手入门"
  },
  // {
  //   to: "/api",
  //   title: "API"
  // },
  {
    to: "/about",
    title: "关于"
  },
  // {
  //   to: "/setting",
  //   title: "设置"
  // },
  {
    to: "/unread",
    title: "未读消息"
  },
  {
    to: "/signout",
    title: "退出"
  }
];

export { router_list, navs, loginNavs };


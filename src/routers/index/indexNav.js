import Nav from "../../component/nav";
import qs from "qs";
const indexNavs = [
  {
    to: "/?tab=all",
    title: "全部"
  }/*, {
    to: "/?tab=all",
    title: "精华"
  }*/, {
    to: "/?tab=3",
    title: "分享"
  }, {
    to: "/?tab=1",
    title: "问答"
  },{
    to: "/?tab=2",
    title: "招聘"
  }/*,{
    to: "/?tab=all",
    title: "客户端测试"
  }*/
];
function IndexNav(props) {
  const {tab} = props;
  return <Nav
    data={indexNavs}
    getSelectedKey={() => {   //获取选中！！

      //换另外一种写法
      return indexNavs.findIndex(item => {
        /*let { tab: itemTab } = qs.parse(item.to.substr(2));
        return tab === itemTab;*/
        return '?tab='+tab ===item.to;
      })
    }}
    theme="light"
  />
}

export default IndexNav;
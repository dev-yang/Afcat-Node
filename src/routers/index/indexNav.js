import Nav from "../../component/nav";
import qs from "qs";
const indexNavs = [
  {
    to: "/?tab=all",
    title: "全部"
  }, {
    to: "/?tab=good",
    title: "精华"
  }, {
    to: "/?tab=share",
    title: "分享"
  }, {
    to: "/?tab=ask",
    title: "问答"
  },{
    to: "/?tab=job",
    title: "招聘"
  },{
    to: "/?tab=dev",
    title: "客户端测试"
  }
];
function IndexNav(props) {
  const {tab} = props;
  return <Nav
    data={indexNavs}
    getSelectedKey={() => {
      return indexNavs.findIndex(item => {
        let { tab: itemTab } = qs.parse(item.to.substr(2));
        return tab === itemTab;
      })
    }}
    theme="light"
  />
}

export default IndexNav;
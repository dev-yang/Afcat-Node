import { List, Switch } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLoadTopics } from "../../store/action/topics";

function tabNode(tab){
  switch(tab){
      case 'share':return '分享';
      case 'ask':return '问答';
      case 'job':return '';
      case 'dev':return '';
  }
}
function IndexList(props) {
  const {tab,page} = props;
  const {loading,data} = useSelector(state=>state.topics);  //useSelector;
  const getData = useLoadTopics();

  useEffect(()=>{
    getData(page,tab);
  },[tab,page])
  return <List 
      className="index_list"
      loading={loading}
      dataSource={data}
      renderItem={item=>{
        return  <List.Item>
            <Link to="/">
              <img src={item.author.avatar_url} className="author_img"/>
              <span class="commentCount"><em style={{ color:'#9e78c0'}}>{item.reply_count}</em>/<em>{item.visit_count}</em></span>
              <span className={item.top?'top':(item.good?'good':item.tab)}>
                 {
                   item.top?"置顶":(item.good?'精华':tabNode(item.tab))
                 }
              </span>
              &nbsp;&nbsp;&nbsp;{item.title}
            </Link>
          </List.Item>
      }}
  />
}
export default IndexList;
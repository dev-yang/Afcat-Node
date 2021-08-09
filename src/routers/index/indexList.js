import { List, Switch } from "antd";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLoadTopics } from "../../store/action/topics";
import { Link } from "react-router-dom";

function tabNode(tab){
  switch(tab){
      case 'share':return '分享';
      case 'ask':return '问答';
      case 'job':return '';
      case 'dev':return '';
  }
}

function IndexList(props) {
  const { tab, page } = props;
  const { loading, data } = useSelector(state => state.topics);
  const getData = useLoadTopics();
  const dispatch = useDispatch();

  useEffect(() => {
    getData(page, tab)
  }, [tab, page])

  return <List
    className="index_list"
    loading={loading}
    dataSource={data}
    renderItem={item => {
      return <List.Item>
         <Link to="/">
              <img src={item.author.avatar_url} className="author_img"/>
              <span class="commentCount"><em style={{ color:'#9e78c0'}}>{item.reply_count}</em>/<em>{item.visit_count}</em></span>
              <span className={item.top?'top':(item.good?'good':item.tab)}>
                  {
                    item.top?"置顶":(item.good?'精华':tabNode(item.tab))
                  }
              </span>
              &nbsp;&nbsp;&nbsp;{item.title}&nbsp;&nbsp;&nbsp;
              {item.top ?
                <span class="put_top" onClick={() => { cancelTop(item.id) }}>取消置顶</span> :
                <span class="put_end" onClick={() => { top(item.id) }}>置顶</span>
              }
          </Link>
      </List.Item>
    }}
  />
  function cancelTop(id) {
    //获取当前页面的data，然后重新排序
    const topData = [];//置顶data
    const endData = [];//非置顶data
    data.map((item, index) => {
      if (item.id == id) {
        item.top = false;
        endData.push(item);
      } else {
        item.top ? topData.push(item) :
          endData.push(item);
      }
    })
    const lastData = [...topData, ...endData];
    console.log(lastData);
    dispatch({
      type: "TOPICS_SAVE",
      data: lastData
    })
  }
  function top(id) {
    //获取当前页面的data，然后重新排序
    const topData = [];//置顶data
    const endData = [];//非置顶data
    data.map((item, index) => {
      if (item.id == id) {
        item.top = true;
        topData.push(item);
      } else {
        item.top ? topData.push(item) :
          endData.push(item);
      }
    })
    const lastData = [...topData, ...endData];
    console.log(lastData);

    dispatch({
      type: "TOPICS_SAVE",
      data: lastData
    })
  }
}

export default IndexList;
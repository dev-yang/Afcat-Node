import { List, message , Switch } from "antd";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLoadTopics } from "../../store/action/topics";
import { Link,useLocation } from "react-router-dom";
import { http1,indexNavHttp } from "../../store/action/config";
import qs from "qs";
function tabNode(tab){
  switch(tab){
      case 1:return '问答';
      case 2:return '招聘';
      case 3:return '分享';
      //case 4:return '';
  }
}
function tabClassNode(tab){
  switch(tab){
    case 1:return 'ask';
    case 2:return 'ask';
    case 3:return 'share';
    //case 4:return '';
  }
} 

function IndexList(props) {
  const { tab, page } = props;
  const { loading, data } = useSelector(state => state.topics);
  const getData = useLoadTopics();
  //const dispatch = useDispatch();
  const { search } = useLocation();
  useEffect(() => {
    getData(page, tab)
  }, [tab, page])

  return <List
    className="index_list"
    loading={loading}
    dataSource={data}
    renderItem={item => {
      return <List.Item>
            <div>
             <Link to={'/user/'+item.userId}><img src={item.avatar} className="author_img"/></Link>
              <span className="commentCount"><em style={{ color:'#9e78c0'}}>{item.replyCount}</em><em style={{fontSize:"12px"}}>{item.viewCount}</em></span>
              <span className={item.isTop==1?'top':tabClassNode(item.categoryId)}>
                {/*(item.categoryId?'good':item.tab)*/}
                  {
                    item.isTop===1?"置顶":tabNode(item.categoryId)
                  }
              </span>
              <Link to={'/topic/'+item.id}>&nbsp;&nbsp;&nbsp;{item.title}&nbsp;&nbsp;&nbsp;</Link>
          </div>
      </List.Item>
    }}
  />
  /**
   * function cancelTop(id) {
    //获取当前页面的data，然后重新排序
    const topData = [];//置顶data
    const endData = [];//非置顶data
    data.map((item, index) => {
      if (item.id == id) {
        item.isTop = 0;
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
   * 
   */
  
  /**
   * function top(id) {
    //获取当前页面的data，然后重新排序
    const topData = [];//置顶data
    const endData = [];//非置顶data
    data.map((item, index) => {
      if (item.id == id) {
        //item.top = true;
        item.isTop = 1;
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
   * 
   */
  
  
  function isTop(id,isTop) {
   
    http1.patch(`/${id}/top`, [isTop=isTop] )
      .then(function (response) {
        const reply = response.data;
        const code = reply.code;
        if (code === 0) {
          //成功请求
          const { tab } = qs.parse(search.slice(1));
          indexNavHttp.get(`/?tab=${tab}`)
        }
      })
      .catch(function (error) {
        message.error('置顶错误！');
      });

  }
  
}

export default IndexList;
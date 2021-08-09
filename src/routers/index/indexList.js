import { List } from "antd";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLoadTopics } from "../../store/action/topics";

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
        {item.title}
        {item.top ?
          <span class="put_top" onClick={() => { cancelTop(item.id) }}>取消置顶</span> :
          <span class="put_end" onClick={() => { top(item.id) }}>置顶</span>
        }
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
import { Card} from "antd";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetReplys } from "../../store/action/getReplys";
import { Link,useLocation } from "react-router-dom"; 
import { avatatHttp } from "../../store/action/config";
 

function TopicComment(props) {
  const id = useLocation().pathname.split('/')[2];
  const getReplys = useGetReplys();
  const { data } = useSelector(state=>state.replies);
  useEffect(() => {
    getReplys(id);
  },[]);
  
  if (!data.replies) {
     return <div></div>;
  } 
  const replies = data.replies;
  if(replies.length === 0){
     return <div></div>;
  }
  let count = data.count;
  const  getMoreComment=(count) => {
      getReplys(id,1,count);
   }
  //let avatatHttp = 'http://39.99.151.246/public/avatar/';
   
  return ( <Card
        type="inner"
        title="回复"
      >

        {data.replies.map((item, index) => {
          return <Comment
              key ={index}
               
              author={<Link to={'/user/'+item.userId}><span className="authorName">{item.username && item.username}</span></Link>}
              avatar={
                <Avatar
                  src={item.avatar?item.avatar.indexOf('https') !== -1?item.avatar:avatatHttp+item.avatar:''}
                  alt={item.avatar}
                />
              }
              content={  item.content  }
              datetime={
                <Tooltip title={moment( item.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment(item.createdAt ).fromNow()}</span>
                </Tooltip>
              }
          />
           
        })}
        {count > 5?<button className="getMoreComment" onClick={() => { getMoreComment(count); }}>查看更多{'>>>'}</button>:"" } 
      </Card>
     
  );
}
export default TopicComment;
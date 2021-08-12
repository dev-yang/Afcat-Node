import { Card, Divider, List, Switch } from "antd";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetReplys } from "../../store/action/getReplys";
//import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useLocation } from "react-router-dom"; 
 

function TopicComment(props) {
  const id = useLocation().pathname.split('/')[2];
  const getReplys = useGetReplys();
  const { data } = useSelector(state=>state.replies);
  useEffect(() => {
    getReplys(id);
  }, [id]) 
  
  if (!data.replies) {
     return <div></div>;
       
  } 
  
  const replies = data.replies;
  if(replies.length == 0){
     return <div></div>;
  }
  
   
  let count = data.count;
  const  getMoreComment=(count) => {
      getReplys(id,1,count);
   }

  return ( <Card
        type="inner"
        title="回复"
      >

        {data.replies.map((item, index) => {
          return <Comment
              key ={index}
              author={<a className="authorName">{item.username}</a>}
              avatar={
                <Avatar
                  src={item.avatar}
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
        {count > 5?<button className="getMoreComment" onClick={() => { getMoreComment(count); }}>查看更多>>></button>:"" } 
      </Card>
     
  );
}
export default TopicComment;
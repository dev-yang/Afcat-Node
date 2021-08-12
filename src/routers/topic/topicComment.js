import { Card, Divider, List, Switch } from "antd";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { useState,useEffect } from "react";
//import React, { createElement, useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import { useGetReplys } from "../../store/action/getReplys";
//import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
 
function TopicComment(props) {
  //const { data } = props;
  const id ="1003";
  const getReplys = useGetReplys();
  const { data } = useSelector(state=>state.replies);
  useEffect(() => {
    getReplys(id);
  }, [id]) 
  
  if (!data.replies) {
     return <div>暂无回复</div>;
       
  } 
  const replies = data.replies;
  if(replies.length == 0){
     return <div></div>;
  }
  
  return (
    <div className="wrap">
      <Card
        type="inner"
        title="回复"
      >

        {replies.map((item, index) => {
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
          {/* <div className="topic_content"
                      dangerouslySetInnerHTML={{
                          __html: item.content 
                      }}
                  >

                  </div> */}
        })}

      </Card>
    </div>
  );
}
export default TopicComment;
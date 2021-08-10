import { Card, Divider, List, Switch } from "antd";
import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
//import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
 
function TopicComment(props) {
  const { data } = props;
  const replies = data.replies;
  console.log(replies);
  if (!replies) {
    return <div>暂无回复</div>
  }
    
  return (
    <div className="wrap">
      <Card
        type="inner"
        title="回复"
      >

        {replies.map((item, index) => {
          return <Comment
              author={<a className="authorName">{item.author.loginname}</a>}
              avatar={
                <Avatar
                  src={item.author.avatar_url}
                  alt={item.author.loginname}
                />
              }
              content={  
                  
                 <div className="topic_content"
                      dangerouslySetInnerHTML={{
                          __html: item.content 
                      }}
                  >

                  </div>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
          />
        })}

      </Card>
    </div>
  );
}
export default TopicComment;
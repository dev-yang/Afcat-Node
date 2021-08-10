import { Card,Divider  } from "antd";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadTopic } from "../../store/action/topic";
import  TopicComment  from "./topicComment";
import  TopComment from "./topComment";
import  AddTopicComment  from "./addTopicComment";

import "../../static/css/topic.css"; 
import { useLocation } from "react-router-dom";

function TopicPage(props) {
    //const { id } = props;
    const id = useLocation().pathname.split('/')[2];
    const {data} = useSelector(state=>state.topic);
    const getData = useLoadTopic();
    useEffect(() => {
        getData(id);
    }, [id])

    if (!data) {
        return <div>暂无数据</div>
    }

    const content_inner = data.content ;
    const author = data.author;
    const replies = data.replies;
     
     
    return <div className="view">
        <TopComment
              data = { data }
        />
        <TopicComment 
              data = { data }
        />
        <AddTopicComment />

        
    </div>


    
}
export default TopicPage;





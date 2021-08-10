import { Card,Divider  } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadTopic } from "../../store/action/topic";
import  TopicComment  from "./topicComment";
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
    console.log(data);
    const content_inner = data.content ;
    //const author = data.author;
   
    return <div className="view">
        <div className="wrap">
             <div className="topic_top">
                 <div className="topic_title">
                     <h1>{data.title}</h1>
                 </div>
                 <div className="topic_list">
                     <ul>
                         <li>发布于 {data.create_at}</li>
                         {/* <li>作者 {data.author.loginname}</li> */}
                         <li>{data.visit_count} 次浏览</li>
                         <li>来自{data.tab}</li>
                     </ul>
                 </div>

             </div>
             <Divider />
             <div className="topic_content" 
                dangerouslySetInnerHTML={{
                __html: content_inner
                }}
             >
                
             </div>
        </div>

        <TopicComment 
            value = {data.replies}
        />
        <AddTopicComment />

        
    </div>


    
}
export default TopicPage;





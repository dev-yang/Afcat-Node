import ReactDom from 'react-dom';
import { Card,Button  } from "antd";
import { useState } from "react";
//import E from "wangeditor";
import { useDispatch, useSelector } from "react-redux";
import { signHttp } from "../../store/action/config"; 

function AddTopicComment(props){
    const dispatch = useDispatch();
    const { data } = props;
    const [content,setContent] =useState("");
    const id = data.id; 
    const { isLogin } = useSelector(state=>state.guards);
    const addComment = () => {
        signHttp.post('/api/reply', 
           { 'articleId':id, 'content':content },
           { headers: {'token':''}})
          .then(function (res) {
            console.log(res.data)
            //if (code === 0) {
            //   dispatch({
            //     type: "TOPIC_REPLIES"
            //   })
            //} 

          })
          .catch(function (error) {
             
          });
      }
    if(!isLogin){
        return <div></div>;
    }
    return (
        <div className="wrap">
            <Card
                type="inner"
                title="添加回复"
            >
                 <div>
                 <textarea className="comment_content" 
                 rows="6" 
                 cols="120"
                 placeholder="回复内容"
                 value={content}
                 onChange={(e)=>{setContent(e.target.value)}}
                 ></textarea>
 
                 </div>
                  
                 <Button type="primary" 
                    onClick={()=>{ addComment();}}
                 >提交</Button>
            </Card>
       </div>
    )
    
}
export default AddTopicComment;



import ReactDom from 'react-dom';
import { Card  } from "antd";
import { Button } from 'antd';
import { useState } from "react";
//import E from "wangeditor";
 

function AddTopicComment( ){
    const [content,setContent] =useState("");
     
    function addComment(){
        
        
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
                 placeholder="评论内容"
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



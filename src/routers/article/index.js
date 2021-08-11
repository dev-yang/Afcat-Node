import { Button, Card } from "antd";
import { useState } from "react";
import {Link,useHistory} from "react-router-dom";
function CreateArticlePage(props) {
    const [types='all',setTypes] =useState("");
    const [title,setTitle] =useState("");
    const [content,setContent] =useState("");
    const {push} = useHistory();
    return <div className="view">
        <div className="wrap">
            <Card
                title="发布话题"
            >
                <span className="tab-selector">选择版块：</span>
                <select name="tab" id="tab-value" value={types} onChange={(e)=>getSelectedOption(e)}>
                    <option value="">请选择</option>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                    <option value="dev">客户端测试</option>
                </select>
                <span id="topic_create_warn"></span>
                
                <div>
                    <textarea id="article_title" value={title}  placeholder="标题字数10字以上" 
                    onChange={(e)=>{setTitle(e.target.value)}}></textarea>
                </div>
                <div>
                    <textarea id="article_content" value={content} placeholder="内容输入" 
                    onChange={(e)=>{setContent(e.target.value)}}></textarea>
                </div>
                
                <Button type="primary" onClick={()=>{
                    insertArticle();
                }}>提交</Button>
            </Card>
        </div>
    </div>
    function getSelectedOption(e){
        let types=e.target.value;
        console.log(types);
        let wranSpan = document.querySelector("#topic_create_warn");
        if(types=='ask'){
            wranSpan.innerHTML = "<strong>提问时，请遵循《提问的智慧》中提及的要点，以便您更接收到高质量回复。</strong>";
        }else if(types=='job'){
            wranSpan.innerHTML = "<strong>为避免被管理员删帖，发帖时请好好阅读《招聘帖规范》。</strong>";
        }else{
            wranSpan.innerHTML = "";
        }
        setTypes(e.target.value);
    }
    function insertArticle(){
        types==""?
            alert("必须选择一个版块！")
        :
        title.length>=10?
            fetch('https://cnodejs.org/api/v1/topics',{
                method:'post',
                headers:{
                    'Accept':'application/json,text/plain,*/*',/* 格式限制：json、文本、其他格式 */
                    'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
                },
                body:`accesstoken=f7b513a6-fdce-472b-a23f-4ecd5a4fa230&tab=${types}&title=${title}&content=${content}`
            }).then((response)=>{
                //由于找不到真实请求response对应的id，发帖成功后直接返回到?tab=dev
                console.log(response);
                response.status===200 ?
                push(`/?tab=${types}`)
                :
                console.log("发帖失败");
            })
            :alert("标题字数少于10个字");
        
    }
}

export default CreateArticlePage;
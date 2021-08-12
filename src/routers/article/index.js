import { Button, Card, message } from "antd";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signHttp } from "../../store/action/config";
import { useCategory } from "../../store/action/category";
import { useSelector } from "react-redux";
function CreateArticlePage(props) {
    const { isLogin, user = {} } = useSelector(state => state.guards);

    const { data } = useSelector(state => state.category);
    const getData = useCategory();
    useEffect(() => {
        getData();
    }, [])
    console.log(data);
    const [types = 'all', setTypes] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { push } = useHistory();
    return <div className="view">
        <div className="wrap">
            <Card
                title="发布话题"
            >
                <span className="tab-selector">选择版块：</span>
                <select name="tab" id="tab-value" value={types} onChange={(e) => getSelectedOption(e)}>
                    <option value="">请选择</option>
                    {data.map((item, index) => {
                        return <option value={item.id}>{item.name}</option> 
                    })}
                    {/* <option value="1">问答</option>
                    <option value="2">招聘</option>
                    <option value="3">分享</option> */}
                </select>
                <span id="topic_create_warn"></span>

                <div>
                    <textarea id="article_title" value={title} placeholder="标题字数10字以上"
                        onChange={(e) => { setTitle(e.target.value) }}></textarea>
                </div>
                <div>
                    <textarea id="article_content" value={content} placeholder="内容输入"
                        onChange={(e) => { setContent(e.target.value) }}></textarea>
                </div>

                <Button type="primary" onClick={() => {
                    insertArticle();
                }}>提交</Button>
            </Card>
        </div>
    </div>
    function getSelectedOption(e) {
        let types = e.target.value;
        console.log(types);
        let wranSpan = document.querySelector("#topic_create_warn");
        if (types == '1') {
            wranSpan.innerHTML = "<strong>提问时，请遵循《提问的智慧》中提及的要点，以便您更接收到高质量回复。</strong>";
        } else if (types == '2') {
            wranSpan.innerHTML = "<strong>为避免被管理员删帖，发帖时请好好阅读《招聘帖规范》。</strong>";
        } else {
            wranSpan.innerHTML = "";
        }
        setTypes(e.target.value);
    }
    // function insertArticle(){
    //     types==""?
    //         alert("必须选择一个版块！")
    //     :
    //     title.length>=10?
    //         fetch('https://cnodejs.org/api/v1/topics',{
    //             method:'post',
    //             headers:{
    //                 'Accept':'application/json,text/plain,*/*',/* 格式限制：json、文本、其他格式 */
    //                 'Content-Type':'application/x-www-form-urlencoded'/* 请求内容类型 */
    //             },
    //             body:`accesstoken=f7b513a6-fdce-472b-a23f-4ecd5a4fa230&tab=${types}&title=${title}&content=${content}`
    //         }).then((response)=>{
    //             //由于找不到真实请求response对应的id，发帖成功后直接返回到?tab=dev
    //             console.log(response);
    //             response.status===200 ?
    //             push(`/?tab=${types}`)
    //             :
    //             message.info('发帖失败');
    //         })
    //         :alert("标题字数少于10个字");

    // }
    function insertArticle() {
        types == "" ?
            message.info('必须选择一个版块！')
            : title.length >= 10 ?
                signHttp.post('/article',
                    { 'categoryId': types, 'content': content, 'title': title },
                    { headers: { 'authorization': user.authorization ? user.authorization : '' } })
                    .then(function (res) {
                        console.log(res.data)
                        const code = res.data.code;
                        if (code === 0) {
                            push(`/?tab=${types}`)
                        } else {
                            message.info('发帖失败')
                        }

                    })
                    .catch(function (error) {

                    })
                : message.info('标题字数少于10个字');

    }
}

export default CreateArticlePage;
import { Button, Card, message } from "antd";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signHttp } from "../../store/action/config";
import { useCategory } from "../../store/action/category";
import { useSelector } from "react-redux";
import "../../static/css/article.css";

function CreateArticlePage(props) {
    const { user = {} } = useSelector(state => state.guards);

    const { data } = useSelector(state => state.category);
    const getData = useCategory();
    useEffect(() => {
        getData();
    }, [])
    const [types = 'all', setTypes] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { push } = useHistory();
    return <div className="view">
        <div className="wrap">
            <Card
                title="发布话题"
            >
                <div>
                    <span className="tab-selector">选择版块：</span>
                    <select name="tab" id="tab-value" value={types} onChange={(e) => getSelectedOption(e)}>
                        <option value="">请选择</option>
                        {data.map((item, index) => {
                            return <option value={item.id}>{item.name}</option> 
                        })}
                    </select>
                    <span id="topic_create_warn"></span>
                </div>
                <div>
                    <textarea id="article_title" 
                        value={title} placeholder="标题字数10字以上"
                        onChange={(e) => { setTitle(e.target.value) }}
                        rows="1"
                        cols="120"
                        ></textarea>
                </div>
                <div>
                    <textarea id="article_content" 
                        value={content} placeholder="内容输入"
                        onChange={(e) => { setContent(e.target.value) }}
                        rows="12"
                        cols="120"
                        ></textarea>
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
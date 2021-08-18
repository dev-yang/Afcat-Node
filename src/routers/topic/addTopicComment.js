import { Card, Button } from "antd";
import { useState } from "react";
//import E from "wangeditor";
import { useSelector } from "react-redux";
import { signHttp } from "../../store/action/config";
import { useGetReplys } from "../../store/action/getReplys";
import { useLocation } from "react-router-dom"; 
import users from "../../component/indexComponent/getCookie";

function AddTopicComment(props) {
    const commentid = useLocation().pathname.split('/')[2];
    const getReplys = useGetReplys();
    const { data } = props;
    const [content, setContent] = useState("");
    const id = data.id;
    const { isLogin , user = {}} = useSelector(state => state.guards);
    console.log( users )
    const addComment = () => {
        signHttp.post('/reply',
            { 'articleId': id, 'content': content },
            { headers: { 'authorization': user.authorization?user.authorization:users.authorization } })
            .then(function (res) {
                const code = res.data.code;
                if (code === 0) {
                    getReplys(commentid);
                    setContent('');
                } 

            })
            .catch(function (error) {

            });
    }
    if (!isLogin) {
        return <div></div>;
    }
    return <Card
        type="inner"
        title="添加回复"
    >
        <div>
            <textarea className="comment_content"
                rows="6"
                cols="120"
                placeholder="回复内容"
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            ></textarea>

        </div>

        <Button type="primary"
            onClick={() => { addComment(); }}
        >提交</Button>
    </Card>



}
export default AddTopicComment;



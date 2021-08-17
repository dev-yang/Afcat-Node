
import { Divider } from "antd";
import moment from 'moment';
import { Link } from "react-router-dom";
function TopComment(props) {
    const { data } = props;

    return <div className="topComment">
        <div className="topic_top">
            <div className="topic_title">
                <h1>
                    {data.isTop === 1 ? <span className="top">置顶</span> : ""}
                    {data.title}
                </h1>
            </div>
            <div className="topic_list">
                <ul>
                    <li>发布于
                      {moment(data.createdAt).fromNow()}
                    </li>
                    <li>作者
                    <Link to={'/user/'+data.userId}><span>{data.username && data.username}</span></Link>
                     {/* <a href={'/user/'+data.userId}>{data.username && data.username}</a> */}

                    </li>
                    <li>{data.viewCount} 次浏览</li>
                    <li>来自{data.categoryId = 1 ? "问答"
                        : data.categoryId = 2 ? "招聘"
                            : data.categoryId = 3 ? "分享"
                                : data.categoryId
                    }</li>
                </ul>
            </div>

        </div>
        <Divider />
        <div className="topic_content">
            {data.content}
        </div>
    </div>
}
export default TopComment;
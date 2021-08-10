
import { Card,Divider  } from "antd";
function TopComment(props) {
   //console.log(props);
   const{ data } = props;
   const content_inner = data.content ;
   const author = data.author;
   return <div className="wrap">
        <div className="topic_top">
            <div className="topic_title">
                <h1>{data.title}</h1>
            </div>
            <div className="topic_list">
                <ul>
                    <li>发布于 {data.create_at}</li>
                    <li>作者
                   <a href={author && author.avatar_url}>
                            {author && author.loginname}
                        </a>

                    </li>
                    <li>{data.visit_count} 次浏览</li>
                    <li>来自{data.tab = "share" ? "分享" : data.tab}</li>
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
}
export default TopComment;
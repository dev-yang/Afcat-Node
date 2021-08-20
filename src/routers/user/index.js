/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Row, Col, Avatar } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useLoadUserArticles,useLoadUserReplies,} from "../../store/action/user";
import UserProfile from "./userProFile";
import "../../static/css/user.css";
import { publicUrl } from "../../store/action/config";

function UserPage() {
  const userid = useLocation().pathname.split('/')[2];
  const { replies=[] } = useSelector((state) => state.userReplies);
  const { articles=[] } = useSelector((state) => state.userArticles);
  const getUserArticles = useLoadUserArticles();
  const getUserReplies = useLoadUserReplies();
  useEffect(() => {
    getUserArticles(userid);
    getUserReplies(userid);
  },[userid]);
  //let avatatHttp = 'http://39.99.151.246/';
  
  return (
    <div className="view">
      <Row span={18} justify="space-around">
        <Col span={18}>
          <UserProfile />
          <div className="user_card">
            <Card type="inner" title="最近创建的话题">
                {articles&&articles.length>0?articles.map((item) => {
                  console.log(item)
                return (
                    <div>
                    <Avatar src={item.avatar?item.avatar.indexOf('https') !== -1?item.avatar:publicUrl+item.avatar:''} />
                    <span className="user_topic_span">{`${item.replyCount}/${item.viewCount}`}</span>
                    <a href={'/topic/'+item.id} className="user_topic_span">{item.title}</a>
                    {/* <span className="user_topic_span">{item.title}</span> */}
                    </div>
                );
                }):"无话题"}
            </Card>
          </div>
          <div className="user_card">
            <Card type="inner" title="最近参与的话题" className="user_card">
                {replies?replies.map((item) => {
                return (
                    <div>
                    <Avatar src={item.avatar?item.avatar.indexOf('https') !== -1?item.avatar:publicUrl+item.avatar:''} />
                    <span className="user_topic_span">{`${item.replyCount}/${item.viewCount}`}</span>
                    <a href={'/topic/'+item.id} className="user_topic_span">{item.title}</a>
                    {/* <span className="user_topic_span">{item.title}</span> */}
                    </div>
                );
                }):"无话题"}
            </Card>
          </div>
        </Col>
        <Col span={5}>
          {/* <Profile /> */}
          <UserProfile />
        </Col>
      </Row>
    </div>
  );
}
export default UserPage;

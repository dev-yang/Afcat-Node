/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Row, Col, Avatar, Divider } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
//   useLoadUserProfile,
  useLoadUserArticles,useLoadUserReplies,} from "../../store/action/user";
import Profile from "../../component/indexComponent/profile";

import "../../static/css/user.css";

function UserPage() {
  const { replace } = useHistory();
  // const { profile={}, articles=[], replies=[] } = useSelector((state) => state.user);
  const {  articles=[], replies=[] } = useSelector((state) => state.user);
  //   const getUserProfile = useLoadUserProfile();
  const getUserArticles = useLoadUserArticles();
  const getUserReplies = useLoadUserReplies();
//   useEffect(() => {
//     getUserProfile();
//   });
  useEffect(() => {
    getUserArticles();
  },[]);
  useEffect(() => {
    getUserReplies();
  },[]);

  return (
    <div className="view">
      <Row span={18} justify="space-around">
        <Col span={18}>
          <Profile title={<a href="javascript:;" onClick={()=>replace('/')}>主页/</a>} />
          <div className="user_card">
            <Card type="inner" title="最近创建的话题">
                {articles?articles.map((item) => {
                return (
                    <div>
                    <Avatar src={item.avatar} />
                    <span className="user_topic_span">{`${item.replyCount}/${item.viewCount}`}</span>
                    <span className="user_topic_span">{item.title}</span>
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
                    <Avatar src={item.avatar} />
                    <span className="user_topic_span">{`${item.replyCount}/${item.viewCount}`}</span>
                    <span className="user_topic_span">{item.title}</span>
                    </div>
                );
                }):"无话题"}
            </Card>
          </div>
        </Col>
        <Col span={5}>
          <Profile />
        </Col>
      </Row>
    </div>
  );
}
export default UserPage;

import { Row, Col, Card, Divider } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadTopic } from "../../store/action/topic";
import { useLocation } from "react-router-dom";
import TopicComment from "./topicComment";
import TopComment from "./topComment";
import AddTopicComment from "./addTopicComment";
import GitLogin from '../../component/indexComponent/gitLogin';
import "../../static/css/topic.css";


function TopicPage(props) {
    const id = useLocation().pathname.split('/')[2];
    const { data } = useSelector(state => state.topic);
    const getData = useLoadTopic();
    useEffect(() => {
        getData(id);
    }, [id])
    if (!data) {
        return <div>暂无数据</div>
    }
    // 测试fork和pr
    return <Row span={18} justify="space-around">
        <Col span={18}>
            <div className="view">
                <div>
 
                    <TopComment
                        data={data}
                    />
                    <TopicComment
                        data={data}
                    />

                    <AddTopicComment
                        data={data}
                    />
                </div>

            </div>
             
        </Col>
        <Col span={5}>
            <GitLogin />
        </Col>
    </Row>



}
export default TopicPage;





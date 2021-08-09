import { Card,Row, Col  } from "antd";
import { useState } from "react";
import Popup from "../../component/popup";
import inner from "./inner";
import GitLogin from '../../component/indexComponent/gitLogin';
import Friends from '../../component/indexComponent/friends';

function AboutPage() {
  const [showPopup,setShowPopup] = useState(false);
  return <Row span={18} justify="space-around">
  <Col span={18}>
  <div className="view">
      <Card
        type="inner"
        title="主页/关于"
      >
        <div dangerouslySetInnerHTML={{
          __html: inner
        }}></div>
      </Card>
      <button onClick={()=>{
        setShowPopup(true);
      }}>弹窗</button>
      {
        showPopup? <Popup 
          render={(clos)=>{
            return <div>
                <h2>关于我们的弹窗</h2>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <p>弹窗内容</p>
                <button onClick={()=>{
                  clos();
                }}>关于</button>
            </div>   
          }}
          afterClos={()=>{
            setShowPopup(false);
          }}
      />: ""
      }
  </div>
  </Col>
  <Col span={5}>
     <GitLogin />
     <Friends />
  </Col>
</Row>
}
export default AboutPage;
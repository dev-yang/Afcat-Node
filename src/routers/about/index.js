import { Card,Row, Col  } from "antd";
import inner from "./inner";
import GitLogin from '../../component/indexComponent/gitLogin';
import Friends from '../../component/indexComponent/friends';
import afcatAbout from '../../static/image/afcatAbout.png';

function AboutPage() {
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
        <img src={afcatAbout} alt=''/>
      </Card> 
  </div>
  </Col>
  <Col span={5}>
     <GitLogin />
     <Friends />
  </Col>
</Row>
}
export default AboutPage;
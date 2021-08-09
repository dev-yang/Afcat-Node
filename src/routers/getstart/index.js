import { Card, Row, Col } from "antd";
import inner from "./inner";
import GitLogin from '../../component/indexComponent/gitLogin';
import Friends from '../../component/indexComponent/friends';

function GetStartPage() {
   return <Row span={18} justify="space-around">
      <Col span={18}>
         <div className="view">
            <div>
               <Card
                  type="inner"
                  title="主页/新手入门"
                  size="small"
               >
                  <div dangerouslySetInnerHTML={{
                     __html: inner
                  }}></div>
               </Card>
            </div>
         </div>
      </Col>
      <Col span={5}>
         <GitLogin />
         <Friends />
      </Col>
   </Row>
}

export default GetStartPage;
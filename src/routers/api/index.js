import { Card, Row, Col } from "antd";
import inner from "./inner";
/*
代码通用：
  1. 功能和视图都相似 --- 封装成一个通用组件，将不一致的内容都通传参来解决
  2. 功能相似，但是视图不一致：
    1. render props
    2. 高阶组件（HOC,HOCs）
    3. hooks
*/
function ApiPage() {
  return <Row justify="start">
    <Col span={18}>
      <div className="view">
          <Card
            type="inner"
            title="主页/API"
            size="small"
          >
            <div dangerouslySetInnerHTML={{
              __html: inner
            }}></div>
          </Card>
      </div>
    </Col>
  </Row>
}
export default ApiPage;
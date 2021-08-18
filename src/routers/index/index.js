import IndexList from "./indexList";
import IndexNav from "./indexNav";
import { useLocation } from "react-router-dom";
import qs from "qs";
import IndexPagination from "./index_pagination";
import { Row, Col } from 'antd';
import GitLogin from '../../component/indexComponent/gitLogin';
import NoAnser from '../../component/indexComponent/noAnswer';
import Friends from '../../component/indexComponent/friends';


function IndexPage() {
    const { search } = useLocation()
    const { tab = "all", page = "1" } = qs.parse(search.slice(1));//根据浏览器search，来切换请求数据

    return <Row span={18} justify="space-around">
        <Col span={18}>
            <div className="view">
                <div>
                    <IndexNav
                        tab={tab}
                    />
                    <IndexList
                        tab={tab}
                        page={page}
                    />
                    <IndexPagination
                        tab={tab}
                        page={page}
                    />
                </div>
            </div>
        </Col>
        <Col span={5}>
            <GitLogin />
            {/* <NoAnser /> */}
            <Friends />
        </Col>
    </Row>



}
export default IndexPage;
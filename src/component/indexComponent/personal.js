import {Card} from 'antd';
import {Link} from 'react-router-dom';


export default function Personal(){
    return <div>
            <Card type="inner" size="small" title="个人信息">
                <dl>
                    <dt>
                         <img src={}/>
                    </dt>
                    <dd></dd>
                </dl>
               <p>积分:<span>5</span></p> 
                <span></span>
            </Card>
            <div>
                <button><Link to="">发布话题</Link></button>
            </div>
    </div>

}
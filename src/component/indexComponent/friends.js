import erweima from '../../static/image/erweima.png';
import rubyChina from '../../static/image/ruby-china.png';
import {Card} from 'antd';

export default function Friends(){
    return <div className="friends">
        <div>
            <Card type="inner" size="small" title="友情社区">
                <ul>
                    <li>
                        <img src={rubyChina}/>
                    </li>
                    <li><img src={rubyChina}/></li>
                    <li><img src={rubyChina}/></li>
                </ul>
            </Card>
        </div>
        <div>
            <Card type="inner" size="small" title="客户端二维码">
                <div className="erweima">
                    <img src={erweima}/>
                </div>
            </Card>
        </div>
    </div>
}
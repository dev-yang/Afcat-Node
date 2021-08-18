import afcatWinxin from '../../static/image/afcatWinxin.jpg';
import afcatLogo from '../../static/image/亚联logo.png';
import {Card} from 'antd';

export default function Friends(){
    return <div className="friends">
        <div>
            <Card type="inner" size="small" title="友情社区">
                <ul>
                    <li>
                        <a href="http://www.afcat.com.cn"><img src={afcatLogo} alt=''/> </a>
                    </li>
                    {/* <li><img src={afcatLogo}/></li>
                    <li><img src={afcatLogo}/></li> */}
                </ul>
            </Card>
        </div>
        <div>
            <Card type="inner" size="small" title="亚联精英联盟">
                <div className="erweima">
                    <img src={afcatWinxin}/>
                </div>
            </Card>
        </div>
    </div>
}
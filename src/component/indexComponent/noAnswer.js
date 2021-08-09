import {Card} from 'antd';
export default function NoAnser(){
    return <div className="noAnser">
        <div>
            <Card type="inner" size="small" title="无人回复的话题">
                <ul>
                    <li>vue3 在vue.config.js 设置了filenameHashi</li>
                    <li>Vite 从入门到精通，玩转新时代前端构建法</li>
                    <li>从零打造微前端框架：实战“汽车资讯平台”项目|资源分享</li>
                </ul>
            </Card>  
        </div>
        <div>
            <Card size="small" type="inner" title="积分榜   TOP 100 >>">
                <ul>
                    <li>22840 i5ting</li>
                    <li>22840 i5ting</li>
                    <li>22840 i5ting</li>
                </ul>
            </Card>         
        </div>
    </div>
}
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Image, Button, Row, Col, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { signHttp, publicUrl } from "../../store/action/config";
import users from '../../component/indexComponent/getCookie';

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传JPG或PNG文件!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片大小需小于2MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
}

function SettingPage() {
  
  const { user = {} } = useSelector(state => state.guards);
  const { avatar } = useSelector(state => state.userInfo);
  const dispatch = useDispatch()
  function customRequest(options) {

   
    let params = new FormData();
    params.append("avatar", options.file);
    console.log(options.file);
    console.log(users)
    signHttp.patch(`/user/avatar`, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: user.authorization||users.authorization,
      }
    }).then((res) => {
      //console.log("res");
      //console.log(res);
      const avatarStr = publicUrl + res.data.results;
      //console.log("hahahahha");
      //console.log(avatarStr);
      dispatch({
        type: "USERINFO_UPDATE",
        avatar: avatarStr,
      })
      options.onSuccess(res, options.file);
    })
  }
  const props = {
    customRequest: customRequest,
    beforeUpload: beforeUpload,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return <div>
          <Row gutter={20}>
            <Col span={14}>
              <Avatar
                src={<Image src={avatar} />}
              />
            </Col>
            <Col span={14}>
              <div>
                姓名：{user.username}
              </div>
            </Col>
            <Col span={14}>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>上传头像</Button>
              </Upload>
            </Col>
          </Row>
  </div>
}

export default SettingPage;
import React from "react";
import { List, Card, Layout, Collapse } from "antd";
import imgurl from "./xy.png";
import "./main.css";
import cnki from './cnki.png';
import IEEE from './ieee.jpg';
import acm from './acm.jpg';
import web from './web.png';
import Sci from './Sci.svg';
import springer from './springer.png';
import emerald from './emerald.jpg';
import els from './ei.png';
const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;
class Main extends React.Component {
  
  constructor(props){
    
    super(props);
    this.state={
        data:[{
            aim:'https://fsso.cnki.net/Shibboleth.sso/Login?entityID=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&target=https://fsso.cnki.net/secure/default.aspx',
            img:cnki,
            context:'中国知网',
        },{
            aim:'https://ieeexplore.ieee.org/servlet/wayf.jsp?entityId=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&url=https%3A%2F%2Fieeexplore.ieee.org',
            img:IEEE,
            context:'IEEE Xplore',
        },{
            aim:'https://dl.acm.org/action/ssostart?idp=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&redirectUri=%2F&targetSP=https%3A%2F%2Fdl.acm.org',
            img:acm,
            context:'ACM',
        },{
            aim:'https://www.webofknowledge.com/?auth=ShibbolethIdPForm&entityID=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&target=https%253A%252F%252Fwww.webofknowledge.com%252F%253FDestApp%253DUA&ShibFederation=ChineseFederation&DestApp=UA',
            img:web,
            context:'Web Of Science',
        },{
            aim:'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&appReturnURL=https%3A%2F%2Fwww.sciencedirect.com%2Fuser%2Frouter%2Fshib%3FtargetURL%3Dhttps%253A%252F%252Fwww.sciencedirect.com%252F',
            img:Sci,
            context:'Science Direct',
        },{
            aim:'https://fsso.springer.com/federation/init?entityId=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&returnUrl=https%3A%2F%2Flink.springer.com%2F',
            img:springer,
            context:'Springer',
        },{
            aim:'https://www.emerald.com/start-session?idp=https://idp.xupt.edu.cn/idp/shibboleth',
            img:emerald,
            context:'Emerald全文期刊',
        },{
            aim:'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2Fidp.xupt.edu.cn%2Fidp%2Fshibboleth&appReturnURL=https%3A%2F%2Fwww.engineeringvillage.com%2Fcustomer%2Fauthenticate.url%3Fauth_type%3DSHIBBOLETH',
            img:els,
            context:'Engineering Village',
        }], 
        datastate:[{
          name:"CARSI的意义",
          context:"为了满足广大师生在疫情防控期间急剧增长的校外访问学术资源需求，按照学校“停课不停学”的要求，信息中心与图书馆合作，现已开通教育网统一身份认证和资源共享服务（CARSI）。我校师生无需通过VPN，使用数字化校园统一认证账号即可在校外随时访问获得授权的学术资源。"
        },{
          name:"如何使用跨校资源认证？",
          flag:true,
          context:"使用跨校资源认证有两种方式。第一种方式参考以下<a href='http://xxzx.xupt.edu.cn/info/1005/2335.htm' target='_blank' rel='noopener noreferrer'>服务指南</a>。第二种方式叫WAYFLess，直接点击下方资源名称即可直接跳转至统一认证认证，认证通过后会自动跳转至对应资源。"
        },{
          name:"为什么使用跨校资源认证？",
          context:"使用跨校资源认证无需配置VPN，使用更方便。在使用过程中，我们仅在各位师生同意的情况下，将用户的身份类型（教工、学生）经过加密方式提供给资源服务商，不涉及其他任何个人信息的传递和泄露。"
        },{
          name:"校外资源访问的时候提示错误怎么办？",
          context:"对于可用服务，如果提示出错，可以通过第一种方式进入，或者通过下面电话联系管理员获得帮助。"
        }],
        flag:false
      }
  }
  handleClientW = (width) => {
   if (width < 1250) {
      this.setState({
        flag: false,
        
      });
    }else{
      this.setState({
        flag:true
      })
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    let clientW = document.documentElement.clientWidth;
    this.handleClientW(clientW);
  }
  handleResize = (e) => {
    let e_width = e.target.innerWidth;
    this.handleClientW(e_width);
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  render() {
    const listb=this.state.datastate.map((item)=>
      <Panel header={item.name} key={item.name}>
      { item.flag ? <div dangerouslySetInnerHTML={{__html: item.context}} /> :<p>{item.context}</p>}
      </Panel>
    )
    return (
      <Layout style={{backgroundColor:"rgb(242,242,245)"}}>
        <Header style={{ margin: "0", padding: "0", }}>
          <div className="header">
            <div className="header-main">
              <img alt="西安邮电大学" src={imgurl} />
            </div>
          </div>
          <div className="texture">
            <h1>西邮CARSI跨校资源统一认证</h1>
          </div>
        </Header>
        
        <Layout className="main-list">
        
          <Content  >
          <div className="list-title">使用说明</div>
          {this.state.flag?
          <List
            className="list-main"
            dataSource={this.state.datastate}
            renderItem={(item) => (
              <List.Item className="list" style={{  breakInside: "avoid",border:'none' }} key={item.context}>
                <Card className="cp cpa">
                  <h2>{item.name}</h2>
                  {item.flag ? <div dangerouslySetInnerHTML={{__html: item.context}} /> :<p>{item.context}</p>}
                </Card>
              </List.Item>
            )}
          />:
          <Collapse  ghost>
          
          {listb}
        </Collapse>
        }
          
            <div className="list-title">服务资源列表</div>
          <List
              className="list-main"
              dataSource={this.state.data}
              renderItem={(item) => (
                <List.Item className="list" style={{  breakInside: "avoid",border:'none' }} key={item.context}>
                <a href={item.aim} target="_blank" rel="noopener noreferrer">
                  <Card className="cp">
                  <div className="flex">
                  <img alt="img" src={item.img} />
                    <p>{item.context}</p>
                  </div>
                  </Card>
                </a>
                </List.Item>
              )}
            />
          </Content>
          </Layout>
        <Footer style={{ borderTop: "1px solid #ccc", textAlign: "center",background:'#06060b' }}>
        
        <div className="footer">
          <div className="footer-right">
            <div className="fcenter">

                  <h3>联系我们</h3>
                  <div>联系电话： <span> (029) 88166083 </span></div>
                <div  style={{padding:'15px 0 0 0'}}>
                  技术支持 ©2020 西安邮电大学信息中心
                  <span style={{ color: "rgb(59, 126, 189)" }}> 智邮普创工作室</span>
                </div>
            </div>
          </div>

          <div className="footer-left">
            <div className="fcenter">
              <h3>友情连接</h3>
                <div><a href="http://xxzx.xupt.edu.cn/index.htm" target="_blank" rel="noopener noreferrer">西安邮电大学信息中心</a></div>
                <div><a href="https://zypc.xupt.edu.cn/" target="_blank" rel="noopener noreferrer">智邮普创工作室</a></div>
                <div><a href="http://cas.xiyou.edu.cn/cas/login?service=http%3A%2F%2Fi.xiyou.edu.cn%2Fc%2Fportal%2Flogin%3Fredirect%3D%252Fweb%252Fguest%252Findex%26p_l_id%3D10215" target="_blank" rel="noopener noreferrer">西安邮电大学信息门户</a></div>
            </div>
          </div>
          
        </div>
        
        </Footer>
      </Layout>
    );
  }
}
export default Main;
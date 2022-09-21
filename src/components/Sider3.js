import React from 'react';
import { Space, Typography, Layout, Button, Avatar, Divider, Select,  Badge, Comment} from 'antd';
import { SendOutlined, StarFilled, PaperClipOutlined,PrinterOutlined} from '@ant-design/icons';
import './Main.css'

const { Text, Title, Paragraph, Link} = Typography;
const { Content, Sider } = Layout;

export const Sider3 = () => {
  return (
    <Sider theme='light' className='Sider3'>
    <Space style={{height:50, paddingLeft:'688px',paddingRight:'40px', background:'#FAF9FE'}}>
     <Badge dot color='#7641EC'>
     <Avatar shape="round" src="https://joeschmoe.io/api/v1/jess" />
      </Badge>
    </Space><Divider style={{marginTop:'0'}} />
  
    <Space >
      <Comment 
      author={<Link>Mohamed Kassem</Link>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/joe" alt="Mohamed photo" />}
      style={{paddingLeft:'40px'}}
    > </Comment>
       <div>
         <Text style={{ fontWeight:'400', paddingLeft:'445px'}}>July 23, 2018</Text>
        </div>
    </Space>
  
    <Space style={{paddingLeft:'40px'}}>
    <Title >Quotation for Job Board template</Title><div style={{paddingLeft:'45px', color:'grey'}}><SendOutlined/><PrinterOutlined style={{paddingLeft:'20px'}}/></div>
    </Space>
    <Space>
    <Content style={{paddingLeft:'40px',paddingRight:'40px'}}>
      <Paragraph > Hi Alex,</Paragraph>
      <Paragraph >
      We have an app called UP4WHAT - it's all about social planning & booking . Users can
       discover what they would like to do , then plan it with friends and finally book it through the app . 
      </Paragraph>
      <Paragraph >
      We're looking to make some enhancements to the design and remove some features to
       enable an easier user experience .
      </Paragraph>
      <Paragraph >
      Please let me know if you're available to take on a new project and when would be 
      suitable time for a call to discuss requirements . Also would you be able to share with me your rates ? 
      </Paragraph>
      <Paragraph >
      You can download the app on 
      <Link href='#' style={{color:'#7641EC', fontWeight:'bold'}}> app.up4what.com </Link>
      , please make sure you select Dubai as 
      your city so you can get the full experience . 
      </Paragraph>
      <Paragraph >      Thanks     </Paragraph>
      <Text>Mohamed</Text>
    </Content>
    <Content style={{paddingRight:'40px'}}>
      <Button type="primary" shape="circle" style={{backgroundColor:'Khaki', border:'Khaki', marginLeft:'25px'}} ><StarFilled style={{color:'orange'}}/></Button>
     <Paragraph style={{marginLeft:'20px'}}>Starred</Paragraph>
    
  <br/><br/>
    <Button type="primary" shape="circle" style={{backgroundColor:'violet', border:'violet', marginLeft:'25px'}} ><PaperClipOutlined  style={{color:'#7641EC'}}/></Button>
     <Paragraph >2&nbsp;Attachments</Paragraph>
    </Content>
    </Space>
    <Divider style={{marginTop:'236px'}}/>
    <Space style={{paddingLeft:'40px'}} >
      
      <Text >
        Click to <Link href='#' style={{color:'#7641EC', fontWeight:'bold'}}>Reply</Link> or <Link href='#' style={{color:'#7641EC', fontWeight:'bold'}}>Forward</Link> Mohamed'message
      </Text>
      <div style={{paddingLeft:'320px'}}>
        <PaperClipOutlined style={{color:'gray'}}/>
        <SendOutlined  style={{color:'#7641EC', paddingLeft:'20px'}}/>
      </div>
    </Space>
    </Sider >
  )
}

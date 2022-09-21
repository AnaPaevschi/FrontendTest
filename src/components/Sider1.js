import React from 'react';
import { Space,  Layout, Menu, Button, Avatar,  Divider,  Badge, } from 'antd';
import { InboxOutlined, StarOutlined,TeamOutlined, BellOutlined, EditOutlined,SendOutlined, DeleteOutlined,ExclamationCircleOutlined,
      PlusOutlined, HeartFilled} from '@ant-design/icons';

import './Main.css'

const {Sider } = Layout;
const onButtonClicked =()=>{
    console.log('button clicked')
  }  

export const Sider1 = () => {
  return (
    // Start Sider 1
<Sider className='Sider1' theme='light'>
    {/* Header of Sider1, with logo and bell icon */}
  <Space style={{height:50, marginLeft:'20px'}}>
   <Avatar shape="square" src="https://i.pinimg.com/564x/3a/a3/71/3aa3715ea54f73a961e5e094b68a89ef.jpg" />
   <Badge dot>
      <BellOutlined style={{color:"#7641EC", paddingLeft:'80px'}}/>
    </Badge>
  </Space>

  <Divider style={{marginTop:'0'}} />
    {/* Menu of Sider 1, with Menu Items */}
  <Menu>
      <Menu.Item> <Button type='primary' onClick={onButtonClicked} >Create Message</Button></Menu.Item>
      <Menu.Item> <InboxOutlined/> <Button type='link' onClick={onButtonClicked}>Inbox</Button></Menu.Item>
      <Menu.Item> <StarOutlined /> <Button type='link' onClick={onButtonClicked}>Marked</Button></Menu.Item>
      <Menu.Item> <TeamOutlined /> <Button type='link' onClick={onButtonClicked}>Group </Button></Menu.Item>
      <Menu.Item> <EditOutlined /> <Button type='link' onClick={onButtonClicked}>Drafts</Button></Menu.Item>
      <Menu.Item> <SendOutlined /> <Button type='link' onClick={onButtonClicked}>Sent  </Button></Menu.Item>
      <Menu.Item> <DeleteOutlined /> <Button type='link' onClick={onButtonClicked}>Deleted</Button> </Menu.Item>
      <Menu.Item> <ExclamationCircleOutlined /><Button type='link' onClick={onButtonClicked}>Spam </Button> </Menu.Item>
      <Menu.Item disabled> <Button disabled type='link' onClick={onButtonClicked}>Labels</Button><EditOutlined style={{color:'#7641EC'}}/> <PlusOutlined style={{color:'#7641EC'}}/></Menu.Item>
      <Menu.Item> <HeartFilled style={{color:'red'}}/><Button type='link' onClick={onButtonClicked}>Personal</Button></Menu.Item>
      <Menu.Item> <HeartFilled  style={{color:'yellow'}}/><Button type='link' onClick={onButtonClicked}>Family</Button></Menu.Item>
      <Menu.Item> <HeartFilled  style={{color:'blue'}}/><Button type='link' onClick={onButtonClicked}>Friends</Button></Menu.Item>
      <Menu.Item> <HeartFilled  style={{color:'violet'}}/><Button type='link' onClick={onButtonClicked}>Work</Button></Menu.Item>
  </Menu>


</Sider> 
  )
}

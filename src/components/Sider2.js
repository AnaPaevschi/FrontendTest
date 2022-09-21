import React from 'react';
import { Space, Typography, Layout,  Button, Avatar, Checkbox, Divider, List, Select, Rate,} from 'antd';
import { DeleteOutlined, PlusOutlined, HeartFilled,FolderOutlined, LikeOutlined,  PaperClipOutlined,} from '@ant-design/icons';


import SearchEmail from './SearchEmail';
import './Main.css'

const { Option } = Select;
const { Text} = Typography;
const { Sider } = Layout;

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};

export const Sider2 = () => {
  return (
<Sider theme='light' className='Sider2'>
    <Space style={{height:50, backgroundColor:'#FAF9FE '}} >
        <Text style={{paddingLeft:'20px', color:'gray'}}>Sort: </Text>
        <Select   defaultValue="Newest Fitst" style={{color:'darkblue'}} bordered={false}>
          <Option value="Newest">Newest Fitst</Option>
          <Option value="1">1st menu item</Option>
          <Option value="2">2nd menu item</Option>
          <Option value="3">3rd menu item</Option>
        </Select  >
    </Space> 
      
    <Space style={{height:50, paddingRight:'37px', color:'grey', paddingLeft:'200px', backgroundColor:'#FAF9FE '}}>
        <FolderOutlined />
        <LikeOutlined style={{paddingLeft:'15px', paddingRight:'15px'}}/>
        <DeleteOutlined />
    </Space>
    <Divider style={{margin:'0', paddingBottom:'24px', backgroundColor:'#FAF9FE'}} />
    <SearchEmail></SearchEmail>
    <Divider  style={{margin:'0', backgroundColor:'#FAF9FE'}}/>
      


    <List itemLayout="horizontal">
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange} >
            <List.Item style={{paddingLeft:'20px'}}>
                <List.Item.Meta
                    avatar={<><Avatar src="https://joeschmoe.io/api/v1/jana" style={{paddingBottom:'8px'}} /><br/>
                    <Checkbox value="A" style={{padding:'8px'}}></Checkbox><br/>
                    <Rate style={{paddingLeft:'5px', color:'red'}} count={1} /></>} 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    title={<a href="#" style={{color:'gray', fontWeight:'400'}}>OUR PICKS  <HeartFilled style={{ height:'5px',
                    paddingBottom:'4px', color:'violet'}}/></a>}
                    description={<><h1>You're Working in the Wrong Place</h1>Open offices misunderstand psychology and design...</>}
                    /> 
                    <div>
                        <Text style={{color:'gray', fontWeight:'400', paddingRight:'20px'}}>Today    </Text>
                        <br/><br/><br/>
                        <p></p>
                    </div>
            </List.Item>
            <List.Item style={{paddingLeft:'20px'}}>
                <List.Item.Meta
                    avatar={<><Avatar src="https://joeschmoe.io/api/v1/joe" style={{paddingBottom:'8px'}} /><br/>
                    <Checkbox value="B" style={{padding:'8px'}}></Checkbox><br/>
                    <Rate style={{padding:'5px', color:'red'}} count={1} /></>} 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    title={<a href="#" style={{color:'gray', fontWeight:'400'}}>Mohamed Kassem  <HeartFilled style={{ height:'5px',
                    paddingBottom:'4px', color:'red'}}/></a>}
                    description={<><h1>Quotation for Job Board template</h1> I visited your Dribbble profil. Your work is very good...</>}
                    /> 
                    <div>
                        <Text style={{color:'gray', fontWeight:'400', paddingRight:'20px'}}>July 23  </Text>
                        <br/><br/><br/>
                        <p>2 <PaperClipOutlined /></p>
                    </div>
            </List.Item>
            <List.Item style={{paddingLeft:'20px'}}>
                    <List.Item.Meta
                    avatar={<><Avatar src="https://joeschmoe.io/api/v1/josh" style={{paddingBottom:'8px'}} /><br/>
                    <Checkbox value="C" style={{padding:'8px'}}></Checkbox><br/>
                    <Rate style={{padding:'5px', color:'red'}} count={1} /></>} 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    title={<a href="#" style={{color:'gray', fontWeight:'400'}}>Willam Lion  <HeartFilled style={{ height:'5px',
                    paddingBottom:'4px', color:'yellow'}}/></a>}
                    description={<><h1>About that latest TPA Report...</h1>If you could just get that report over to me, thet woult be great...</>}
                    /> 
                    <div>
                        <Text style={{color:'gray', fontWeight:'400', paddingRight:'20px'}}>July 08  </Text>
                        <br/><br/><br/>
                        <p></p>
                    </div>
            </List.Item>
            <List.Item style={{paddingLeft:'20px'}}>
                <List.Item.Meta
                    avatar={<><Avatar src="https://joeschmoe.io/api/v1/jolee" style={{paddingBottom:'8px'}} /><br/>
                    <Checkbox value="D" style={{padding:'8px'}}></Checkbox><br/>
                    <Rate style={{padding:'5px', color:'red'}} count={1} /></>} 
                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    title={<a href="#" style={{color:'gray', fontWeight:'400'}}>Alex Chen  <HeartFilled style={{ height:'5px',
                    paddingBottom:'4px', color:'blue'}}/></a>}
                    description={<><h1>Job Oportunity</h1>Lorem ipsum dolar sit amet, consectetur adipiscing do usmod temporor...</>}
                    /> 
                    <div>
                        <Text style={{color:'gray', fontWeight:'400', paddingRight:'20px'}}>June 03  </Text>
                        <br/><br/><br/>
                        <p><PaperClipOutlined /></p>
                    </div>
            </List.Item>
            <List.Item style={{paddingLeft:'20px'}}>
                <List.Item.Meta
                    avatar={<><Avatar src="https://joeschmoe.io/api/v1/jenni" style={{paddingBottom:'8px'}} /><br/>
                    <Checkbox value="E" style={{padding:'8px'}}></Checkbox><br/>
                    <Rate style={{padding:'5px', color:'red'}} count={1} /></>} 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    title={<a href="#" style={{color:'gray', fontWeight:'400'}}>Sasha Turichev  <HeartFilled style={{ height:'5px',
                    paddingBottom:'4px', color:'violet'}}/></a>}
                    description={<><h1>Design Rework about blackchain...</h1> Ant Design, a design language for background applications, is refined by Ant UED Team</>}
                    /> 
                <div>
                    <Text style={{color:'gray', fontWeight:'400', paddingRight:'20px'}}>May 08  </Text>
                    <br/><br/><br/>
                    <p></p>
                </div>
            </List.Item>
        </Checkbox.Group>
        <Divider style={{marginTop:'0'}}/>
        <Button type="primary" shape="circle" style={{marginLeft:'200px', backgroundColor:'#7641EC', border:'#7641EC', width:'50px', height:'50px'}} icon={<PlusOutlined />} />
    </List>
</Sider>
  )
}

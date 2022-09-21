import React from "react";
import {Layout} from 'antd';

import { Sider1 } from './components/Sider1';
import { Sider2 } from './components/Sider2';
import { Sider3 } from './components/Sider3';

import "antd/dist/antd.css";
import './App.css';

function App() {
  return (
    <>
   <Layout style={{minHeight: '100vh'}}>
      <Sider1/>
      <Sider2/>
      <Sider3/>
  </Layout>
    
    </>
  );
}

export default App;

import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;


const onSearch = (value) => console.log(value);

const SearchEmail = () => (
  <Space direction="vertical">
    <Search className='search-email' 
      placeholder="What are you looking for?"
      allowClear
      onSearch={onSearch}
      size="large"
      bordered={false}
      style={{
        width: 500,
        backgroundColor:'#FAF9FE',
        paddingRight:'50px',
        paddingBottom:'24px'
      }}
    />
  </Space>
);

export default SearchEmail;
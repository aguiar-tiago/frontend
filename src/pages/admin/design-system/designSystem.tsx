import * as React from 'react';
import { Button, Logo, Dropdown, Table, Input, Search, Icon } from '../../../components';
import logo from '../../../images/proposify-logo.png';
import { Row, Col, Divider } from 'antd';
import './styles.less';

import { IconList } from '../../../components/icon/icons/index';

export interface Props {
    
}
 
const DesignSystemPage: React.FC<Props> = () => {
    return (
        <>
            <Divider orientation="left">Logo</Divider>
            <Logo title="Proposify Logo" href="#" background={logo}/>
            <Divider orientation="left">Buttons</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Primary</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary">Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="dashed">Dashed</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="ghost">Ghost</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="text">Text</Button>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Default</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary">Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="dashed">Dashed</Button>     
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="ghost">Ghost</Button>        
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="text">Text</Button>         
                </Col>
                <Col className="gutter-row" span={2}>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Danger</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary" danger>Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                 <Button tabIndex={1} type="dashed" danger>Dashed</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                 <Button tabIndex={1} type="ghost" danger>Ghost</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                 <Button tabIndex={1} type="text" danger>Text</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Success</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary" success>Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="dashed" success>Dashed</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="ghost" success>Ghost</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="text" success>Text</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Info</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary" info>Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                   <Button tabIndex={1} type="dashed" info>Dashed</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                   <Button tabIndex={1} type="ghost" info>Ghost</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                   <Button tabIndex={1} type="text" info>Text</Button>    
                </Col>
                <Col className="gutter-row" span={2}>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <h2>Warning</h2>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1}>Default</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="primary" warning>Primary</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="dashed" warning>Dashed</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="ghost" warning>Ghost</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button tabIndex={1} type="text" warning>Text</Button>
                </Col>
                <Col className="gutter-row" span={2}>
                </Col>
            </Row>
            <Divider orientation="left">Dropdown</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                    <Dropdown 
                        title="Dropdown"
                        trigger={['click']}
                        items={[{
                            href: '#',
                            title: 'Item 1'
                        },
                        {
                            href: '#',
                            title: 'Item 2'
                        },
                        {
                            href: '#',
                            title: 'Item 3'
                        }]} 
                    />
                </Col>
            </Row>
            <Divider orientation="left">Search</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <Search 
                        onSearch={(e) => console.log(e)}
                        placeholder="search something..."
                        allowClear
                        enterButton="Search"
                    />
                </Col>
            </Row>
            <Divider orientation="left">Input</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <Input placeholder="placeholder" ariaLabel="aria"/>
                </Col>
            </Row>
            <Divider orientation="left">Table</Divider>
                <Table
                    selectableTypes="checkbox"
                    data={
                        [
                            {
                                key: '1',
                                name: 'John Brown',
                                age: 32,
                                address: 'New York No. 1 Lake Park',
                            },
                            {
                                key: '2',
                                name: 'Jim Green',
                                age: 42,
                                address: 'London No. 1 Lake Park',
                            },
                            {
                                key: '3',
                                name: 'Joe Black',
                                age: 32,
                                address: 'Sidney No. 1 Lake Park',
                            },
                            {
                                key: '4',
                                name: 'Disabled User',
                                age: 99,
                                address: 'Sidney No. 1 Lake Park',
                            },
                        ]
                    }
                    onSelect={(selectedRowKeys: React.Key[], selectedRows: object[]) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                    }}
                    columns={
                        [
                            {
                                title: 'Name',
                                dataIndex: 'name',
                                render: (text: string) => <a>{text}</a>,
                            },
                            {
                                title: 'Age',
                                dataIndex: 'age',
                            },
                            {
                                title: 'Address',
                                dataIndex: 'address',
                            },
                        ]
                    }
                />

            <Divider orientation="left">Icons ({IconList.length})</Divider>

            <Row className="icon-container">
                {IconList.map(( name:any, i ) => { 
                    return(
                        <span key={i}>{name}:&nbsp;
                            <Icon name={name} /> 
                        </span>
                    )}
                )}
            </Row>
        </>
     );
}
 
export default DesignSystemPage;

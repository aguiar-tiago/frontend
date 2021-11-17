import { Row, Col } from 'antd';
import { useState } from 'react';
import { Title, Input, Button } from '../../../components';
import integrations from './integrations';
import { UpdateTokensPageProps } from './interface';
import { useTranslation } from 'react-i18next';

const UpdateTokensPage: React.FC<UpdateTokensPageProps> = (props) => {

    const { t } = useTranslation();

    //TODO: name will come from CI
    const [ name ] = useState('John Doe');

    const handleSubmit = (id: any) => {
        const key = `{id}-key`;
        const value = `{id}-value`;
        //TODO: field validation
        //TODO: POST request to the server

    }

    return (
        <div>
            <Row justify="start">
                <Col span={8}>
                    <Title>
                        {t('admin.update_tokens.greeting')} { name },
                    </Title>
                </Col>
            </Row>

            {integrations.map(( integration, idx ) => {
                const id = integration.replace(/\s/g, '').toLowerCase();
                return (
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={idx} style={{ marginTop: 10 }}>
                        <Col className="gutter-row" span={4}>
                            <Title level={5}>{ integration }</Title>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <Input placeholder="Key" ariaLabel="key" id={`${id}-key`}/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <Input placeholder="Value" ariaLabel="value" id={`${id}-value`}/>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button 
                                success 
                                type="primary" 
                                id={id} 
                                onClick={() => handleSubmit(id)}>
                                    {t('admin.update_tokens.button_submit')}
                            </Button>
                        </Col>
                    </Row>
                )
            })}

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="end" style={{ marginTop: 10 }}>
                <Col className="gutter-row" span={2}>
                    <Button  info type="primary">{t('admin.update_tokens.button_send_all')}</Button>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Button danger type="primary">{t('admin.update_tokens.button_clear_all')}</Button>
                </Col>
            </Row>
        </div>
     );
}
 
export default UpdateTokensPage;

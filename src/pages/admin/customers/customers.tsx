import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { Button, Search } from '../../../components';
import { Props } from './interface';
import { triggerCustomAction } from "../../../utils/DataTrackerHandler";

const CustomersPage: React.FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col span={6} offset={5} data-testid="customers-page-component">
                    <h2>{t('admin.customers.customers')}</h2>
                    <span>{t('admin.customers.total_account', {count: 1} )}</span> | 
                    <span>{t('admin.customers.total_user', {count: 136} )}</span> | 
                    <span>{t('admin.customers.total_proposal', {count: 135} )}</span>
                </Col>
                <Col span={2}>
                    <Button success type="primary"
                            onClick={() => triggerCustomAction('admin_new_user_button_click', { })}
                    >
                        {t('admin.customers.new_customer_button')}
                    </Button>
                </Col>
                <Col span={6}>
                    <Search
                            onSearch={() => {}} 
                            placeholder={t('admin.customers.search_input_placeholder')} 
                            allowClear 
                            enterButton={t('admin.customers.search_button')} 
                        />
                </Col>
            </Row>
            <Row>

            </Row>
        </>
     );
}
 
export default CustomersPage;
import React from 'react';
import { Dropdown } from '../../components';
import {
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";
import CancellingPage from './cancelling/cancelling';
import CancelledPage from './cancelled/cancelled';
import CustomersPage from './customers/customers';
import PendingDeletePage from './pending-delete/pendingDelete';
import SpammersPage from './spammers/spammers';
import DesignSystemPage from './design-system/designSystem';
import UpdateTokensPage from './update-tokens/updateTokens';


export interface AdminProps {
    
}

const Admin: React.FC<AdminProps> = () => {

    let match = useRouteMatch();

    const menu = [
        {
            title: 'Customers',
            href: `${match.url}/customers`
        },
        {
            title: 'Cancelling',
            href: `${match.url}/cancelling`
        },
        {
            title: 'Cancelled',
            href: `${match.url}/cancelled`
        },
        {
            title: 'Pending Delete',
            href: `${match.url}/pending-delete`
        },
        {
            title: 'Spammers',
            href: `${match.url}/spammers`
        },
        {
            title: 'Design System',
            href: `${match.url}/design-system`
        },
        {
            title: 'Update Tokens',
            href: `${match.url}/update-tokens`
        }
    ];

    return (
        <>
            <Dropdown title="Accounts" items={menu} trigger={['click']} />
            <Switch>
                <Route path={`${match.url}/customers`} component={CustomersPage} />
                <Route path={`${match.url}/cancelling`} component={CancellingPage} />
                <Route path={`${match.url}/cancelled`} component={CancelledPage} />
                <Route path={`${match.url}/pending-delete`} component={PendingDeletePage} />
                <Route path={`${match.url}/spammers`} component={SpammersPage} />
                <Route path={`${match.url}/design-system`} component={DesignSystemPage} />
                <Route path={`${match.url}/update-tokens`} component={UpdateTokensPage} />
            </Switch>
        </>
     );
}
 
export default Admin;
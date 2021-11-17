import * as React from 'react';
import { Title } from '../../../components'

export interface Props {
    
}
 
const CancelledPage: React.FC<Props> = () => {
    return ( 
        <Title font="proxima-nova">
            This is the Cancelled Page
        </Title>
     );
}
 
export default CancelledPage;
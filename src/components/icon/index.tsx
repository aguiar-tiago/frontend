import React from 'react';
import { Icons } from './icons/index';
import { Props } from './interface';

const Icon: React.FC<Props> = ({ name, ...props }) => {
    const SpecificIcon:any = Icons[ name ];
    const title = props.title || name;

    // Dynamically injecting the title into the SVG is only possible when using svgr/webpack (instead of the cli - to come next!)
    return (
        <span className="py-react-icon" title={title}>
            <SpecificIcon {...props} aria-labelledby="title"/>
        </span>
    );
};

export default Icon;

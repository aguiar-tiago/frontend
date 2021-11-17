import * as React from "react";

const SvgPromotionRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.94 11.06l-7.07 7.07M6.633 12.999l-3.463-.818a.5.5 0 01-.239-.84l2.754-2.754a1 1 0 01.699-.293l3.105-.027"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.879 8.975l.808-3.888a1.5 1.5 0 00-1.774-1.774l-3.888.808a5.993 5.993 0 00-3.021 1.632l-3.19 3.189a8.006 8.006 0 00-2.259 4.498l-.011.073a3.48 3.48 0 00.982 2.961v0a3.476 3.476 0 002.961.981l.073-.011a8 8 0 004.498-2.259l3.189-3.189a5.993 5.993 0 001.632-3.021zM13.4 4.714a22.415 22.415 0 015.886 5.886"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 17.367l.818 3.463a.5.5 0 00.84.239l2.754-2.754a1 1 0 00.293-.699l.027-3.105"
      />
    </g>
  </svg>
);

export default SvgPromotionRocket;

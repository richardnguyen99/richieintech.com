/**
 * Moon component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

const Moon: React.FC = () => {
  return (
    <svg width={18} height={18} viewBox="0 0 48 48" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 23.953V24c0 13.255-10.745 24-24 24S0 37.255 0 24C0 11.578 9.437 1.36 21.532.125A17.963 17.963 0 0015 14c0 9.941 8.059 18 18 18 6.26 0 11.775-3.197 15-8.047z"
        fill="#f5f5f5"
      />
    </svg>
  );
};

export default Moon;

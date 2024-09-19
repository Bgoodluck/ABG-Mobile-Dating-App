import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Home = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      color = 'black'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 21H5C4.44772 21 4 20.5523 4 20V9.41421C4 9.14806 4.10536 8.89464 4.29289 8.70711L11.2929 1.70711C11.6834 1.31658 12.3166 1.31658 12.7071 1.70711L19.7071 8.70711C19.8946 8.89464 20 9.14806 20 9.41421V20C20 20.5523 19.5523 21 19 21Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        // strokeLinejoin="round"
      />
      <Path
        d="M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        // strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Home;

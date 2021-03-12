import React from 'react';
import './style.scss';

interface IProps {
  text?: string;
  children?: React.ReactChild[] | React.ReactChild;
  className?: string;
}

const Li: React.FunctionComponent<IProps> = ({ text, className, children }: IProps): React.ReactElement => (
  <li className={className}>
    {text}
    {children}
  </li>
);

export default Li;

// function Ul({ text }: IProps): React.ReactElement {
//   return (
//     <>
//       <ul>{text}</ul>
//     </>
//   );
// }

// export default Ul;

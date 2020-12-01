import React from 'react';
import './style.scss';

interface IProps {
  text: string;
  className: string;
}

const Li: React.FunctionComponent<IProps> = ({ text, className }: IProps): React.ReactElement => (
  <li className={className}>{text}</li>
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

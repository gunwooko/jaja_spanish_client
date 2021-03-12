import React from 'react';
import './style.scss';

interface IProps {
  text?: string;
  children?: React.ReactChild[] | React.ReactChild;
  className?: string;
}

const Div: React.FunctionComponent<IProps> = ({ text, children, className }: IProps): React.ReactElement => (
  <div className={className}>
    {text}
    {children}
  </div>
);

export default Div;

// function Ul({ text }: IProps): React.ReactElement {
//   return (
//     <>
//       <ul>{text}</ul>
//     </>
//   );
// }

// export default Ul;

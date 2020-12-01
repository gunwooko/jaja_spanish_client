import React from 'react';
import './style.scss';

interface IProps {
  text?: string;
  children?: React.ReactChild[] | React.ReactChild;
  className?: string;
}

const Label: React.FunctionComponent<IProps> = ({ text, children, className }: IProps): React.ReactElement => (
  <label className={className}>
    {text}
    {children}
  </label>
);

export default Label;

// function Ul({ text }: IProps): React.ReactElement {
//   return (
//     <>
//       <ul>{text}</ul>
//     </>
//   );
// }

// export default Ul;

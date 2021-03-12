import Div from 'components/atoms/Div';
import React from 'react';

interface Props {
  className: string;
  goCourseSubmit?: () => void;
  goInfoDisplay?: () => void;
  goCompletedDisplay?: () => void;
}

const SubmitClassNav: React.FunctionComponent<Props> = ({
  className,
  goCourseSubmit,
  goInfoDisplay,
  goCompletedDisplay,
}: Props) => {
  return (
    <>
      <Div className="SubmitClassNav">
        <span>
          <hr className={`hr1 ${className}`} />
        </span>
        <button onClick={goInfoDisplay} className={`submitClassNav_btn1 ${className}`}>
          수강안내
        </button>
        <span>
          <hr className={`hr2 ${className}`} />
        </span>
        <button onClick={goCourseSubmit} className={`submitClassNav_btn2 ${className}`}>
          수강신청
        </button>
        <span>
          <hr className={`hr3 ${className}`} />
        </span>
        <button onClick={goCompletedDisplay} className={`submitClassNav_btn3 ${className}`}>
          신청완료
        </button>
        <span>
          <hr className={`hr4 ${className}`} />
        </span>
      </Div>
    </>
  );
};

export default SubmitClassNav;

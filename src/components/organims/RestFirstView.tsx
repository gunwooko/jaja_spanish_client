import React from 'react';

interface Props {
  name: string;
}

const RestFirstView: React.FunctionComponent<Props> = ({ name }: Props): React.ReactElement =>
  name === 'Company' ? (
    <div>Company</div>
  ) : name === 'Guide' ? (
    <div>Guide</div>
  ) : name === 'Teachers' ? (
    <div>Teachers</div>
  ) : name === 'Review' ? (
    <div>Review</div>
  ) : name === 'ReviewWriting' ? (
    <div>ReviewWriting</div>
  ) : (
    <div>FAQ</div>
  );

export default RestFirstView;

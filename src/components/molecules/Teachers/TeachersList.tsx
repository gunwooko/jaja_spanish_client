import Div from 'components/atoms/Div';
import React from 'react';
import './TeachersList.scss';

interface Props {
  foto: string;
  nombre: string;
  pais: string;
  description: string;
}

const TeachersList: React.FunctionComponent<Props> = ({ foto, nombre, pais, description }: Props) => (
  <div className="TeachersList_0">
    <div className="TeachersList_1">
      <img src={foto} alt={foto}></img>
      <Div className="teachersDetail">
        <Div className="teachersName">{nombre}</Div>
        <Div className="teachersPais">{pais}</Div>
        <Div className="teachersDesc">{description}</Div>
        <button>{'수업후기 보기 >'}</button>
      </Div>
    </div>
  </div>
);

export default TeachersList;

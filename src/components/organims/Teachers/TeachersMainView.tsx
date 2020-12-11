import TeachersList from 'components/molecules/Teachers/TeachersList';
import React from 'react';
import './TeachersMainView.scss';
import profes from 'testData/profes';

const TeachersMainView: React.FunctionComponent = () => (
  <div className="TeachersMainView">
    {profes.map((eachData) => (
      <TeachersList
        key={eachData.key}
        foto={eachData.foto}
        nombre={eachData.nombre}
        pais={eachData.pais}
        description={eachData.description}
      ></TeachersList>
    ))}
  </div>
);

export default TeachersMainView;

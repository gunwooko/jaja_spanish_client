import TeachersList from 'components/molecules/Teachers/TeachersList';
import React, { useEffect, useState } from 'react';
import './TeachersMainView.scss';
// import profes from 'testData/profes';
import { dbService } from 'fbase';

const TeachersMainView: React.FunctionComponent = () => {
  const [profes, setProfes] = useState([] as string[]);

  useEffect(() => {
    dbService.collection('profes').onSnapshot((snapshot) => {
      // eslint-disable-next-line
      const profesArray: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProfes(profesArray);
    });
    return () => setProfes([]);
  }, []);

  // console.log(profes);

  return (
    <div className="TeachersMainView">
      {
        // eslint-disable-next-line
      profes.map((profe: any) => (
          <TeachersList
            key={profe.key}
            foto={profe.foto}
            nombre={profe.nombre}
            pais={profe.pais}
            description={profe.description}
          ></TeachersList>
        ))
      }
    </div>
  );
};

export default TeachersMainView;

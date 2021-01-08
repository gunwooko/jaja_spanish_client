import { authService, dbService } from 'fbase';
import { useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line
const useGetCourseObject = (email:string, userId:string, hoy:string): any => {
  // eslint-disable-next-line
  const [init, setInit] = useState(false);
  const [courseObj, setCourseObj] = useState({});

  const test = async () => {
    const data = dbService.collection('courses').doc(`${email}`).collection(`${userId}`).doc(`${hoy}`).get();
    data.then((dat) => {
      const imp = dat.data();
      console.log(imp);
      setCourseObj(Object.assign({}, imp));
    });
  };
  useEffect(() => {
    test();
    return () => {
      test();
    };
  }, [courseObj]);

  /**
      .onSnapshot((snapshot) => {
        const courseArray = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log('?????', courseArray);
        setCourseObj(courseArray);
      });

      .doc(`${hoy}`)
      .get()
      .then((data) => {
        const a = data.data();
        console.log('???', a);
      });
    */

  // return () => {
  //   dbService
  //     .collection('courses')
  //     .doc(`${email}`)
  //     .collection(`${userId}`)
  //     .doc(`${hoy}`)
  //     .onSnapshot((snapshot) => {
  //       const courseObject = { ...snapshot.data() };
  //       setCourseObj(courseObject);
  //     });
  //   setInit(false);
  // };

  // return courseObj;

  //   const refreshCourse = async () => {
  //     // const user = await authService.currentUser;
  //     await dbService
  //       .collection('courses')
  //       .doc(`${email}`)
  //       .collection(`${userId}`)
  //       .doc(`${hoy}`)
  //       .onSnapshot((snapshot) => {
  //         const courseObject = { ...snapshot.data() };
  //         // setCourseObj(Object.assign({}, courseObject, { uid: user?.uid }));
  //         setCourseObj(courseObject);
  //       });
  //   };

  //   const returnObj = {
  //     courseObj,
  //     refreshCourse: () => refreshCourse(),
  //   };
  //   refreshCourse();
  //   const returnObj = useMemo(helpFunction, [courseObj]);
  //   helpFunction();
  if (courseObj !== undefined) {
    return courseObj;
  }
};

export default useGetCourseObject;

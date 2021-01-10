import { dbService } from 'fbase';
import { useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line
const useGetCourseObject = (email:string, userId:string, hoy:string): any => {
  // eslint-disable-next-line
  // const [init, setInit] = useState(false);
  const [courseObj, setCourseObj] = useState({});

  const test10 = async () => {
    const courseData = await dbService
      .collection('courses')
      .doc(`${email}`)
      .collection(`${userId}`)
      .doc(`${hoy}`)
      .get();

    const realData: any = courseData.data();
    setCourseObj(realData);
    console.log('realData', realData);
    console.log('???어떨까?', courseObj);
  };

  useEffect(() => {
    test10();
  }, []);

  // useEffect(() => {
  //   const test2 = dbService.collection('courses').doc(`${email}`).collection(`${userId}`).doc(`${hoy}`);

  //   test2
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log('document', doc.data());
  //         const courseDataObject = { ...doc.data() };
  //         setCourseObj(courseDataObject);
  //         setInit(true);
  //       } else {
  //         console.log('no such document!');
  //         setCourseObj({});
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   return () => {
  //     setInit(false);
  //   };
  // }, []);

  // const test = async () => {
  //   await dbService
  //     .collection('courses')
  //     .doc(`${email}`)
  //     .collection(`${userId}`)
  //     .doc(`${hoy}`)
  //     // .get();
  //     // data.then((dat) => {
  //     //   const courseData = dat.data();
  //     //   console.log(courseData);
  //     //   setCourseObj(Object.assign({}, courseData));
  //     // });
  //     .onSnapshot((snapshot) => {
  //       const courseObject = { ...snapshot.data() };
  //       setCourseObj(courseObject);
  //     });

  //   // return courseObj;
  // };

  // useEffect(() => {
  //   test();
  //   return () => {
  //     test();
  //   };
  // }, []);

  // const value = useMemo(() => courseObj, [courseObj]);

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
  // if (courseObj !== undefined) {
  //   return courseObj;
  // }
  return courseObj;
};

export default useGetCourseObject;

import { dbService } from 'fbase';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
const useGetCourseObject = (email:string, userId:string): any => {
  // eslint-disable-next-line
  const [courseArr, setCourseArr] = useState<any[]>([]);

  // const testArr: any[] = [];
  useEffect(() => {
    dbService
      .collection('courses')
      .doc(`${email}`)
      .collection(`${userId}`)
      .orderBy('startDate', 'desc')
      .onSnapshot((snapshot) => {
        const coursesArray: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log('???????', coursesArray);
        setCourseArr(coursesArray[0]);
      });
    return () => setCourseArr([]);
  }, []);

  // let coursesArray: any[] = [];
  // useEffect(() => {
  //   fetchCourseData();
  //   return () => setCourseArr([]);
  // }, []);

  // const fetchCourseData = async () => {
  //   dbService
  //     .collection('courses')
  //     .doc(`${userObj.email}`)
  //     .collection(`${userObj.userId}`)
  //     .orderBy('startDate', 'desc')
  //     .onSnapshot((snapshot) => {
  //       coursesArray = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setCourseArr(coursesArray);
  //     });
  // };

  return courseArr;
};

export default useGetCourseObject;

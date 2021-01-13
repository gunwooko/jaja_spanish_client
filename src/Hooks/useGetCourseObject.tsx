import { dbService } from 'fbase';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
const useGetCourseObject = (email:any, userId:any) => {
  // eslint-disable-next-line
  const [courseData, setCourseData] = useState<any>({});

  const fetchCourseData = async () => {
    const coursesData = await dbService
      .collection('courses')
      .doc(`${email}`)
      .collection(`${userId}`)
      .orderBy('startDate', 'desc');
    // eslint-disable-next-line
    const arr: any[] = [];
    coursesData.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        arr.push(doc.data());
      });

      setCourseData(arr[0]);
    });
  };

  useEffect(() => {
    fetchCourseData();
  }, [email]);

  return { courseData };
};

export default useGetCourseObject;

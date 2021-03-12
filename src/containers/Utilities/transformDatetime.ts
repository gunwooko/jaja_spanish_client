const transformDatetime = (datetime: string): string | undefined => {
  //   const index: number = datetime.indexOf('T');
  if (!datetime) {
    return '준비중...';
  }
  if (datetime) {
    const dateTimeArray = datetime.split('T');
    const resultDatetime = `${dateTimeArray[0]} ${dateTimeArray[1]}`;

    return resultDatetime;
  }
};

export default transformDatetime;

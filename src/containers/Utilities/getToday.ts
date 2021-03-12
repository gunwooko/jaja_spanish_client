const getTodayUtil = (): string => {
  const today = new Date();
  let dd = today.getDate().toString();
  let mm = (today.getMonth() + 1).toString();
  const yyyy = today.getFullYear().toString();
  if (Number(dd) < 10) {
    dd = '0' + dd.toString();
  }
  if (Number(mm) < 10) {
    mm = '0' + mm;
  }
  const hoy = yyyy + '-' + mm + '-' + dd;

  return hoy;
};

export default getTodayUtil;

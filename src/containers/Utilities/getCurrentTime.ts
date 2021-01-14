const getCurrentTime = (): string => {
  const today = new Date();

  const hours = today.getHours().toString();
  const minutes = today.getMinutes().toString();

  const currentTime = hours + ':' + minutes;

  return currentTime;
};

export default getCurrentTime;

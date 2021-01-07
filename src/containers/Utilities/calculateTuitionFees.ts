const type = [
  { 주_2회_28분: '100,000' },
  { 주_3회_28분: '144,000' },
  { 주_4회_28분: '184,000' },
  { 주_5회_28분: '220,000' },
  { 주_1회_58분: '100,000' },
  { 주_2회_58분: '184,000' },
  { 주_3회_58분: '264,000' },
  { 주_4회_58분: '352,000' },
  { 주_5회_58분: '420,000' },
];
const calculateTuitionFees = (classType: string): string | undefined => {
  const newArray = Object.values(type);

  for (let i = 0; i < newArray.length; i++) {
    const target = Object.keys(newArray[i])[0];

    if (target === classType) {
      return Object.values(newArray[i])[0];
    }
  }
};

export default calculateTuitionFees;

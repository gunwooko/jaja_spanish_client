import sha256 from 'crypto-js/sha256';

const getHashedPassword = (password: string): string => {
  const hashDigest = sha256(password);

  return hashDigest.toString();
};

export default getHashedPassword;

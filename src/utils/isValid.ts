const isValid = {
  email: (email: string) => {
    return email.includes('@');
  },
  password: (password: string) => {
    return password.length >= 8;
  },
};

export default isValid;

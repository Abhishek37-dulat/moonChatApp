const accessurl = process.env.REACT_APP_URL;

const urls = {
  auth: {
    signup: `${accessurl}/api/user/signup`,
    login: `${accessurl}/api/user/login`,
    verify: `${accessurl}/api/user/verify`,
  },
};

export default urls;

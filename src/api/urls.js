const accessurl = process.env.REACT_APP_URL;

const urls = {
  auth: {
    signup: `${accessurl}/api/user/signup`,
  },
};

export default urls;

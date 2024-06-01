const accessurl = process.env.REACT_APP_URL;

const urls = {
  auth: {
    signup: `${accessurl}/api/user/signup`,
    login: `${accessurl}/api/user/login`,
    verify: `${accessurl}/api/user/verify`,
    premium: `${accessurl}/api/payment/premium`,
    profile: `${accessurl}/api/user/profile`,
    forgotpassword: `${accessurl}/api/user/forgot`,
    verifyforgotpassword: `${accessurl}/api/user/forgot`,
    changepassword: `${accessurl}/api/user/change`,
    getincome: `${accessurl}/api/user/income`,
    updateincome: `${accessurl}/api/user/income`,
  },
  expense: {
    create_product: `${accessurl}/api/expense/create_product`,
    update_product: `${accessurl}/api/expense/update`,
    getall_product: `${accessurl}/api/expense/all_product`,
    single_product: `${accessurl}/api/expense/single`,
    delete_product: `${accessurl}/api/expense/delete`,
    search_product: `${accessurl}/api/expense/search`,
  },
};

export default urls;

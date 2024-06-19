const accessurl = process.env.REACT_APP_URL;

const urls = {
  auth: {
    signup: `${accessurl}/api/users/register`,
    login: `${accessurl}/api/users/login`,
    verify: `${accessurl}/api/users/verify`,
    profile: `${accessurl}/api/users/profile`,
    profileupdate: `${accessurl}/api/users/profile`,
    allusers: `${accessurl}/api/users/alluser`,
    searchme: `${accessurl}/api/users/search`,
    forgotpassword: `${accessurl}/api/users/forgot`,
    verifyforgotpassword: `${accessurl}/api/users/forgot`,
    changepassword: `${accessurl}/api/users/change`,
  },
  chat: {
    newchat: `${accessurl}/api/chats`,
    newMessage: `${accessurl}/api/messages`,
    getchat: `${accessurl}/api/users`,
    getchatMember: `${accessurl}/api/chats`,
    getMessage: `${accessurl}/api/chats`,
  },
};

export default urls;

import HomePage from "../components/chatComponents/HomePage";
import { UserLogin } from "../components/userComponents";
import { UserSignup } from "../components/userComponents";
import UserVerify from "../components/userComponents/UserVerify";

const userRoutes = [
  {
    path: "/login",
    component: UserLogin,
  },
  {
    path: "/signup",
    component: UserSignup,
  },
  {
    path: "/user/verify/:id",
    component: UserVerify,
  },
  // {
  //   path: "/forgotpassward",
  //   component: ForgotPassword,
  // },
  // {
  //   path: "/underprocess",
  //   component: GoToEmailVerify,
  // },
];

const profileRoutes = [
  // {
  //   path: "/profile",
  //   component: UserProfile,
  // },
  // {
  //   path: "/profile/analysis",
  //   component: UserAnalysis,
  // },
];

const layoutRoutes = [
  {
    path: "/chat",
    component: HomePage,
  },
];

export { userRoutes, profileRoutes, layoutRoutes };

import { SignupForm } from "screens/AuthScreen";

import { Header } from "widgets/Header";

import css from "./auth.module.scss";

export default function Page() {
   return (
      <div className={css.layout}>
         <Header />
         <div className={css.layout_content}>
            <div className={css.layout_form}>
               <SignupForm />
            </div>
            {/* <h1 className={css.layout_title}>SIGN UP</h1> */}
         </div>
      </div>
   );
}

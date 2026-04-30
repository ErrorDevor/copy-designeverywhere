import { LoginForm } from "screens/AuthScreen";

import { Header } from "widgets/Header";

import css from "./auth.module.scss";

export default function Page() {
   return (
      <div className={css.layout}>
         <Header />
         <div className={css.layout_content}>
            <div className={css.layout_form}>
               <LoginForm />
            </div>
            {/* <h1 className={css.layout_title}>LOG IN</h1> */}
         </div>
      </div>
   );
}

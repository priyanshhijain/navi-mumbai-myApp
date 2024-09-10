import Image from "next/image";
import './frontpage/page'
import FrontPage from "./frontpage/page";
import LoginSignupPage from "./login-signup/page";


export default function Home() {
  return (
    <main className="">
  
      <LoginSignupPage />
      
    </main>
  );
}

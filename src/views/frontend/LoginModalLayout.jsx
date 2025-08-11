import { LoginComponent } from "@/components/LoginComponent";
import { RegisterComponent } from "@/components/RegisterComponent";
import { useState } from "react";

export function LoginModalLayout({ setLogin }) {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
        <div className="modal-content overflow-hidden">
          {isLoginPage ? (
            <LoginComponent
              setLogin={setLogin}
              setIsLoginPage={setIsLoginPage}
            />
          ) : (
            <RegisterComponent setIsLoginPage={setIsLoginPage} />
          )}
        </div>
      </div>
    </div>
  );
}

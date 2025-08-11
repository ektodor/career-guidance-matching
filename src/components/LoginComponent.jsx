import login from "@images/about/login.png";
import google from "@images/google.svg";
import discord from "@images/discord.svg";
import { ButtonComponent } from "./ButtonComponent";
import { mdiChevronRight } from "@mdi/js";
export function LoginComponent({ setLogin, setIsLoginPage }) {
  return (
    <div className="d-flex">
      <div style={{ minWidth: "700px" }} className="d-none d-lg-block">
        <img src={login} alt="" className=" img-fluid" />
      </div>
      <div className="w-100">
        <div className="mt-4 mx-lg-4 mx-12px position-relative ">
          <h1
            className="modal-title fs-4xl fw-bold lh-sm mb-0 text-center pt-4"
            id="exampleModalLabel"
          >
            登入
          </h1>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className=" p-lg-5 p-4">
          <div className="pb-4 border-bottom border-1 border-primary">
            <ButtonComponent isOutline={true} otherClass={"mb-3 w-100"}>
              <div className="d-flex align-items-center">
                <img src={google} alt="" />
                Google
              </div>
            </ButtonComponent>
            <ButtonComponent isOutline={true} otherClass={"w-100"}>
              <div className="d-flex align-items-center">
                <img src={discord} alt="" />
                Discord
              </div>
            </ButtonComponent>
          </div>
          <div className="pt-4 ">
            <div className="form-floating mb-3 ">
              <input
                id="account"
                type="text"
                className="form-control fs-sm "
                placeholder="帳號"
              />
              <label htmlFor="account" className=" fs-sm">
                帳號
              </label>
            </div>
            <div className="form-floating mb-3 ">
              <input
                id="password"
                type="password"
                className="form-control fs-sm "
                placeholder="密碼"
              />
              <label htmlFor="password" className=" fs-sm">
                密碼
              </label>
            </div>
            <div className=" mb-3 text-end">
              <a
                href="/"
                className="fs-sm text-secondary link-underline-opacity-0 link-underline"
              >
                忘記密碼
              </a>
            </div>
            <ButtonComponent
              otherClass={"w-100"}
              icon={mdiChevronRight}
              iconPosition="right"
              cliclEvent={() => setLogin(true)}
              dismiss={"modal"}
            >
              送出
            </ButtonComponent>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="fs-md fw-medium lh-sm mb-0">不是會員？</p>
          <a
            href="#"
            className="fs-md fw-medium lh-sm mb-0 text-hover-primary link-offset-1 "
            onClick={() => setIsLoginPage(false)}
          >
            快速註冊
          </a>
        </div>
      </div>
    </div>
  );
}

import register from "@images/about/register.png";
import google from "@images/google.svg";
import discord from "@images/discord.svg";
import { ButtonComponent } from "./ButtonComponent";
import { mdiChevronRight } from "@mdi/js";
import { CheckboxComponent } from "./CheckboxComponent";
import { useState } from "react";
export function RegisterComponent({ setIsLoginPage }) {
  const [ruleCheckbox, setRuleCheckbox] = useState(false);
  return (
    <div className="d-flex modal-body p-0">
      <div className="w-100">
        <div className="mt-4 mx-lg-4 mx-12px position-relative">
          <h1
            className="modal-title fs-4xl fw-bold lh-sm mb-0 text-center pt-4"
            id="exampleModalLabel"
          >
            註冊
          </h1>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className=" p-lg-5 p-4 ">
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
            <div className="form-floating mb-3 ">
              <input
                id="passwordAgain"
                type="password"
                className="form-control fs-sm "
                placeholder="密碼"
              />
              <label htmlFor="passwordAgain" className=" fs-sm">
                密碼
              </label>
            </div>
            <div className="form-floating mb-3 ">
              <input
                id="passwordCheck"
                type="password"
                className="form-control fs-sm "
                placeholder="確認密碼"
              />
              <label htmlFor="passwordCheck" className=" fs-sm">
                確認密碼
              </label>
            </div>
            <div className=" mb-3 ">
              <CheckboxComponent
                id={"rule"}
                name={"rule"}
                value={"我同意服務條款和隱私政策"}
                checkList={ruleCheckbox}
                setCheckList={setRuleCheckbox}
              >
                <p className="mb-0">
                  我同意<a href="#">服務條款</a>和<a href="#">隱私政策</a>
                </p>
              </CheckboxComponent>
            </div>
            <ButtonComponent
              otherClass={"w-100"}
              icon={mdiChevronRight}
              iconPosition="right"
            >
              送出
            </ButtonComponent>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-5 ">
          <p className="fs-md fw-medium lh-sm mb-0">已經是會員？</p>
          <a
            href="#"
            onClick={() => setIsLoginPage(true)}
            className="fs-md fw-medium lh-sm mb-0 text-hover-primary link-offset-1"
          >
            直接登入
          </a>
        </div>
      </div>
      <div style={{ minWidth: "700px" }} className="d-none d-lg-block">
        <img
          src={register}
          alt=""
          className=" img-fluid h-100 object-fit-fill"
        />
      </div>
    </div>
  );
}

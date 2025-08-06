import { ButtonComponent } from "../../components/ButtonComponent";
import avatar from "../../assets/images/avatar.png";
import { mdiChevronRight, mdiTrayArrowUp } from "@mdi/js";
import { RadioComponent } from "../../components/RadioComponent";
import { useState } from "react";
export function UserInfo() {
  const gender = [
    { id: "woman", value: "女性" },
    { id: "man", value: "男性" },
    { id: "none", value: "不願透露" },
  ];
  const [genderRadio, setGenderRadio] = useState(gender[0]?.value);
  return (
    <>
      <form>
        <div className="d-md-flex">
          <h1 className="mb-3 fw-medium fs-5 lh-sm backend-title-width  me-lg-4">
            個人資料
          </h1>
          <div className="w-100">
            <div className="d-flex mb-3 mb-lg-4">
              <img src={avatar} alt="avatar" className=" me-3 rounded-circle" />
              <ButtonComponent
                isOutline={true}
                icon={mdiTrayArrowUp}
                otherClass={"align-self-end"}
              >
                更新頭貼
              </ButtonComponent>
            </div>
            <div className="form-floating mb-3  mb-lg-4">
              <input
                id="name"
                type="text"
                className="form-control fs-sm "
                defaultValue="Mokumaru"
              />
              <label htmlFor="name" className=" fs-sm">
                姓名
              </label>
            </div>
            <div className="mb-3  mb-lg-4">
              <h2 className="fs-md fw-normal mb-2">性別</h2>
              <div className=" d-flex ps-2 column-gap-3">
                {gender.map((item) => {
                  return (
                    <RadioComponent
                      id={item.id}
                      value={item.value}
                      key={item.id}
                      radio={genderRadio}
                      setRadio={setGenderRadio}
                    />
                  );
                })}
              </div>
            </div>
            <div className="form-floating mb-3  mb-lg-4">
              <input id="birth" type="date" className="form-control fs-md " />
              <label htmlFor="birth" className="fs-sm">
                生日
              </label>
            </div>
            <div className="mb-3  mb-lg-4">
              <h2 className="fs-md fw-normal">密碼</h2>
              <ButtonComponent
                isOutline={true}
                icon={mdiChevronRight}
                iconPosition="right"
                type="button"
                toggle="modal"
                target="#exampleModal"
              >
                修改密碼
              </ButtonComponent>
            </div>
            <div className="form-floating mb-3  mb-lg-4">
              <input
                id="mail"
                type="mail"
                className="form-control fs-md"
                defaultValue={"mokumaru@mail.com"}
              />
              <label htmlFor="mail" className="fs-sm">
                信箱
              </label>
              <p className="form-text fs-sm mb-0 text-secondary px-2">
                盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信
              </p>
            </div>
            <div className="form-floating mb-3  mb-lg-4">
              <input
                id="phone"
                type="number"
                className="form-control fs-md"
                defaultValue={"0912345678"}
              />
              <label htmlFor="phone" className="fs-sm">
                聯絡電話
              </label>
            </div>
            <div className="form-floating ">
              <input
                id="address"
                type="text"
                className="form-control fs-md"
                defaultValue={"高雄市三民區九如一路 87 號"}
              />
              <label htmlFor="address" className="fs-sm">
                通訊地址
              </label>
            </div>
          </div>
        </div>
        <div className="mt-80px mt-lg-5 d-flex flex-column flex-lg-row justify-content-center">
          <ButtonComponent
            isOutline={false}
            icon={mdiChevronRight}
            type="submit"
            iconPosition="right"
            otherClass="mb-3 mb-lg-0 w-100 order-lg-last w-lg-auto ms-lg-4"
          >
            儲存更新
          </ButtonComponent>
          <ButtonComponent
            isOutline={true}
            icon={mdiChevronRight}
            iconPosition="right"
            otherClass="w-100 w-lg-auto"
          >
            重新填寫
          </ButtonComponent>
        </div>
      </form>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header px-4 py-18px">
              <h5 className="modal-title mb-0 fw-medium fs-xl lh-sm">
                更新密碼
              </h5>
              <button
                type="button"
                style={{ fontSize: "14px" }}
                className="btn-close p-10px"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="form-floating mb-4">
                <input
                  id="newPwd"
                  className="form-control fs-md"
                  type="text"
                  placeholder="新密碼"
                />
                <label htmlFor="newPwd" className="fs-sm">
                  新密碼
                </label>
              </div>
              <div className="form-floating ">
                <input
                  id="newPwdAgain"
                  className="form-control fs-md"
                  placeholder="再次密碼"
                />
                <label htmlFor="newPwdAgain" className="fs-sm">
                  再次密碼
                </label>
              </div>
            </div>
            <div className="modal-footer py-3  px-0">
              <ButtonComponent
                isOutline={false}
                icon={mdiChevronRight}
                type="submit"
                iconPosition="right"
                otherClass="ps-20px pe-12px m-0 me-4"
              >
                更新密碼
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

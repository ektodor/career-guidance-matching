import { CheckboxComponent } from "@/components/CheckboxComponent";
import { RadioComponent } from "@/components/RadioComponent";
import { SelectCompnent } from "@/components/SelectCompnent";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiCalendarMonthOutline } from "@mdi/js";
import { ButtonComponent } from "@/components/ButtonComponent";
import icon from "@images/contact/form-top.svg";
export function Contact() {
  const industry = [
    { name: "科技", value: "科技" },
    { name: "媒體", value: "媒體" },
    { name: "教育", value: "教育" },
    { name: "金融", value: "金融" },
    { name: "醫療健康", value: "醫療健康" },
    { name: "零售製造", value: "零售製造" },
    { name: "服務業", value: "服務業" },
    { name: "藝術創意", value: "藝術創意" },
    { name: "非營利組織", value: "非營利組織" },
  ];
  const [industrySelect, setIndustrySelect] = useState("目前職業/工作身分");
  const expert = [
    { name: "專家Ａ", value: "專家Ａ" },
    { name: "專家Ｂ", value: "專家Ｂ" },
    { name: "專家Ｃ", value: "專家Ｃ" },
  ];
  const [expertSelect, setExpertSelect] = useState("期望諮詢的專家");
  const consult = [
    { id: "consult1", value: "職涯探索與方向" },
    { id: "consult2", value: "接案與技能變現" },
    { id: "consult3", value: "品牌與內容經營" },
    { id: "consult4", value: "遠端工作與數位游牧" },
    { id: "consult5", value: "收入與時間管理" },
    { id: "consult6", value: "其他（請填寫下題）" },
  ];
  const [consultCheckbox, setConsultCheckbox] = useState([]);
  const contactMethod = [
    { id: "mail", value: "信箱" },
    { id: "phone", value: "電話" },
    { id: "line", value: "LINE" },
    { id: "dicord", value: "Discord" },
  ];
  const [contactMethodRadio, setContactMethodRadio] = useState(
    contactMethod[0]?.value
  );
  const contactTime = [
    { id: "contactTime1", value: "平日上午(9:00-12:00)" },
    { id: "contactTime2", value: "平日下午(13:00-17:00)" },
    { id: "contactTime3", value: "平日晚上(18:00-21:00)" },
    { id: "contactTime4", value: "週末上午(9:00-12:00)" },
    { id: "contactTime5", value: "週末下午(13:00-17:00)" },
    { id: "contactTime6", value: "週末晚上(18:00-21:00)" },
  ];
  const [contactTimeCheckbox, setContactTimeCheckbox] = useState([]);
  const findOutUs = [
    { id: "findOutUs1", value: "Google 搜尋" },
    { id: "findOutUs2", value: "Instagram" },
    { id: "findOutUs3", value: "Facebook" },
    { id: "findOutUs4", value: "Threads" },
    { id: "findOutUs5", value: "YouTube" },
    { id: "findOutUs6", value: "Podcast / 節目推薦" },
    { id: "findOutUs7", value: "朋友或同事推薦" },
    { id: "findOutUs8", value: "曾參加職旅活動 / 工作坊" },
    { id: "findOutUs9", value: "職涯顧問介紹" },
    { id: "findOutUs10", value: "其他（請填寫下題）" },
  ];
  const [findOutUsCheckbox, setFindOutUsCheckbox] = useState([]);
  const [rule1Checkbox, setRule1Checkbox] = useState(false);
  const [rule2Checkbox, setRule2Checkbox] = useState(false);
  return (
    <main className="py-5  bg-secondary">
      <div className="container ">
        <div className="mb-4 mb-lg-5 position-relative">
          <h1 className="fs-4xl fw-bold lh-sm mb-3 text-center mb-lg-4">
            聯絡我們
          </h1>
          <p className="fs-lg text-secondary text-center mb-0">
            每一封郵件，我們都會親自回覆。每一通電話，都是新可能的開始。
          </p>
          <img
            src={icon}
            className="d-none d-lg-block position-absolute top-0 end-0 me-40px"
          ></img>
        </div>

        <div className="p-4 p-lg-5 bg-primary rounded-4 backend-shadow">
          <section className=" pb-4 pb-lg-5 border-1 border-bottom border-primary d-lg-flex">
            <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-lg-4">
              <h2 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">
                基本資料
              </h2>
              <div className="ms-auto d-flex align-items-center ms-lg-0">
                <p className="mb-0 text-center fs-md text-secondary">
                  欄位皆為
                </p>
                <span class="badge rounded-pill text-bg-danger py-1 px-2 ms-1 fs-sm fw-medium lh-sm">
                  必填
                </span>
              </div>
            </div>
            <div className=" d-lg-flex flex-column w-100">
              <div className="form-floating mb-3  mb-lg-4">
                <input
                  id="name"
                  type="text"
                  className="form-control fs-md"
                  placeholder="姓名"
                />
                <label htmlFor="name" className="fs-sm">
                  姓名
                </label>
              </div>
              <div className="form-floating mb-3  mb-lg-4">
                <input
                  id="mail"
                  type="mail"
                  className="form-control fs-md"
                  placeholder="信箱"
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
                  type="tel"
                  className="form-control fs-md"
                  placeholder="聯絡電話"
                />
                <label htmlFor="phone" className="fs-sm">
                  聯絡電話
                </label>
                <p className="form-text fs-sm mb-0 text-secondary px-2">
                  我們不會以電話主動聯繫您，告知您要至ATM操作轉帳
                </p>
              </div>
              <SelectCompnent
                select={industrySelect}
                list={industry}
                setSelect={setIndustrySelect}
              />
            </div>
          </section>
          <section className="py-4 py-md-5 border-1 border-bottom border-primary d-lg-flex">
            <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-lg-4">
              <h2 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">
                諮詢需求
              </h2>
              <div className="ms-auto d-flex align-items-center ms-lg-0">
                <p className="mb-0 text-center fs-md text-secondary">
                  欄位皆為
                </p>
                <span class="badge rounded-pill text-bg-danger py-1 px-2 ms-1 fs-sm fw-medium lh-sm">
                  必填
                </span>
              </div>
            </div>
            <div>
              <div className="mb-3 mb-lg-4">
                <h3 className="mb-2 fs-md text-primary fw-normal lh-base">
                  諮詢主題
                </h3>
                <div className="d-flex flex-wrap column-gap-3 column-gap-lg-4 row-gap-2 px-2 mb-2">
                  {consult.map((item) => {
                    return (
                      <CheckboxComponent
                        key={item.id}
                        name="consult"
                        id={item.id}
                        value={item.value}
                        checkList={consultCheckbox}
                        setCheckList={setConsultCheckbox}
                      />
                    );
                  })}
                </div>
                <p className="form-text fs-sm mb-0 text-secondary px-2">
                  可複選，讓我們更了解你的狀況，安排最適合的顧問與建議。
                </p>
              </div>
              <div className="mb-3 mb-lg-4">
                <SelectCompnent
                  select={expertSelect}
                  list={expert}
                  setSelect={setExpertSelect}
                />
              </div>
              <textarea
                className="form-control fs-md py-3 mb-3 mb-lg-4"
                placeholder="您目前面臨的主要挑戰"
                style={{ minHeight: "160px" }}
              ></textarea>
              <textarea
                className="form-control fs-md py-3"
                placeholder="期望達成的目標"
                style={{ minHeight: "160px" }}
              ></textarea>
            </div>
          </section>
          <section className="py-4 py-md-5 d-lg-flex">
            <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-lg-4 ">
              <h2 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">
                聯絡偏好
              </h2>
              <div className="ms-auto d-flex align-items-center ms-lg-0">
                <p className="mb-0 text-center fs-md text-secondary">
                  欄位皆為選填
                </p>
              </div>
            </div>
            <div>
              <div className="mb-3 mb-lg-4">
                <h3 className="mb-2 fs-md text-primary fw-normal lh-base">
                  偏好聯絡方式
                </h3>
                <div className="d-flex flex-wrap column-gap-3 column-gap-lg-4 row-gap-2 px-2 mb-3 mb-lg-4">
                  {contactMethod.map((item) => {
                    return (
                      <RadioComponent
                        name="contactMethod"
                        id={item.id}
                        value={item.value}
                        key={item.id}
                        radio={contactMethodRadio}
                        setRadio={setContactMethodRadio}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="mb-3 mb-lg-4">
                <h3 className="mb-2 fs-md text-primary fw-normal lh-base">
                  偏好聯絡時段
                </h3>
                <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-2">
                  {contactTime.map((item) => {
                    return (
                      <CheckboxComponent
                        key={item.id}
                        name="contactTime"
                        id={item.id}
                        value={item.value}
                        checkList={contactTimeCheckbox}
                        setCheckList={setContactTimeCheckbox}
                      />
                    );
                  })}
                </div>
                <p className="form-text fs-sm mb-0 text-secondary px-2 ">
                  建議您可以勾選 2 個時段以上
                </p>
              </div>
              <div className="form-floating mb-3  mb-lg-4  position-relative">
                <input
                  id="day"
                  type="text"
                  placeholder=""
                  className="form-control fs-md"
                />
                <Icon
                  path={mdiCalendarMonthOutline}
                  size={"20px"}
                  className="position-absolute top-50 end-0 translate-middle-y me-12px"
                />
                <label htmlFor="day" className="fs-sm">
                  預約諮詢時間
                </label>
              </div>
              <div className="mb-3 mb-lg-4">
                <h3 className="mb-2 fs-md text-primary fw-normal lh-base">
                  偏好聯絡時段
                </h3>
                <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-2">
                  {findOutUs.map((item) => {
                    return (
                      <CheckboxComponent
                        key={item.id}
                        name="findOutUs"
                        id={item.id}
                        value={item.value}
                        checkList={findOutUsCheckbox}
                        setCheckList={setFindOutUsCheckbox}
                      />
                    );
                  })}
                </div>
                <p className="form-text fs-sm mb-0 text-secondary px-2">
                  最多勾選 3 個
                </p>
              </div>
              <div className="form-floating  mb-3 mb-lg-4">
                <textarea
                  className="form-control fs-md"
                  placeholder="有什麼其他想告訴我們的事情嗎？（最多300字）"
                  style={{ minHeight: "160px" }}
                  maxLength={300}
                  id="message"
                ></textarea>
                <label htmlFor="message" className=" text-wrap">
                  有什麼其他想告訴我們的事情嗎？（最多300字）
                </label>
              </div>
              <div className="mb-2">
                <CheckboxComponent
                  id={"rule1"}
                  name={"rule1"}
                  value={"我願意接收職旅最新資訊和專業內容"}
                  checkList={rule1Checkbox}
                  setCheckList={setRule1Checkbox}
                  otherClass={"justify-content-start"}
                >
                  我願意接收職旅最新資訊和專業內容
                </CheckboxComponent>
              </div>
              <div>
                <CheckboxComponent
                  id={"rule2"}
                  name={"rule2"}
                  value={"我同意服務條款和隱私政策"}
                  checkList={rule2Checkbox}
                  setCheckList={setRule2Checkbox}
                >
                  <p className="mb-0">
                    我同意<a href="#">服務條款</a>和<a href="#">隱私政策</a>
                  </p>
                </CheckboxComponent>
              </div>
            </div>
          </section>
          <section className=" d-flex flex-column flex-lg-row justify-content-center">
            <ButtonComponent
              isOutline={false}
              icon={mdiChevronRight}
              type="submit"
              iconPosition="right"
              otherClass="mb-3 mb-lg-0 w-100 order-lg-last w-lg-auto ms-lg-4"
            >
              確認送出
            </ButtonComponent>
            <ButtonComponent
              isOutline={true}
              icon={mdiChevronRight}
              iconPosition="right"
              otherClass="w-100 w-lg-auto"
            >
              重新填寫
            </ButtonComponent>
          </section>
        </div>
      </div>
    </main>
  );
}

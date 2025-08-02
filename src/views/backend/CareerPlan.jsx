import { SelectCompnent } from "../../components/SelectCompnent";
import { RadioComponent } from "../../components/RadioComponent";
import { mdiTrayArrowUp, mdiChevronRight } from "@mdi/js";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useState } from "react";
import { CheckboxComponent } from "../../components/CheckboxComponent";
export function CareerPlan() {
  const careerList = [
    { id: "fullTime", value: "全職上班族" },
    { id: "partTime", value: "兼職工作者" },
    { id: "freelance", value: "自由工作者/接案者" },
    { id: "digitalNomad", value: "數位遊牧者" },
    { id: "entrepreneur", value: "創業者/企業主" },
    { id: "unemployed", value: "待業中" },
    { id: "otherCareer", value: "其他" },
  ];
  const [careerRadio, setCareerRadio] = useState(careerList[0]?.value);
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
  const [industrySelect, setIndustrySelect] = useState("工作產業");
  const year = [
    { name: "1 年以下", value: "1 年以下" },
    { name: "1-3 年", value: "1-3 年" },
    { name: "3-5 年", value: "3-5 年" },
    { name: "5-10 年", value: "5-10 年" },
    { name: "10 年以上", value: "10 年以上" },
  ];
  const [yearSelect, setYearSelect] = useState("工作年資");
  const salary = [
    { id: "1", value: "3 萬以下" },
    { id: "2", value: "3-5 萬" },
    { id: "3", value: "5-8 萬" },
    { id: "4", value: "8-12 萬" },
    { id: "5", value: "12-20 萬" },
    { id: "6", value: "20 萬以上" },
  ];
  const [salaryRadio, setSalaryRadio] = useState(salary[0]?.value);
  const idealWorkingMode = [
    { id: "office", value: "固定辦公室工作" },
    { id: "hybrid", value: "混合式工作(辦公室+遠端)" },
    { id: "remote", value: "完全遠端工作(固定地點)" },
    { id: "nomadism", value: "數位遊牧(邊工作邊旅行)" },
    { id: "otherPlace", value: "其他(請說明)" },
  ];
  const [idealWorkingModeRadio, setIdealWorkingModeRadio] = useState(
    idealWorkingMode[0]?.value
  );
  const careerChallenges = [
    { id: "careerChallenges1", value: "方向不明確" },
    { id: "careerChallenges2", value: "技能需要提升" },
    { id: "careerChallenges3", value: "收入不穩定" },
    { id: "careerChallenges4", value: "客戶開發困難" },
    { id: "careerChallenges5", value: "時間管理問題" },
    { id: "careerChallenges6", value: "工作生活失衡" },
    { id: "careerChallenges7", value: "缺乏人脈資源" },
    { id: "careerChallenges8", value: "其他(請說明)" },
  ];
  const [careerChallengesCheckbox, setCareerChallengesCheckbox] = useState([]);
  const expect = [
    { id: "expect1", value: "職涯方向指導" },
    { id: "expect2", value: "專業技能提升建議" },
    { id: "expect3", value: "個人品牌建立" },
    { id: "expect4", value: "接案策略與定價" },
    { id: "expect5", value: "客戶開發方法" },
    { id: "expect6", value: "財務規劃" },
    { id: "expect7", value: "時間管理系統" },
    { id: "expect8", value: "工作生活平衡" },
    { id: "expect9", value: "其他(請說明)" },
  ];
  const [expectCheckbox, setExpectCheckbox] = useState([]);
  const service = [
    { id: "service1", value: "探索定位" },
    { id: "service2", value: "客製化方案" },
    { id: "service3", value: "實戰指導" },
  ];
  const [serviceCheckbox, setServiceCheckbox] = useState([]);
  const expertise = [
    { id: "expertise1", value: "設計/創意" },
    { id: "expertise2", value: "科技/程式開發" },
    { id: "expertise3", value: "行銷/公關" },
    { id: "expertise4", value: "內容創作/寫作" },
    { id: "expertise5", value: "顧問/諮詢" },
    { id: "expertise6", value: "商業/管理" },
    { id: "expertise7", value: "財務/會計" },
    { id: "expertise8", value: "教育/培訓" },
    { id: "expertise9", value: "法律/合規" },
    { id: "expertise10", value: "健康/醫療" },
  ];
  const [expertiseCheckbox, setExpertiseCheckbox] = useState([]);
  return (
    <main>
      <section className=" pb-4 pb-md-5 border-1 border-bottom border-primary d-lg-flex">
        <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-md-4">
          <h1 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">
            職旅計劃概況
          </h1>
          <div className="ms-auto d-flex align-items-center ms-lg-0">
            <p className="mb-0 text-center fs-md text-secondary">欄位皆為</p>
            <span class="badge rounded-pill text-bg-danger py-1 px-2 ms-1 fs-sm fw-medium lh-sm">
              必填
            </span>
          </div>
        </div>
        <div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              目前職業狀態
            </h2>
            <div className="d-flex flex-wrap column-gap-3 column-gap-lg-4 row-gap-2 px-2 mb-3 mb-md-4">
              {careerList.map((item) => {
                return (
                  <RadioComponent
                    name="career"
                    id={item.id}
                    value={item.value}
                    key={item.id}
                    radio={careerRadio}
                    setRadio={setCareerRadio}
                  />
                );
              })}
            </div>
            <div className="mb-3 mb-md-4">
              <SelectCompnent
                select={industrySelect}
                list={industry}
                setSelect={setIndustrySelect}
              />
            </div>
            <div>
              <SelectCompnent
                select={yearSelect}
                setSelect={setYearSelect}
                list={year}
              />
            </div>
          </div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              月收入區間
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3 mb-md-4">
              {salary.map((item) => {
                return (
                  <RadioComponent
                    name="salary"
                    id={item.id}
                    value={item.value}
                    key={item.id}
                    radio={salaryRadio}
                    setRadio={setSalaryRadio}
                  />
                );
              })}
            </div>
            <textarea
              className="form-control fs-md py-3 mb-3 mb-md-4"
              placeholder="職業摘要（簡短描述您的專業背景和核心競爭力最多 300 字）"
              style={{ minHeight: "160px" }}
              maxLength={300}
            ></textarea>
            <input
              className="form-control fs-md py-3"
              placeholder="作品案例展示"
            ></input>
          </div>
          <div>
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              附加檔案
            </h2>
            <ButtonComponent
              isOutline={true}
              icon={mdiTrayArrowUp}
              otherClass={"align-self-end"}
            >
              上傳檔案
            </ButtonComponent>
          </div>
        </div>
      </section>
      <section className="py-4 py-md-5 border-1 border-bottom border-primary d-lg-flex">
        <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-md-4">
          <h1 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">職涯規劃</h1>
          <div className="ms-auto d-flex align-items-center ms-lg-0">
            <p className="mb-0 text-center fs-md text-secondary">欄位皆為</p>
            <span class="badge rounded-pill text-bg-danger py-1 px-2 ms-1 fs-sm fw-medium lh-sm">
              必填
            </span>
          </div>
        </div>
        <div>
          <div className="mb-3 mb-md-4">
            <textarea
              className="form-control fs-md py-3 mb-3 mb-md-4"
              placeholder="1 年短期職涯目標（最多 300 字）"
              style={{ minHeight: "160px" }}
              maxLength={300}
            ></textarea>
            <textarea
              className="form-control fs-md py-3"
              placeholder="1-3 年中長期職涯願景（最多 300 字）"
              style={{ minHeight: "160px" }}
              maxLength={300}
            ></textarea>
          </div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              理想工作模式
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3 mb-md-4">
              {idealWorkingMode.map((item) => {
                return (
                  <RadioComponent
                    name="idealWorkingMode"
                    id={item.id}
                    value={item.value}
                    key={item.id}
                    radio={idealWorkingModeRadio}
                    setRadio={setIdealWorkingModeRadio}
                  />
                );
              })}
            </div>
            <input
              className="form-control fs-md py-3"
              placeholder="目標薪資/收入"
            ></input>
          </div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              目前面臨的職涯挑戰
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3">
              {careerChallenges.map((item) => {
                return (
                  <CheckboxComponent
                    key={item.id}
                    name="careerChallenges"
                    id={item.id}
                    value={item.value}
                    checkList={careerChallengesCheckbox}
                    setCheckList={setCareerChallengesCheckbox}
                  />
                );
              })}
            </div>
          </div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              期望獲得的協助與資源
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3">
              {expect.map((item) => {
                return (
                  <CheckboxComponent
                    key={item.id}
                    name="expect"
                    id={item.id}
                    value={item.value}
                    checkList={expectCheckbox}
                    setCheckList={setExpectCheckbox}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              感興趣的服務方案
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3">
              {service.map((item) => {
                return (
                  <CheckboxComponent
                    key={item.id}
                    name="service"
                    id={item.id}
                    value={item.value}
                    checkList={serviceCheckbox}
                    setCheckList={setServiceCheckbox}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 py-md-5 border-1 border-bottom border-primary d-lg-flex">
        <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-md-4">
          <h1 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">
            專業技能區塊
          </h1>
          <div className="ms-auto d-flex align-items-center ms-lg-0">
            <p className="mb-0 text-center fs-md text-secondary">
              欄位皆為選填
            </p>
          </div>
        </div>
        <div>
          <div className="mb-3 mb-md-4">
            <h2 className="mb-2 fs-md text-primary fw-normal lh-base">
              感興趣的服務方案
            </h2>
            <div className="d-flex flex-wrap column-gap-3 row-gap-2 px-2 mb-3">
              {expertise.map((item) => {
                return (
                  <CheckboxComponent
                    key={item.id}
                    name="expertise"
                    id={item.id}
                    value={item.value}
                    checkList={expertiseCheckbox}
                    setCheckList={setExpertiseCheckbox}
                  />
                );
              })}
            </div>
          </div>
          <textarea
            className="form-control fs-md py-3 mb-3 mb-md-4"
            placeholder="專業背景和核心競爭力（最多300字）"
            style={{ minHeight: "160px" }}
            maxLength={300}
          ></textarea>
          <textarea
            className="form-control fs-md py-3 mb-3 mb-md-4"
            placeholder="專業技能（最多300字）"
            style={{ minHeight: "160px" }}
            maxLength={300}
          ></textarea>
          <textarea
            className="form-control fs-md py-3 mb-3 mb-md-4"
            placeholder="語文能力（最多300字）"
            style={{ minHeight: "160px" }}
            maxLength={300}
          ></textarea>
          <textarea
            className="form-control fs-md py-3"
            placeholder="資格證照（最多300字）"
            style={{ minHeight: "160px" }}
            maxLength={300}
          ></textarea>
        </div>
      </section>
      <section className="py-4 py-md-5  d-lg-flex">
        <div className="d-flex mb-3 text-primary flex-lg-column backend-title-width  me-md-4">
          <h1 className="mb-0 fs-2xl fw-medium lh-sm mb-lg-12px">教育背景</h1>
          <div className="ms-auto d-flex align-items-center ms-lg-0">
            <p className="mb-0 text-center fs-md text-secondary">
              欄位皆為選填
            </p>
          </div>
        </div>
        <div className="w-100">
          <textarea
            className="form-control fs-md py-3 mb-3 mb-md-4"
            placeholder="學歷背景（最多500字）"
            style={{ minHeight: "160px" }}
            maxLength={500}
          ></textarea>
          <textarea
            className="form-control fs-md py-3"
            placeholder="專業培訓與工作坊（最多500字）"
            style={{ minHeight: "160px" }}
            maxLength={500}
          ></textarea>
        </div>
      </section>
      <div className=" d-flex flex-column flex-lg-row justify-content-center">
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
          匯出PDF
        </ButtonComponent>
      </div>
    </main>
  );
}

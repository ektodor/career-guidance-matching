import { CardMentorComponent } from "@/components/CardMentorComponent";
import bannerPerson from "@images/service/banner-person.svg";
import text from "@images/about/text-mb.svg";
import textPc from "@images/about/text-pc.svg";
import map from "@images/about/map.png";
import icon from "@images/logo-icon-w.svg";
import { mdiChevronRight, mdiPhoneOutline, mdiEmailOutline } from "@mdi/js";
import { ButtonComponent } from "@/components/ButtonComponent";
import Icon from "@mdi/react";
// 導入所有圖片
import mentor1 from "@images/about/mentor-1.png";
import mentor2 from "@images/about/mentor-2.png";
import mentor3 from "@images/about/mentor-3.png";
import mentor4 from "@images/about/mentor-4.png";
import mentor5 from "@images/about/mentor-5.png";
import mentor6 from "@images/about/mentor-6.png";
export function About() {
  const mentor = [
    {
      img: mentor1,
      title: "數位遊牧先驅",
      tags: ["遠端工作策略", "數位遊牧生活設計"],
      name: "陳志遠 Ethan Chen",
    },
    {
      img: mentor2,
      title: "個人品牌策略專家",
      tags: ["個人品牌建立", "內容行銷策略", "故事行銷"],
      name: "林曉彤 Clara Lin",
    },
    {
      img: mentor3,
      title: "財務自由規劃顧問",
      tags: ["稅務優化", "被動收入建立", "現金流管理"],
      name: "王建明 Marcus",
    },
    {
      img: mentor4,
      title: "創意接案與多元收入專家",
      tags: ["創意變現策略", "線上課程開發"],
      name: "張雅琳 Ariel",
    },
    {
      img: mentor5,
      title: "遠端工作技術顧問",
      tags: ["專案管理自動化", "虛擬團隊管理"],
      name: "李俊宏 Kevin Lee",
    },
    {
      img: mentor6,
      title: "生活設計與健康平衡教練",
      tags: ["時間管理", "職涯與家庭整合"],
      name: "吳曉雯 Vivian",
    },
  ];
  return (
    <main>
      <section className="py-5 dot-background py-lg-80px">
        <div className="container">
          <h1 className="mb-4 mb-lg-5 fs-5xl lh-sm fw-bold text-center">
            關於職旅
          </h1>
          <div className="d-flex flex-column dot-background-content mx-auto position-relative">
            <p className="mb-0 fs-lg text-secondary text-center">
              職旅 WorkWay
              匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。
            </p>
            <p className="mb-0 fs-lg text-secondary text-center">
              無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。
            </p>
            <img
              src={bannerPerson}
              alt=""
              className=" dot-background-icon d-none d-lg-block "
            />
          </div>
        </div>
      </section>
      <section className="py-5 py-lg-80px">
        <div className=" container mb-4 mb-lg-5">
          <h2 className="fs-4xl lh-sm fw-bold mb-3 mb-lg-4 text-center">
            精實的職旅夥伴
          </h2>
          <p className="text-secondary fs-lg text-center">
            我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。
          </p>
        </div>
        <div className="container-lg ms-auto me-0 p-0">
          <div className="d-flex px-12px px-lg-0 overflow-x-scroll column-gap-3 scrollbar-width-none pb-4 pb-lg-5 info-card-container ">
            {mentor.map((item) => {
              return <CardMentorComponent item={item} />;
            })}
          </div>
        </div>
        <div className="container ">
          <div className="bg-action-primary rounded-4 py-3 px-4 d-flex flex-column align-items-center pt-lg-4 pb-lg-5 px-lg-5">
            <div className="chat-decorate mb-3 mb-lg-4">
              <p className="chat-decorate-content mb-0 fw-bold fs-xl lh-sm text-hover-primary">
                團隊承諾
              </p>
            </div>
            <p
              className="text-deepBg-primary fs-md text-center mb-4 mb-lg-5"
              style={{ maxWidth: "800px" }}
            >
              我們不只是顧問，更是你職業轉型路上的夥伴與同行者。我們深知轉型過程中的不確定與恐懼，也經歷過停滯不前的困境。正因如此，我們更懂得如何陪你走過這段旅程，不只指引方向，更與你並肩同行。
            </p>
            <div className="d-flex justify-content-center overflow-hidden w-100">
              <img src={text} alt="" className=" d-lg-none" />

              <img
                src={textPc}
                alt=""
                className=" d-none d-lg-block img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-secondary py-lg-80px info-bg-decorate ">
        <h2 className="fs-4xl lh-sm fw-bold mb-4 text-center mb-lg-5">
          公司資訊
        </h2>
        <div className="container">
          <div className="bg-primary rounded-4 backend-shadow p-4 p-lg-5">
            <div className="mb-4 mb-lg-5">
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  公司位置
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  110台北市信義區信義路五段7號
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  負責人
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  張世明
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  聯絡專線
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  02-2758-6600
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  營業時間
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  週一至週五 10:00～18:00（國定假日休息）
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  電子郵件
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  contact@workway.tw
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  成立時間
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  2023 年 6 月
                </p>
              </div>
              <div className="d-flex  border-1 border-bottom border-primary">
                <p className="p-3 p-lg-4 text-secondary text-nowrap fs-md fw-bold lh-sm info-title mb-0">
                  統一編號
                </p>
                <p className="mb-0 py-3 py-lg-4 me-lg-4 me-3 fs-md fw-medium lh-sm">
                  83149276
                </p>
              </div>
            </div>
            <img
              src={map}
              alt=""
              className=" object-fit-cover info-image img-fluid"
            />
          </div>
        </div>
      </section>
      <section className="py-40px ">
        <div className="container">
          <div className="py-3 py-lg-4 px-lg-5 px-4 bg-action-primary rounded-4">
            <div className=" dot-border">
              <div className="mb-4">
                <img src={icon} alt="" />
              </div>

              <h3 className="mb-12px fs-4xl fw-bold lh-sm text-deepBg-primary">
                邁向你真正想過的生活，從這裡開始
              </h3>
              <p className="mb-4 fs-lg text-deepBg-primary">
                第一次諮詢只要 30 分鐘，可能改變你未來 30 年的生活方式
              </p>
            </div>
            <div className=" d-lg-flex mt-3 mt-lg-4">
              <div className="mb-3 d-flex align-items-center mb-lg-0">
                <Icon
                  path={mdiPhoneOutline}
                  size={"1.5rem"}
                  className="text-deepBg-primary"
                />
                <p className="mb-0 text-deepBg-primary ms-2">0800-123-123</p>
              </div>
              <div className="mb-4 mb-lg-0 d-flex align-items-center ms-lg-4">
                <Icon
                  path={mdiEmailOutline}
                  size={"1.5rem"}
                  className="text-deepBg-primary"
                />
                <p className="mb-0 text-deepBg-primary ms-2">Sample@mail.com</p>
              </div>
              <ButtonComponent
                isOutline={false}
                icon={mdiChevronRight}
                iconPosition="right"
                otherClass="pe-2 ms-lg-auto pe-lg-12px"
              >
                預約免費職涯探索
              </ButtonComponent>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

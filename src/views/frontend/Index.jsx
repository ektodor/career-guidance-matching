import { ButtonComponent } from "@/components/ButtonComponent";
import { mdiChevronRight } from "@mdi/js";
import logo from "@images/logo-icon.svg";
import hero1 from "@images/index/hero-1.png";
import hero2 from "@images/index/hero-2.png";
import hero3 from "@images/index/hero-3.png";
import hero4 from "@images/index/hero-4.png";
import story1 from "@images/index/story-cover-1.png";
import story2 from "@images/index/story-cover-2.png";
import story3 from "@images/index/story-cover-3.png";
import story4 from "@images/index/story-cover-4.png";
import story5 from "@images/index/story-cover-5.png";
import story6 from "@images/index/story-cover-6.png";
import advIcon from "@images/index/adv.svg";
import advVector from "@images/index/adv-vectors.svg";
import adv1 from "@images/index/adv-1.png";
import adv2 from "@images/index/adv-2.png";
import adv3 from "@images/index/adv-3.png";
import serve1 from "@images/index/serve-1.svg";
import serve2 from "@images/index/serve-2.svg";
import serve3 from "@images/index/serve-3.svg";
import serve4 from "@images/index/serve-4.svg";
import team from "@images/index/team.png";
import gradient from "@images/index/gradient-ball.png";
import qa from "@images/index/qa.svg";
import { CardStoryComponent } from "@/components/CardStoryComponent";
import { CtaComponent } from "@/components/CtaComponent";
import { AccordionComponent } from "@/components/AccordionComponent";
export function Index() {
  const cardStory = [
    {
      img: story1,
      title: "轉型成功的設計師",
      context:
        "從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。",
      work: "視覺設計師",
      name: "郭敏迪 (34y)",
      year: 2,
    },
    {
      img: story2,
      title: "數位遊牧生活實踐者",
      context:
        "兩年前我只想環遊世界，卻不知道怎麼開始。職旅給了我遠端工作與生活規劃的指導。現在我在五個國家工作過，收入比以前多 20%。每次打開電腦，看見窗外不同的風景，都慶幸當初那一個決定。",
      work: "內容策略師",
      name: "林雨潔 (29y)",
      year: 2,
    },
    {
      img: story3,
      title: "中年轉型的工程師",
      context:
        "59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。",
      work: "系統架構顧問",
      name: "張世明 (62y)",
      year: 3,
    },
    {
      img: story4,
      title: "斜槓媽媽的平衡人生",
      context:
        "育兒與工作讓我喘不過氣，想辭職又怕失去經濟自由。職旅教我將專業變現為線上課程，收入穩定、工時少了三分之二。我第一次真正感覺到：我熱愛的事也能成為工作。",
      work: "育兒作家",
      name: "陳佳蓉 (32y)",
      year: 2,
    },
    {
      img: story5,
      title: "從企業高管到生活設計師",
      context:
        "身為主管十五年，我以為這就是我的路，直到健康亮紅燈。職旅讓我重新定義「成功」，不只是賺錢，而是活得有意義。現在我用三天工作換來更多陪伴與自由。",
      work: "心靈成長教練",
      name: "李明哲 (42y)",
      year: 1,
    },
    {
      img: story6,
      title: "初入職場卻選擇不同路徑",
      context:
        "大學畢業後我沒進大公司，反而成了自由攝影師。職旅不只幫我釐清方向，也教我怎麼經營收入與客戶。最感動的是，我終於知道走另一條路，也可以有人陪。",
      work: "文化攝影師",
      name: "吳承恩 (25y)",
      year: 0.5,
    },
  ];
  const accordionList = [
    {
      id: 1,
      title: "一對一諮詢是怎麼進行的？需要準備什麼嗎？",
      context:
        "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
    },
    {
      id: 2,
      title: "自由職涯真的可以養活自己嗎？你們怎麼協助？",
      context:
        "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
    },
    {
      id: 3,
      title: "職旅 WorkWay 的收費方式是怎麼計算的？",
      context:
        "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
    },
    {
      id: 4,
      title: "如果諮詢後發現不適合，會有退款保障嗎？",
      context:
        "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
    },
    {
      id: 5,
      title: "我現在還不確定自己要什麼，也可以預約諮詢嗎？",
      context:
        "諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。",
    },
  ];
  return (
    <main className=" overflow-hidden">
      <section className="pb-5 pt-40px pb-lg-80px position-relative">
        <img
          src={gradient}
          alt=""
          className=" position-absolute start-50 translate-middle-x z-n1 circle-background"
        />
        <div className="container mt-2 mt-lg-40px">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-4 text-center">
                <h1 className="mb-0 fs-display lh-sm fw-bold">
                  一起陪伴、探索
                </h1>
                <h2 className="mb-0 fs-display lh-sm fw-bold">
                  還有你那些未完成的夢
                </h2>
              </div>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between mb-40px ">
                <div className="text-center text-lg-start py-1 mb-3">
                  <p className="fs-lg mb-0 text-secondary">
                    自由工作很美，也很難。
                  </p>
                  <p className="fs-lg mb-0 text-secondary">
                    我們用 1 對 1 陪伴，陪你從第一步開始，直到夢想變成日常
                  </p>
                </div>
                <div>
                  <ButtonComponent
                    icon={mdiChevronRight}
                    otherClass={
                      "fs-2xl w-auto py-2 ps-12px pe-2 py-lg-12px ps-lg-20px pe-lg-12px"
                    }
                    isBtnLg={true}
                    iconPosition="right"
                    iconSize="28px"
                  >
                    開始你的職旅
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-lg-4 px-12px">
          <div className="row">
            <div className="d-none  d-lg-block col-lg-4">
              <img src={hero1} alt="" className="img-fluid" />
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <img src={hero2} alt="" className="img-fluid mb-4" />
              <img src={hero3} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4">
              <img src={hero4} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 py-80px bg-decorate ">
        <div className="container-lg ">
          <div className="card-story-box  row">
            <div className=" d-lg-flex align-items-center ">
              <div className="mb-4 mb-lg-0 col-lg-4">
                <img src={logo} alt="" className="logo-icon mb-3" />
                <h2 className="fs-5xl lh-sm fw-bold mb-0">他們已經踏上職旅</h2>
                <h2 className="fs-5xl lh-sm fw-bold mb-3">聽聽他們的故事</h2>
                <p className="fs-lg text-secondary ">
                  每一段職涯轉型都有獨特挑戰，這些曾經與你有相同疑惑的夥伴，現在正過著他們嚮往的生活
                </p>
              </div>
              <div className="mb-4 mb-lg-0 col-lg-8">
                <div className="py-12px d-flex overflow-x-scroll column-gap-3 scrollbar-width-none card-story-box-context">
                  {cardStory.map((item) => {
                    return <CardStoryComponent item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 py-80px bg-secondary">
        <div className="container position-relative">
          <img
            className=" position-absolute top-0 end-0 d-none d-lg-block"
            src={advVector}
            alt=""
          />
          <div className="chat-decorate mb-1">
            <p className="chat-decorate-content mb-0 fw-bold fs-xl lh-sm text-hover-primary">
              為什麼？
            </p>
          </div>
          <h2 className="fw-bold fs-5xl lh-sm mb-4 mb-lg-5 text-center">
            選擇職旅 WorkWay
          </h2>
          <div className="row flex-column row-gap-3 flex-lg-row row-gap-lg-0 mb-lg-5 mb-4">
            <div className="col-lg-4">
              <div className="rounded-4 position-relative overflow-hidden">
                <img src={adv1} alt="" className=" img-fluid" />
                <div className=" position-absolute start-0 bottom-0 py-12px px-4 d-flex bg-white border-top-right-radius ">
                  <img src={advIcon} alt="" />
                  <p className="mb-0 fs-2xl fw-bold lh-sm text-secondary ms-2">
                    實戰經驗
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded-4 position-relative overflow-hidden">
                <img src={adv2} alt="" className=" img-fluid" />
                <div className=" position-absolute start-0 bottom-0 py-12px px-4 d-flex bg-white border-top-right-radius ">
                  <img src={advIcon} alt="" />
                  <p className="mb-0 fs-2xl fw-bold lh-sm text-secondary ms-2">
                    全方位支持
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded-4 position-relative overflow-hidden mb-4">
                <img src={adv3} alt="" className=" img-fluid" />
                <div className=" position-absolute start-0 bottom-0 py-12px px-4 d-flex bg-white border-top-right-radius ">
                  <img src={advIcon} alt="" />
                  <p className="mb-0 fs-2xl fw-bold lh-sm text-secondary ms-2">
                    社群力量
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-secondary lh-sm fs-md fw-medium mb-0">
            不是套模板的建議，而是為你量身打造的陪伴！
          </p>
        </div>
      </section>
      <section className="py-5 py-80px position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4 rounded-4 overflow-hidden">
                <img src={team} alt="" className=" img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="px-lg-12px">
                <h2 className="fs-5xl fw-bold lh-sm mb-3 mb-lg-4 text-center">
                  遇見你的職涯夥伴
                </h2>
                <p className="fs-lg mb-3 mb-lg-4 text-secondary">
                  每位顧問都有獨特專長，更重要的是：
                </p>
                <div className="mb-3 mb-lg-4 d-flex justify-content-center justify-content-lg-start ">
                  <h3 className="fs-2xl fw-bold lh-sm mb-0 text-hover-primary text-center bg-secondary  p-2">
                    “他們都曾面對你正在經歷的挑戰”
                  </h3>
                </div>
                <p className="fs-lg text-secondary mb-3 mb-lg-4">
                  職旅 WorkWay
                  匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。我們的顧問不只教授理論，更分享親身經歷的挑戰與解決之道。
                </p>
                <p className="fs-lg text-secondary mb-3 mb-lg-4">
                  我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <ButtonComponent
                    icon={mdiChevronRight}
                    iconPosition="right"
                    otherClass="pe-2 pe-lg-12px"
                  >
                    了解更多職旅夥伴
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={gradient}
          alt=""
          className="position-absolute top-100 start-100 translate-middle z-n1 circle-background"
        />
      </section>
      <section className="py-5 py-80px bg-action-primary">
        <div className="container">
          <h2 className="fs-5xl fw-bold lh-sm mb-3 mb-lg-4 text-center text-white">
            服務流程
          </h2>
          <p className="fs-lg mb-3 mb-lg-5 text-white text-center">
            簡單四步，踏上你的職旅
          </p>

          <div className="mt-4 px-lg-0 px-12px column-gap-3 column-gap-lg-0 row overflow-x-scroll scrollbar-width-none flex-nowrap">
            <div className="col-lg-3 w-auto px-0 px-lg-12px">
              <div className="card-server d-flex flex-column align-items-center ">
                <img src={serve1} alt="" className="mb-3" />
                <h3 className="fs-2xl fw-bold lh-sm mb-3 text-center">
                  免費註冊會員
                </h3>
                <p className="fs-sm text-secondary mb-0 text-center">
                  透過網站左上角按鈕，立即註冊免費會員，與我們開始建立連結。
                </p>
                <div className="card-server-icon">
                  <p className="fs-sm fw-bold lh-sm text-hover-primary mb-0">
                    STEP 1
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 w-auto px-0 px-lg-12px">
              <div className="card-server d-flex flex-column align-items-center ">
                <img src={serve2} alt="" className="mb-3" />
                <h3 className="fs-2xl fw-bold lh-sm mb-3 text-center">
                  填寫職旅計劃
                </h3>
                <p className="fs-sm text-secondary mb-0 text-center">
                  了解你的技能、熱情與市場需求的交會點，找出屬於你的獨特定位。
                </p>
                <div className="card-server-icon">
                  <p className="fs-sm fw-bold lh-sm text-hover-primary mb-0">
                    STEP 2
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 w-auto px-0 px-lg-12px">
              <div className="card-server d-flex flex-column align-items-center ">
                <img src={serve3} alt="" className="mb-3" />
                <h3 className="fs-2xl fw-bold lh-sm mb-3 text-center">
                  初次諮詢
                </h3>
                <p className="fs-sm text-secondary mb-0 text-center">
                  依據你的目標與現況，給予最直接的建議，建立清晰的轉型思路。
                </p>
                <div className="card-server-icon">
                  <p className="fs-sm fw-bold lh-sm text-hover-primary mb-0">
                    STEP 3
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 w-auto px-0 px-lg-12px">
              <div className="card-server d-flex flex-column align-items-center ">
                <img src={serve4} alt="" className="mb-3" />
                <h3 className="fs-2xl fw-bold lh-sm mb-3 text-center">
                  實戰指導
                </h3>
                <div>
                  <p className="fs-sm text-secondary mb-0 text-center">
                    專家一對一指導，從品牌建立到客戶開發，每一步都有明確方向。
                  </p>
                </div>
                <div className="card-server-icon">
                  <p className="fs-sm fw-bold lh-sm text-hover-primary mb-0">
                    STEP 4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 py-80px bg-grid">
        <div className="container">
          <div className="chat-decorate mb-1">
            <p className="chat-decorate-content mb-0 fw-bold fs-xl lh-sm text-hover-primary">
              \ Q&A /
            </p>
          </div>
          <h2 className="fw-bold fs-5xl lh-sm mb-4 mb-lg-5 text-center">
            你可能有些困惑...
          </h2>
          <div className="row align-items-end">
            <div className="d-none d-lg-block col-lg-6">
              <img src={qa} alt="" />
            </div>
            <div className="col-lg-6">
              <div
                className="accordion d-flex flex-column row-gap-4"
                id="accordion"
              >
                {accordionList.map((item) => {
                  return (
                    <AccordionComponent
                      parentId={"accordion"}
                      accordion={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-40px ">
        <div className="container">
          <CtaComponent />
        </div>
      </section>
    </main>
  );
}

import { CardPlanComponent } from "@/components/CardPlanComponent";
import goal from "@images/service/goal.svg";
import conversation from "@images/service/conversation.svg";
import love from "@images/service/love.svg";
import server1 from "@images/service/server-1.svg";
import server2 from "@images/service/server-2.svg";
import server3 from "@images/service/server-3.svg";
import plan1 from "@images/service/plan-1.svg";
import plan2 from "@images/service/plan-2.svg";
import plan3 from "@images/service/plan-3.svg";
import { CardServerComponent } from "@/components/CardServerComponent";
import { CtaComponent } from "@/components/CtaComponent";
import { mdiChevronRight } from "@mdi/js";
import { ButtonComponent } from "@/components/ButtonComponent";
export function ServicePlan() {
  const cardPlanList = [
    {
      image: plan1,
      plan: "全面方案",
      title: "職涯轉型全程計畫",
      context:
        "針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。",
      item: [
        "深度職能轉換評估與規劃",
        "跨領域技能遷移策略",
        "新領域人脈建立指導",
        "長期職涯發展藍圖",
      ],
      for: "從企業職場轉型為自由工作者 / 數位遊牧者的專業人士",
      price: 120000,
      isHot: true,
    },
    {
      image: plan2,
      plan: "加速方案",
      title: "自由工作加速計畫",
      context:
        "為已確定要轉型但需要全面規劃的專業人士設計。六次深度諮詢，從心態調整到實際操作，全方位為您的轉型做好準備。",
      item: [
        "詳細的市場機會分析",
        "個人優勢定位與差異化策略",
        "完整的轉型時間表與里程碑",
        "轉型期間的心理健康維護策略",
      ],
      for: "已經開始自由工作但想提升效能和收入的專業人士",
      price: 80000,
      isHot: false,
    },
    {
      image: plan3,
      plan: "遊牧方案",
      title: "數位遊牧生活計畫",
      context:
        "針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。",
      item: [
        "深度職能轉換評估與規劃",
        "新領域人脈建立指導",
        "跨領域技能遷移策略",
        "長期職涯發展藍圖",
      ],
      for: "希望同時擁有工作自由和地域自由的專業人士",
      price: 60000,
      isHot: false,
    },
  ];
  const cardServerList = [
    {
      image: server1,
      title: "職涯探索評估",
      context: "3 次一對一諮詢，了解可能性和適配性",
      price: 3800,
      isHot: false,
    },
    {
      image: server2,
      title: "職涯轉型規劃",
      context: "6 次深度諮詢，建立完整轉型藍圖",
      price: 12000,
      isHot: true,
    },
    {
      image: server3,
      title: "專業定位與品牌建立",
      context: "4 次專業諮詢，確立市場定位與差異化策略",
      price: 8800,
      isHot: false,
    },
  ];
  return (
    <main>
      <section className="py-5 dot-background py-lg-80px">
        <div className="container">
          <h1 className="mb-4 mb-lg-5 fs-5xl lh-sm fw-bold text-center">
            服務方案
          </h1>
          <div className="d-flex flex-column dot-background-content mx-auto">
            <p className="mb-0 fs-lg text-secondary text-center">
              我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，我們的專家團隊將全程陪伴，確保您順利實現職業自由。
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 py-lg-80px">
        <div className="container">
          <div className="mb-4 mb-lg-5 d-flex flex-column align-items-center">
            <img
              src={goal}
              alt=""
              className="mb-1 p-1"
              style={{ width: "42px" }}
            />
            <h2 className="mb-3 mb-lg-4 fw-bold fs-4xl lh-sm">
              職涯轉型全程計畫
            </h2>
            <p className="mb-0 text-secondary fs-lg text-center">
              從企業到自由，無縫轉型之旅
            </p>
          </div>
          <div className="d-flex flex-column row-gap-3 row-gap-lg-4">
            {cardPlanList.map((item) => {
              return <CardPlanComponent card={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="py-5 py-lg-80px bg-secondary">
        <div className="container">
          <div className="mb-4 mb-lg-5 d-flex flex-column align-items-center">
            <img
              src={conversation}
              alt=""
              className="mb-1"
              style={{ width: "56px", height: "56px" }}
            />
            <h2 className="mb-3 mb-lg-4 fw-bold fs-4xl lh-sm">基礎諮詢服務</h2>
            <p className="mb-0 text-secondary fs-lg text-center">
              我們提供第一次免費諮詢，一起建立信任的橋樑
            </p>
          </div>
          <div className=" flex-column row-gap-3 flex-lg-row row">
            {cardServerList.map((item) => {
              return <CardServerComponent card={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="py-5 py-lg-80px subscribe-bg-decorate ">
        <div className="container">
          <div className="mb-4 mb-lg-5 d-flex flex-column align-items-center">
            <img
              src={love}
              alt=""
              className="mb-1"
              style={{ width: "56px", height: "56px" }}
            />
            <h2 className="fw-bold fs-4xl lh-sm mb-0">持續支持方案</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-primary rounded-4 backend-shadow p-4 border border-2 border-green d-flex flex-column align-items-center bg-subscribe bg-light-green">
                <div className="mb-5">
                  <h3 className="mb-2 fs-2xl fw-medium lh-sm text-center">
                    職旅會員計畫
                  </h3>
                  <p className="text-center fs-md mb-0">
                    享有長期社群支持與資源服務
                  </p>
                </div>
                <div className="mb-5 d-flex column-gap-2">
                  <p className="mb-0 fs-2xl fw-bold lh-sm text-hover-primary">
                    NT$ 9,800
                  </p>
                  <p className="mb-0 fs-md">/年</p>
                  <p className="mb-0 fs-md fw-medium">( NT$1,200 /月)</p>
                </div>
                <ButtonComponent
                  icon={mdiChevronRight}
                  iconPosition="right"
                  otherClass="pe-2 pe-lg-12px"
                >
                  我有興趣
                </ButtonComponent>
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

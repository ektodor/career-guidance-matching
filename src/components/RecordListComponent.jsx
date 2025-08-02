export function RecordListComponent({ list }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped mb-0 table-hover">
        <thead>
          <tr className="d-none d-lg-table-row">
            <th scope="col" className="p-12px w-100">
              諮詢方案
            </th>
            <th scope="col" className="p-12px text-nowrap">
              預約日期
            </th>
            <th scope="col" className="p-12px text-nowrap">
              諮詢時長
            </th>
            <th scope="col" className="p-12px text-nowrap">
              諮詢方式
            </th>
            <th scope="col" className="p-12px text-nowrap">
              上課狀態
            </th>
          </tr>
          <tr className="d-lg-none">
            <th scope="col" className="px-2 py-12px fs-sm fw-medium lh-sm mb-0">
              預約紀錄一覽
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 電腦版 */}
          {list.map((item) => {
            const disabled = item.isExpired ? "text-secondary" : "";
            return (
              <tr key={item.id} className="d-none d-lg-table-row">
                <td className={`fs-lg ${disabled} py-3 px-12px`}>
                  {item.course + " | " + item.session}
                </td>
                <td className={`py-3 px-12px ${disabled}`}>{item.date}</td>
                <td className={`py-3 px-12px ${disabled}`}>{item.duration}</td>
                <td className="py-3 px-12px">
                  <p className="rounded-3 text-secondary bg-white border-1 border border-primary fs-sm lh-sm fw-medium mb-0 d-inline-block px-2 py-1">
                    {item.method}
                  </p>
                </td>
                <td className={`py-3 px-12px ${disabled}`}>{item.status}</td>
              </tr>
            );
          })}
          {/* 手機版 */}
          {list.map((item) => {
            const disabled = item.isExpired ? "text-secondary" : "";
            return (
              <tr key={item.id} className="d-lg-none ">
                <td
                  className={`fs-lg p-0 ${
                    item.isExpired ? "text-secondary" : ""
                  }`}
                >
                  <div className=" p-2 d-flex justify-content-between align-items-center">
                    <h3 className={`fs-lg fw-normal  ${disabled} mb-0`}>
                      {item.course + " | " + item.session}
                    </h3>
                    <p className=" rounded-3 text-secondary bg-white border-1 border border-primary fs-sm lh-sm fw-medium px-2 py-1 mb-0">
                      {item.method}
                    </p>
                  </div>
                  <div className="p-2 d-flex">
                    <p
                      className={`mb-0 text-secondary me-3 fs-sm fw-normal ${disabled}`}
                    >
                      時間：{item.date}
                    </p>
                    <p
                      className={`mb-0 text-secondary fs-sm fw-normal ${disabled}`}
                    >
                      時長：{item.duration}
                    </p>
                  </div>
                  <p
                    className={`mb-0 p-2 text-secondary fs-sm fw-normal ${disabled}`}
                  >
                    {item.status}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

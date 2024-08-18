const MedicalRecords = () => {
  return (
    <>
      <div className="col-md-5 col-12">
        <div
          className="card-style mb-3  dashboard-profile-card"
          
        >
          <div className="row justify-content-between mb-3">
            <h4 className="text-start mb-0 dashboard-profile-heading">
              {" "}
              Medical Records{" "}
            </h4>
            <a
              href=""
              className="btn btn-custom btn-inline mb-0 dashboard-profile-btn"
            >
              Browse All
            </a>
          </div>
          <div
            className="table-wrapper table-responsive"
            style={{ width: "100%" }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h6>Date</h6>
                  </th>
                  <th>
                    <h6>Name</h6>
                  </th>
                  <th>
                    <h6>Result</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>25</p>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* end table */}
          </div>
        </div>
        {/* end card */}
      </div>
    </>
  );
};

export default MedicalRecords;

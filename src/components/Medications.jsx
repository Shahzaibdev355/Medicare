const Medications = () => {
  return (
    <>
      <div className="col-md-5 col-12">
        <div
          className="card-style mb-3 dashboard-profile-card"
          
        >
          <div className="row justify-content-between mb-3">
            <h4 className="text-start mb-0 dashboard-profile-heading">
              {" "}
              Medications{" "}
            </h4>
            <a
              href=""
              className="btn btn-custom btn-inline mb-0 dashboard-profile-btn"
            >
              Browse All
            </a>
          </div>

          <div className="table-wrapper table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h6>Medication Name</h6>
                  </th>
                  <th>
                    <h6>Dose</h6>
                  </th>
                  <th>
                    <h6>Frequency</h6>
                  </th>
                  <th>
                    <h6>Condition</h6>
                  </th>
                </tr>
                {/* end table row*/}
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <p>2 puff</p>
                  </td>
                  <td className="">
                    <p>1 daily</p>
                  </td>

                  <td className="">
                    <p>Flu</p>
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

export default Medications;

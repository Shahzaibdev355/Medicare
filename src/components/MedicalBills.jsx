import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faCheckCircle,
  
} from "@fortawesome/free-solid-svg-icons";

import useSmoothScrollbar from './useSmoothScrollbar';


const MedicalBills = () => {

    const scrollbarRef1 = useSmoothScrollbar();

  return (
    <>
      <div className="col-md-5 col-12">
        <div
          className="card-style mb-3 dashboard-profile-card"
          
        >
          <div className="row justify-content-between mb-3">
            <h4 className="text-start mb-0 dashboard-profile-heading">
              {" "}
              Medical Bills{" "}
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
                    <h6>Amount</h6>
                  </th>
                  <th>
                    <h6>Status</h6>
                  </th>
                </tr>
                {/* end table row*/}
              </thead>
              <tbody>
                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="">
                    <p>xx-yy-zzzz</p>
                  </td>
                  <td className="">
                    <p>Urgent</p>
                  </td>
                  <td className="">
                    <span className="status-btn active-btn">
                      {" "}
                      <FontAwesomeIcon icon={faCheckCircle} /> Paid{" "}
                    </span>
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

export default MedicalBills;

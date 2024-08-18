import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUser,
  faSignOutAlt,
  faChevronLeft,
  faBars,
  faCog,
  faComments,
  faSearch,
  faCalendarCheck,
  faReceipt,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Appointments = () => {
  

  return (
    <>
      {/* <div className="container-fluid"> */}

      {/* =====================Order Table===================== */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card-style mb-3">
            <h3 className="text-start mb-3"> Appointments </h3>

            <div className="table-wrapper table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6>#</h6>
                    </th>
                    <th>
                      <h6>Visit Type</h6>
                    </th>
                    <th>
                      <h6>Clinician</h6>
                    </th>
                    <th>
                      <h6>Provider</h6>
                    </th>
                    <th>
                      <h6>Location</h6>
                    </th>
                    <th>
                      <h6>Date</h6>
                    </th>
                    <th>
                      <h6>Duration</h6>
                    </th>
                    <th>
                      <h6>Comments</h6>
                    </th>
                    <th>
                      <h6>Insurance</h6>
                    </th>
                    <th>
                      <h6>Status</h6>
                    </th>
                    {/* <th>
                                                                                        <h6>Action</h6>
                                                                                    </th> */}
                  </tr>
                  {/* end table row*/}
                </thead>
                <tbody>
                  <tr style={{ border: "" }}>
                    <td>
                      <p>1</p>
                    </td>
                    <td className="min-width">
                      <p>Urget</p>
                    </td>
                    <td className="min-width">
                      <p>Dr. Branch</p>
                    </td>
                    <td className="min-width">
                      <p>Stephen Branch</p>
                    </td>
                    <td className="min-width">
                      <p>South Medical Center</p>
                    </td>
                    <td className="min-width">
                      <p>xx-yy-zzzz</p>
                    </td>
                    <td className="min-width">
                      <p>30min</p>
                    </td>
                    <td className="min-width">
                      <p>Asap</p>
                    </td>
                    <td className="min-width">
                      <p>Check</p>
                    </td>
                    <td className="min-width">
                      <span className="status-btn active-btn">Active</span>
                    </td>
                  </tr>

                  <tr style={{ border: "" }}>
                    <td>
                      <p>2</p>
                    </td>
                    <td className="min-width">
                      <p>Urget</p>
                    </td>
                    <td className="min-width">
                      <p>Dr. Branch</p>
                    </td>
                    <td className="min-width">
                      <p>Stephen Branch</p>
                    </td>
                    <td className="min-width">
                      <p>South Medical Center</p>
                    </td>
                    <td className="min-width">
                      <p>xx-yy-zzzz</p>
                    </td>
                    <td className="min-width">
                      <p>30min</p>
                    </td>
                    <td className="min-width">
                      <p>Asap</p>
                    </td>
                    <td className="min-width">
                      <p>Check</p>
                    </td>
                    <td className="min-width">
                      <span className="status-btn success-btn">Done</span>
                    </td>
                  </tr>

                  <tr style={{ border: "" }}>
                    <td>
                      <p>3</p>
                    </td>
                    <td className="min-width">
                      <p>Urget</p>
                    </td>
                    <td className="min-width">
                      <p>Dr. Branch</p>
                    </td>
                    <td className="min-width">
                      <p>Stephen Branch</p>
                    </td>
                    <td className="min-width">
                      <p>South Medical Center</p>
                    </td>
                    <td className="min-width">
                      <p>xx-yy-zzzz</p>
                    </td>
                    <td className="min-width">
                      <p>30min</p>
                    </td>
                    <td className="min-width">
                      <p>Asap</p>
                    </td>
                    <td className="min-width">
                      <p>Check</p>
                    </td>
                    <td className="min-width">
                      <span className="status-btn info-btn">Pending</span>
                    </td>
                  </tr>

                  <tr style={{ border: "" }}>
                    <td>
                      <p>4</p>
                    </td>
                    <td className="min-width">
                      <p>Urget</p>
                    </td>
                    <td className="min-width">
                      <p>Dr. Branch</p>
                    </td>
                    <td className="min-width">
                      <p>Stephen Branch</p>
                    </td>
                    <td className="min-width">
                      <p>South Medical Center</p>
                    </td>
                    <td className="min-width">
                      <p>xx-yy-zzzz</p>
                    </td>
                    <td className="min-width">
                      <p>30min</p>
                    </td>
                    <td className="min-width">
                      <p>Asap</p>
                    </td>
                    <td className="min-width">
                      <p>Check</p>
                    </td>
                    <td className="min-width">
                      <span className="status-btn close-btn">Close</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* end table */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>

      {/* </div> */}
    </>
  );
};

export default Appointments;

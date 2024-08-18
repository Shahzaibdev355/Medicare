import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faFileAlt,
  faShoppingBasket,
  faUser,
  faSignOutAlt,
  faChevronLeft,
  faBars,
  faCog,
  faComments,
  faSearch,
  faEye,
  faPencil,
  faTrashCan,
  faCloudUpload,
  faCheckCircle,
  faCalendarCheck,
  faReceipt,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const Profile = () => {
   // Create refs for each of the three divs
  //  const scrollbarRef1 = useRef(null);
  //  const scrollbarRef2 = useRef(null);
  //  const scrollbarRef3 = useRef(null);
 
  //  useEffect(() => {
  //    const options = {
  //      damping: 0.1, // Adjust this value to control the smoothness
  //    };
 
  //    // Function to initialize scrollbar only on desktop
  //    const initScrollbars = () => {
  //      if (window.innerWidth >= 768) { // 768px is a common breakpoint for mobile
  //        if (scrollbarRef1.current) {
  //          Scrollbar.init(scrollbarRef1.current, options);
  //        }
  //        if (scrollbarRef2.current) {
  //          Scrollbar.init(scrollbarRef2.current, options);
  //        }
  //        if (scrollbarRef3.current) {
  //          Scrollbar.init(scrollbarRef3.current, options);
  //        }
  //      } else {
  //        // Ensure the native scroll is active by setting overflow to auto
  //        if (scrollbarRef1.current) {
  //          scrollbarRef1.current.style.overflow = 'auto';
  //        }
  //        if (scrollbarRef2.current) {
  //          scrollbarRef2.current.style.overflow = 'auto';
  //        }
  //        if (scrollbarRef3.current) {
  //          scrollbarRef3.current.style.overflow = 'auto';
  //        }
  //      }
  //    };
 
  //    // Initialize scrollbars on first load
  //    initScrollbars();
 
  //    // Cleanup function to destroy scrollbars when the component unmounts or window resizes
  //    const destroyScrollbars = () => {
  //      if (scrollbarRef1.current) {
  //        Scrollbar.destroy(scrollbarRef1.current);
  //        scrollbarRef1.current.style.overflow = 'auto'; // Re-enable native scrolling
  //      }
  //      if (scrollbarRef2.current) {
  //        Scrollbar.destroy(scrollbarRef2.current);
  //        scrollbarRef2.current.style.overflow = 'auto'; // Re-enable native scrolling
  //      }
  //      if (scrollbarRef3.current) {
  //        Scrollbar.destroy(scrollbarRef3.current);
  //        scrollbarRef3.current.style.overflow = 'auto'; // Re-enable native scrolling
  //      }
  //    };
 
  //    // Handle window resize to enable/disable scrollbars dynamically
  //    const handleResize = () => {
  //      destroyScrollbars();
  //      initScrollbars();
  //    };
 
  //    window.addEventListener('resize', handleResize);
 
  //    return () => {
  //      destroyScrollbars();
  //      window.removeEventListener('resize', handleResize);
  //    };
  //  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="card-style settings-card-1 mb-30">
            <div className="profile-info">
              <div className="d-flex align-items-center justify-content-evenly mb-0 profile-info-card">
                <div className="profile-image">
                  <img src="/images/pexels-kristingroth2-61120.jpg" alt />
                  <div className="update-image">
                    <input type="file" />
                    <label htmlFor>
                      <FontAwesomeIcon icon={faCloudUpload} />
                    </label>
                  </div>
                </div>

                <div
                  className="profile-meta col-md-8 col-12"
                  style={{ textAlign: "left" }}
                >
                  {/* <h3 className="text-bold mb-2">John Doe</h3> */}

                  <div className="row mb-2 profile-info-card-name">
                    <h3 className="text-bold mb-2 profile-card-row-h3">
                      Sarah Adam
                    </h3>
                    <span className="status-btn active-btn profile-card-row-span">
                      {" "}
                      Active
                    </span>
                  </div>

                  <div className="row justify-content-between mb-2 profile-info-card-textCol">
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Role:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Age:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                  </div>
                  <div className="row justify-content-between mb-2 profile-info-card-textCol">
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Email:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Birth Date:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                  </div>
                  <div className="row justify-content-between mb-2 profile-info-card-textCol">
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Phone No:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                    <p className="text-sm text-bold mb-0 profile-card-para">
                      {" "}
                      <strong
                        className="text-gray text-sm"
                        style={{ fontSize: "16px" }}
                      >
                        Status:{" "}
                      </strong>{" "}
                      UI/UX Design
                    </p>
                  </div>

                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Work For:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Address:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center  mb-2 profile-info-card-column2">
                <div className="profile-meta col-md-5 col-12 profile-info-card-column2-text">
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Medical Insurance:{" "}
                    </strong>{" "}
                    None{" "}
                  </p>
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Vision Insurance:{" "}
                    </strong>{" "}
                    Yes{" "}
                  </p>
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Dental Insurance:{" "}
                    </strong>{" "}
                    No{" "}
                  </p>
                </div>

                <div
                  className="profile-meta col-md-7 col-12"
                  style={{ textAlign: "left" }}
                >
                  <span className="divider mt-0">
                    <hr className="mt-0" />
                  </span>

                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Chat Id:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Legacy Id:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>

                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Patient Since:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>
                  <p className="text-sm text-bold mb-2">
                    {" "}
                    <strong
                      className="text-gray text-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Preferred Provider:{" "}
                    </strong>{" "}
                    UI/UX Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>

        <div className="col-md-6 col-12">
          <div className="card-style mb-3">
            <h3 className="text-start mb-3"> Appointments </h3>

            <div className="table-wrapper table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6>Visit Type</h6>
                    </th>
                    <th>
                      <h6>Date</h6>
                    </th>
                    <th>
                      <h6>Provider</h6>
                    </th>
                    <th>
                      <h6>Status</h6>
                    </th>
                    <th>
                      <h6>Action</h6>
                    </th>
                  </tr>
                  {/* end table row*/}
                </thead>
                <tbody>
                  <tr style={{ border: "" }}>
                    <td>
                      <p>Urgent</p>
                    </td>
                    <td className="min-width">
                      <p>xx-yy-zzzz</p>
                    </td>
                    <td className="min-width">
                      <p>Esther Howard</p>
                    </td>

                    <td className="min-width">
                      <span className="status-btn active-btn">Active</span>
                    </td>
                    <td>
                      <div className="action justify-content-center">
                        <button className="text-success dasboard-action-icon">
                          {/* <i className="lni lni-eye" /> */}
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="text-success dasboard-action-icon">
                          {/* <i className="lni lni-pencil" /> */}
                          <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <button className="text-success dasboard-action-icon">
                          {/* <i className="lni lni-trash-can" /> */}
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* end table row */}
                </tbody>
              </table>
              {/* end table */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>

     
    </>
  );
};

export default Profile;

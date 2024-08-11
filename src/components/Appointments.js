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
  const [dashboardHidden, setDashboardHidden] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle sidebar width changes
  function updateSidebarWidth(open) {
    const dashboard2Column1 = document.querySelector("#dashboard-2-column1");
    const dashboard2Column2 = document.querySelector("#dashboard-2-column2");

    if (open) {
      // For larger screens
      if (window.innerWidth > 1080) {
        dashboard2Column1.style.width = "15%";
        dashboard2Column2.style.width = "85%";
      } else {
        // For smaller screens
        dashboard2Column1.style.width = "70%";
        dashboard2Column2.style.width = "100%";
      }
    } else {
      // For smaller screens
      if (window.innerWidth > 1080) {
        dashboard2Column1.style.width = "5%";
        dashboard2Column2.style.width = "95%";
      } else {
        // For smaller screens
        dashboard2Column1.style.width = "0%";
        dashboard2Column2.style.width = "100%";
      }
    }
  }

  // Function to handle mouse enter event
  function handleMouseEnter() {
    if (!sidebarOpen) {
      updateSidebarWidth(true);
      setSidebarOpen(true);

      const dashboard2Text = document.querySelectorAll("#dasboard2-text");

      dashboard2Text.forEach((text) => {
        text.classList.add("dasboard2-text-dblock");
        text.classList.remove("dasboard2-text");
      });
    }
  }

  // Function to handle mouse leave event
  function handleMouseLeave() {
    if (sidebarOpen) {
      updateSidebarWidth(false);
      setSidebarOpen(false);

      const dashboard2Text = document.querySelectorAll("#dasboard2-text");

      dashboard2Text.forEach((text) => {
        text.classList.remove("dasboard2-text-dblock");
        text.classList.add("dasboard2-text");
      });
    }
  }

  // Function to handle click event for toggle button
  function handleToggleClick() {
    // const dashboardHidden = !sidebarOpen;
    // updateSidebarWidth(dashboardHidden);

    if (dashboardHidden) {
      updateSidebarWidth(true); // Show sidebar
      setSidebarOpen(dashboardHidden);
      const dashboard2Text = document.querySelectorAll("#dasboard2-text");

      dashboard2Text.forEach((text) => {
        text.classList.add("dasboard2-text-dblock");
        text.classList.remove("dasboard2-text");
      });
    } else {
      updateSidebarWidth(false); // Hide sidebar
      setSidebarOpen(false);
      const dashboard2Text = document.querySelectorAll("#dasboard2-text");

      dashboard2Text.forEach((text) => {
        text.classList.remove("dasboard2-text-dblock");
        text.classList.add("dasboard2-text");
      });
    }
    setDashboardHidden(!dashboardHidden); // Toggle sidebar state
  }

  let [notificationOpen, setNotificationOpen] = useState(false);
  let [messageBoxOpen, setMessageBoxOpen] = useState(false);

  let [profileDivOpen, setprofileDivOpen] = useState(false);

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        {/* Section: Design Block */}
        <section
          className="text-center"
          style={{
            backgroundColor: "#f5f6f7",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {/* Background image */}
          {/* <div class="p-5 bg-image dashboard2-img"></div> */}
          {/* Background image */}
          <div className="col-md-12 m-auto">
            <div
              className="card shadow-5-strong"
              style={{
                marginTop: 0,
                background: "hsla(0, 0%, 100%, 0.8)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="container dashboard-2-container py-0">
                <div className="row d-flex justify-content-center my-0">
                  {/* <h1 class="fw-bold mb-5 wow fadeInUp">DashBoard</h1> */}

                  <header
                    className="header"
                    style={{ border: "1px solid rgba(82, 86, 94, 0.2)" }}
                  >
                    <div className="container-fluid  dashboard2-header">
                      <div className="dashboard-header2-row">
                        <div className="col-lg-5 col-md-5 col-12 dashboard-header2-row2">
                          <div className="header-left d-flex align-items-center">
                            <div className="dashboard2-header-logo">
                              <img src="/images/medicare-logo.png" alt />
                            </div>
                            <div className="menu-toggle-btn mr-15 dashboard2-menu-toggle-btn">
                              <button
                                id="dashboard2-side-close-btn"
                                onClick={handleToggleClick}
                                className="main-btn btn-custom"
                              >
                                <FontAwesomeIcon
                                  icon={sidebarOpen ? faChevronLeft : faBars}
                                  id="dashboard2-sidebar-icon"
                                />
                                Menu
                              </button>
                            </div>
                            <div className="header-search d-none d-md-flex">
                              <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button>
                                  {" "}
                                  <FontAwesomeIcon icon={faSearch} />{" "}
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 dashboard-header2-row3">
                          <div className="header-right">
                            <div className="header-left d-flex align-items-center  header-search-mobile">
                              <div className="header-search d-md-flex">
                                <form action="#">
                                  <input type="text" placeholder="Search..." />
                                  {/* <button><i class="lni lni-search-alt"></i></button> */}
                                </form>
                              </div>
                            </div>
                            {/* notification start */}
                            <div className="notification-box ml-15 d-md-flex">
                              <button
                                className="dropdown-toggle"
                                type="button"
                                id="notification"
                                onClick={() => {
                                  setNotificationOpen(!notificationOpen);
                                  setMessageBoxOpen(false);
                                  setprofileDivOpen(false);
                                }}
                                data-bs-toggle="dropdown"
                                aria-expanded={
                                  notificationOpen ? "true" : "false"
                                }
                              >
                                <svg
                                  width={22}
                                  height={22}
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 20.1667C9.88317 20.1667 8.88718 19.63 8.23901 18.7917H13.761C13.113 19.63 12.1169 20.1667 11 20.1667Z"
                                    fill
                                  />
                                  <path
                                    d="M10.1157 2.74999C10.1157 2.24374 10.5117 1.83333 11 1.83333C11.4883 1.83333 11.8842 2.24374 11.8842 2.74999V2.82604C14.3932 3.26245 16.3051 5.52474 16.3051 8.24999V14.287C16.3051 14.5301 16.3982 14.7633 16.564 14.9352L18.2029 16.6342C18.4814 16.9229 18.2842 17.4167 17.8903 17.4167H4.10961C3.71574 17.4167 3.5185 16.9229 3.797 16.6342L5.43589 14.9352C5.6017 14.7633 5.69485 14.5301 5.69485 14.287V8.24999C5.69485 5.52474 7.60672 3.26245 10.1157 2.82604V2.74999Z"
                                    fill
                                  />
                                </svg>
                                <span>2</span>
                              </button>
                              <ul
                                className={`dropdown-menu dropdown-menu-end ${
                                  notificationOpen ? "show" : ""
                                }`}
                                style={
                                  notificationOpen
                                    ? {
                                        inset: "0px 0px auto auto",
                                        margin: "0px",
                                        transform:
                                          "translate3d(0px, 48px, 0px)",
                                      }
                                    : null
                                }
                                aria-labelledby="notification"
                              >
                                <li>
                                  <a href="#0">
                                    <div className="image">
                                      <img
                                        src="assets/images/lead/lead-6.png"
                                        alt
                                      />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        John Doe
                                        <span className="text-regular">
                                          comment on a product.
                                        </span>
                                      </h6>
                                      <p>
                                        Lorem ipsum dolor sit amet, consect etur
                                        adipiscing elit Vivamus tortor.
                                      </p>
                                      <span>10 mins ago</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <div className="image">
                                      <img
                                        src="assets/images/lead/lead-1.png"
                                        alt
                                      />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        Jonathon
                                        <span className="text-regular">
                                          like on a product.
                                        </span>
                                      </h6>
                                      <p>
                                        Lorem ipsum dolor sit amet, consect etur
                                        adipiscing elit Vivamus tortor.
                                      </p>
                                      <span>10 mins ago</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* notification end */}

                            {/* message start */}
                            <div className="header-message-box ml-15 d-md-flex">
                              <button
                                className="dropdown-toggle"
                                type="button"
                                id="message"
                                onClick={() => {
                                  setMessageBoxOpen(!messageBoxOpen);
                                  setNotificationOpen(false);
                                  setprofileDivOpen(false);
                                }}
                                data-bs-toggle="dropdown"
                                aria-expanded={
                                  messageBoxOpen ? "true" : "false"
                                }
                              >
                                <svg
                                  width={22}
                                  height={22}
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.74866 5.97421C7.91444 5.96367 8.08162 5.95833 8.25005 5.95833C12.5532 5.95833 16.0417 9.4468 16.0417 13.75C16.0417 13.9184 16.0364 14.0856 16.0259 14.2514C16.3246 14.138 16.6127 14.003 16.8883 13.8482L19.2306 14.629C19.7858 14.8141 20.3141 14.2858 20.129 13.7306L19.3482 11.3882C19.8694 10.4604 20.1667 9.38996 20.1667 8.25C20.1667 4.70617 17.2939 1.83333 13.75 1.83333C11.0077 1.83333 8.66702 3.55376 7.74866 5.97421Z"
                                    fill
                                  />
                                  <path
                                    d="M14.6667 13.75C14.6667 17.2938 11.7939 20.1667 8.25004 20.1667C7.11011 20.1667 6.03962 19.8694 5.11182 19.3482L2.76946 20.129C2.21421 20.3141 1.68597 19.7858 1.87105 19.2306L2.65184 16.8882C2.13062 15.9604 1.83338 14.89 1.83338 13.75C1.83338 10.2062 4.70622 7.33333 8.25004 7.33333C11.7939 7.33333 14.6667 10.2062 14.6667 13.75ZM5.95838 13.75C5.95838 13.2437 5.54797 12.8333 5.04171 12.8333C4.53545 12.8333 4.12504 13.2437 4.12504 13.75C4.12504 14.2563 4.53545 14.6667 5.04171 14.6667C5.54797 14.6667 5.95838 14.2563 5.95838 13.75ZM9.16671 13.75C9.16671 13.2437 8.7563 12.8333 8.25004 12.8333C7.74379 12.8333 7.33338 13.2437 7.33338 13.75C7.33338 14.2563 7.74379 14.6667 8.25004 14.6667C8.7563 14.6667 9.16671 14.2563 9.16671 13.75ZM11.4584 14.6667C11.9647 14.6667 12.375 14.2563 12.375 13.75C12.375 13.2437 11.9647 12.8333 11.4584 12.8333C10.9521 12.8333 10.5417 13.2437 10.5417 13.75C10.5417 14.2563 10.9521 14.6667 11.4584 14.6667Z"
                                    fill
                                  />
                                </svg>
                                <span>1</span>
                              </button>
                              <ul
                                className={`dropdown-menu dropdown-menu-end ${
                                  messageBoxOpen ? "show" : ""
                                }`}
                                style={
                                  messageBoxOpen
                                    ? {
                                        inset: "0px 0px auto auto",
                                        margin: "0px",
                                        transform:
                                          "translate3d(0px, 48px, 0px)",
                                      }
                                    : null
                                }
                                aria-labelledby="message"
                              >
                                <li>
                                  <a href="#0">
                                    <div className="image">
                                      <img
                                        src="assets/images/lead/lead-5.png"
                                        alt
                                      />
                                    </div>
                                    <div className="content">
                                      <h6>Jacob Jones</h6>
                                      <p>
                                        Hey!I can across your profile and ...
                                      </p>
                                      <span>10 mins ago</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <div className="image">
                                      <img
                                        src="assets/images/lead/lead-3.png"
                                        alt
                                      />
                                    </div>
                                    <div className="content">
                                      <h6>John Doe</h6>
                                      <p>Would you mind please checking out</p>
                                      <span>12 mins ago</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <div className="image">
                                      <img
                                        src="assets/images/lead/lead-2.png"
                                        alt
                                      />
                                    </div>
                                    <div className="content">
                                      <h6>Anee Lee</h6>
                                      <p>
                                        Hey! are you available for freelance?
                                      </p>
                                      <span>1h ago</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* message end */}
                            {/* profile start */}
                            <div className="profile-box ml-15">
                              <button
                                className="dropdown-toggle bg-transparent border-0"
                                type="button"
                                id="profile"
                                onClick={() => {
                                  setprofileDivOpen(!profileDivOpen);
                                  setNotificationOpen(false);
                                  setMessageBoxOpen(false);
                                }}
                                data-bs-toggle="dropdown"
                                aria-expanded={
                                  profileDivOpen ? "true" : "false"
                                }
                              >
                                <div className="profile-info">
                                  <div className="info">
                                    <div className="image">
                                      <img
                                        src="/images/profile-image.png"
                                        alt
                                      />
                                    </div>
                                    <div className="profile-dropdown-username">
                                      <h6 className="fw-500 ">Adam Joe</h6>
                                      {/* <p>Admin</p> */}
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <ul
                                className={`dropdown-menu dropdown-menu-end ${
                                  profileDivOpen ? "show" : ""
                                }`}
                                style={
                                  profileDivOpen
                                    ? {
                                        inset: "0px 0px auto auto",
                                        margin: "0px",
                                        transform:
                                          "translate3d(0px, 48px, 0px)",
                                      }
                                    : null
                                }
                                aria-labelledby="profile"
                              >
                                <li>
                                  <div className="author-info flex items-center justify-content-center !p-1">
                                    <div className="content text-center">
                                      <h4
                                        className="text-medium"
                                        style={{ fontSize: 16 }}
                                      >
                                        Adam Joe
                                      </h4>
                                      <a
                                        className
                                        href="#"
                                        style={{ fontSize: 14 }}
                                      >
                                        Email@gmail.com
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li className="divider" />
                                <li>
                                  <a href="#0">
                                    {/* <i className="lni lni-user" style={{ fontSize: 18 }} />  */}
                                    <FontAwesomeIcon
                                      icon={faUser}
                                      style={{ fontSize: 18 }}
                                    />
                                    My Profile
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    {/* <i className="lni lni-cog" style={{ fontSize: 18 }} />  */}
                                    <FontAwesomeIcon
                                      icon={faCog}
                                      style={{ fontSize: 18 }}
                                    />
                                    Account Settings{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    {/* <i className="lni lni-wechat" style={{ fontSize: 18 }} />  */}
                                    <FontAwesomeIcon
                                      icon={faComments}
                                      style={{ fontSize: 18 }}
                                    />
                                    Need Help?
                                  </a>
                                </li>
                                <li className="divider" />

                                <li>
                                  <a href="#0">
                                    {/* <i className="lni lni-exit" style={{ fontSize: 18 }} />  */}
                                    <FontAwesomeIcon
                                      icon={faSignOutAlt}
                                      style={{ fontSize: 18 }}
                                    />
                                    Sign Out{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* profile end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  <div
                    id="dashboard-2-column1"
                    className=" dashboard-2-column1  px-0"
                  >
                    {/* ======== sidebar-nav start =========== */}
                    <aside
                      className="sidebar-nav-wrapper dashboard2-sidebar-nav-wrapper"
                      style={{ overflow: "" }}
                    >
                      <nav className="sidebar-nav dashboard2-sidebar-nav">
                        <ul
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <li className="nav-item dashboard-2-nav-item">
                            <Link
                              to="/"
                              id="dashboard2-nav-item-link"
                              className="dashboard-2-nav-item-link"
                            >
                              <span className="icon">
                                {/* <i className="fas fa-chart-pie" /> */}
                                <FontAwesomeIcon icon={faUser} />
                              </span>
                              <span
                                id="dasboard2-text"
                                className="dasboard2-text"
                              >
                                Profile
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item dashboard-2-nav-item">
                            <Link
                              to="/appointment"
                              id="dashboard2-nav-item-link"
                              className="dashboard-2-nav-item-link"
                            >
                              <span className="icon">
                                {/* <i className="fas fa-file-alt custom-middle-icon" /> */}
                                <FontAwesomeIcon
                                  icon={faCalendarCheck}
                                  className=""
                                />
                              </span>
                              <span
                                id="dasboard2-text"
                                className="dasboard2-text"
                              >
                                Appointments
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item dashboard-2-nav-item">
                            <a
                              href="invoice.html"
                              id="dashboard2-nav-item-link"
                              className="dashboard-2-nav-item-link"
                            >
                              <span className="icon">
                                <FontAwesomeIcon
                                  icon={faReceipt}
                                  className=""
                                />
                                {/* <i className="fas fa-shopping-basket" /> */}
                              </span>
                              <span
                                id="dasboard2-text"
                                className="dasboard2-text"
                              >
                                Medical Bills
                              </span>
                            </a>
                          </li>
                          <li className="nav-item dashboard-2-nav-item">
                            <a
                              href="invoice.html"
                              id="dashboard2-nav-item-link"
                              className="dashboard-2-nav-item-link"
                            >
                              <span className="icon">
                                <FontAwesomeIcon
                                  icon={faFileAlt}
                                  className=""
                                />
                                {/* <i className="fas fa-user " /> */}
                              </span>
                              <span
                                id="dasboard2-text"
                                className="dasboard2-text"
                              >
                                Medical Records
                              </span>
                            </a>
                          </li>

                          <li className="nav-item dashboard-2-nav-item">
                            <a
                              href="invoice.html"
                              id="dashboard2-nav-item-link"
                              className="dashboard-2-nav-item-link"
                            >
                              <span className="icon">
                                <FontAwesomeIcon
                                  icon={faFileMedical}
                                  className=""
                                />
                                {/* <i className="fas fa-user " /> */}
                              </span>
                              <span
                                id="dasboard2-text"
                                className="dasboard2-text"
                              >
                                Medications
                              </span>
                            </a>
                          </li>

                          <div className="dasboard2-logout-link">
                            <li className="nav-item dashboard-2-nav-item">
                              <a
                                href="invoice.html"
                                id="dashboard2-nav-item-link"
                                className="dashboard-2-nav-item-link"
                              >
                                <span className="icon">
                                  <FontAwesomeIcon
                                    icon={faCog}
                                    className="custom-middle-icon"
                                  />
                                  {/* <i className="fas fa-sign-out-alt custom-middle-icon" /> */}
                                </span>
                                <span
                                  id="dasboard2-text"
                                  className="dasboard2-text"
                                >
                                  Settings
                                </span>
                              </a>
                            </li>
                            <li className="nav-item dashboard-2-nav-item">
                              <a
                                href="invoice.html"
                                id="dashboard2-nav-item-link"
                                className="dashboard-2-nav-item-link"
                              >
                                <span className="icon">
                                  <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    className="custom-middle-icon"
                                  />
                                  {/* <i className="fas fa-sign-out-alt custom-middle-icon" /> */}
                                </span>
                                <span
                                  id="dasboard2-text"
                                  className="dasboard2-text"
                                >
                                  Logout
                                </span>
                              </a>
                            </li>
                          </div>
                        </ul>
                      </nav>
                    </aside>
                    <div className="overlay" />
                    {/* ======== sidebar-nav end =========== */}
                  </div>

                  <div
                    id="dashboard-2-column2"
                    className=" dashboard-2-column2 px-0"
                    style={{ display: "" }}
                  >
                    <div className="card-body dashboard-second-ca">
                      {/* ======== main-wrapper start =========== */}
                      <main className="main-wrapper" style={{}}>
                        <section
                          className="section"
                          style={{ paddingTop: 10, paddingBottom: 20 }}
                        >
                          {/* <div className="container-fluid"> */}

                          {/* =====================Order Table===================== */}
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="card-style mb-3">
                                <h3 className="text-start mb-3">
                                  {" "}
                                  Appointments{" "}
                                </h3>

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
                                          <span className="status-btn active-btn">
                                            Active
                                          </span>
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
                                          <span className="status-btn success-btn">
                                            Done
                                          </span>
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
                                          <span className="status-btn info-btn">
                                            Pending
                                          </span>
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
                                          <span className="status-btn close-btn">
                                            Close
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
                            {/* end col */}
                          </div>

                          {/* </div> */}
                        </section>
                      </main>
                    </div>
                  </div>

                  {/* <Profile/> */}

                  {/* <Outlet/> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Appointments;

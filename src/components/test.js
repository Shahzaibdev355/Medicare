
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    
    faEye, faPencil, faTrashCan, faCloudUpload, faCheckCircle,
}
    from "@fortawesome/free-solid-svg-icons"

const Profile = () => {
    return (
        <>

            <div className="row">

                <div className="col-lg-6 col-12">
                    <div className="card-style settings-card-1 mb-30">

                        <div className="profile-info">
                        {/* class="d-flex align-items-center mb-30" */}
                            <div className="d-flex align-items-center mb-30">
                                <div className="profile-image">
                                    <img src="/images/profile-image.png" alt />
                                    <div className="update-image">
                                        <input type="file" />
                                        <label htmlFor><FontAwesomeIcon icon={faCloudUpload} /></label>
                                    </div>



                                </div>



                                <div className="profile-meta col-12" style={{ textAlign: 'left' }}>

                                    {/* <h3 className="text-bold mb-2">John Doe</h3> */}

                                    <div className="row mb-2 profile-info-card-name">
                                        <h3 className="text-bold mb-2 profile-card-row-h3">John Doe</h3>
                                        <span className="status-btn active-btn profile-card-row-span"> Active</span>
                                    </div>

                                    <div className="row justify-content-between mb-2 profile-info-card-textCol">
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Role: </strong> UI/UX Design</p>
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Age: </strong> UI/UX Design</p>
                                    </div>
                                    <div className="row justify-content-between mb-2 profile-info-card-textCol">
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Email: </strong> UI/UX Design</p>
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Birth Date: </strong> UI/UX Design</p>
                                    </div>
                                    <div className="row justify-content-between mb-2 profile-info-card-textCol">
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Phone No: </strong> UI/UX Design</p>
                                        <p className="text-sm text-bold mb-0 profile-card-para"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Status: </strong> UI/UX Design</p>
                                    </div>



                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Work For: </strong> UI/UX Design</p>
                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Address: </strong> UI/UX Design</p>



                                </div>
                            </div>



                            <div className="d-flex align-items-center  mb-2 profile-info-card-column2">
                                <div className="profile-meta col-md-5 col-12 profile-info-card-column2-text">

                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Medical Insurance: </strong> None </p>
                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Vision Insurance: </strong>  Yes </p>
                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Dental Insurance: </strong> No </p>


                                </div>



                                <div className="profile-meta col-md-7 col-12" style={{ textAlign: 'left' }}>

                                    <span className="divider mt-0">
                                        <hr className="mt-0" />
                                    </span>





                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Chat Id: </strong> UI/UX Design</p>
                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Legacy Id: </strong> UI/UX Design</p>


                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Patient Since: </strong> UI/UX Design</p>
                                    <p className="text-sm text-bold mb-2"> <strong className="text-gray text-sm" style={{ fontSize: '16px' }}>Preferred Provider: </strong> UI/UX Design</p>



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
                                    <tr style={{ border: '' }}>
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



            <div className="row">

                <div className="col-md-4 col-12">
                    <div className="card-style mb-3  dashboard-profile-card">
                        <div className="row justify-content-between mb-3">
                            <h4 className="text-start mb-0 dashboard-profile-heading"> Medical Records </h4>
                            <a href="" className="btn btn-custom btn-inline mb-0 dashboard-profile-btn">Browse All</a>
                        </div>
                        <div className="table-wrapper table-responsive" style={{width: '100%'}}>
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

                <div className="col-md-4 col-12">
                    <div className="card-style mb-3 dashboard-profile-card">
                        <div className="row justify-content-between mb-3">
                            <h4 className="text-start mb-0 dashboard-profile-heading"> Medical Bills </h4>
                            <a href="" className="btn btn-custom btn-inline mb-0 dashboard-profile-btn">Browse All</a>
                        </div>

                        <div className="table-wrapper table-responsive" style={{width: '100%'}}>
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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

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
                                            <span className="status-btn active-btn"> <FontAwesomeIcon icon={faCheckCircle} /> Paid </span>

                                        </td>

                                    </tr>



                                </tbody>
                            </table>
                            {/* end table */}
                        </div>
                    </div>
                    {/* end card */}
                </div>

                <div className="col-md-4 col-12">
                    <div className="card-style mb-3 dashboard-profile-card">
                        <div className="row justify-content-between mb-3">
                            <h4 className="text-start mb-0 dashboard-profile-heading"> Medications </h4>
                            <a href="" className="btn btn-custom btn-inline mb-0 dashboard-profile-btn">Browse All</a>
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

            </div>


        </>
    );
}

export default Profile;
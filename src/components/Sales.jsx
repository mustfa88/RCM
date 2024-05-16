import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { GrGroup } from "react-icons/gr";
import { SiMoonrepo } from "react-icons/si";
import { BsSoundwave } from "react-icons/bs";
import { RiTimerFlashLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import img1 from '../image/download.png'
import { GiTrophyCup } from "react-icons/gi";
import { VscRefresh } from "react-icons/vsc";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import dash from '../image/Group 761.svg'
import cust from '../image/ant-design_customer-service-outlined.svg'
import tasks from '../image/clarity_tasks-line.svg'
import sales from '../image/carbon_sales-ops.svg'
import lead from '../image/clarity_contract-line.svg'
import leade1 from '../image/f7_doc.svg'
import leade2 from '../image/material-symbols-light_leaderboard-outline.svg'
import { FaEdit } from "react-icons/fa" ;
import { FaUserGroup } from "react-icons/fa6";
import ref from '../image/ic-replay-24px.svg'
import filter from '../image/filter.svg'

export default function Sales() {
    return (
        <>

            <div className="d-flex w-100 m-0 justify-content-between align-items-center border-bottom">
                <h2 className='title1 py-3 '>CO-MANGE</h2>
                <div className="d-flex gap-3 nav-right p-3 align-items-center">
                    <RiTimerFlashLine className='fs-3' />
                    <FaBell className='fs-3' />
                    <button className='btn d-flex align-items-center mybtn p-1 fw-bold rounded'>Add New &nbsp; <span>+</span></button>
                    <div className="search "><CiSearch className='fs-3' /></div>
                    <img src={img1} alt="avatar" className='avatar' />
                </div>
            </div>
            <div className='row'>

            <div className="col-3 dash">   
                    <ul className="d-flex flex-column gap-5">
                    <h2 className=" my-5 fw-bold title px-3 py-1">Inbox</h2>
                        <Link to='/desktop-2' className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' > <img src={dash} alt="" /> <span>Dashboard</span></Link>
                        <Link to='/desktop-3' className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={cust} alt="" /> <span>Customer</span></Link>
                        <Link to='/projects' className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={tasks} alt="" />Tasks</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={leade2} alt="" />Leads</Link>
                        <Link to='/sales' className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={sales} alt="" />Sales</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={leade1} alt="" />Proposals</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' ><img src={lead} alt="" />Contract</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metting</Link>
                        <Link className='fw-bold px-3 py-1 fs-5 d-flex gap-3 align-items-center link' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support</Link>
                    </ul>
                </div>
                <div className="col-9 right p-5 m-0">
                    <h2 className='title'>Sales</h2>

                    <div class="input-group my-3 input-p">
                        <span class="input-group-text bg-white px-3 icon-se"><CiSearch className='fw-bold text-dark fs-5' /></span>
                        <input type="text" class="form-control px-1  py-1 input-se" placeholder='Search here' aria-label="Amount (to the nearest dollar)" />
                    </div>


                    <div className="d-flex align-items-center my-5 w-100 justify-content-between">
                        <div className='d-flex align-items-center gap-5 justify-content-between div-1'>
                            <div><img src={filter} alt="" /></div>
                            <div>
                                <p className='fw-bold'>Filter By</p>
                            </div>
                            <div>
                                <select class="form-select select-p" aria-label="Default select example ">
                                    <option selected className=''>14 Feb 2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <select class="form-select select-p" aria-label="Default select example input-p ">
                                    <option selected className=''>Project Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <select class="form-select select-p" aria-label="Default select example  select-p ">
                                    <option selected className=''>Project Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center ref-p gap-3'>
                                <img src={ref} alt="" />
                                <p>Reset Filter</p>
                            </div>
                        </div>
                        <div><RiDashboardHorizontalFill className='fs-3 text-dark' /></div>
                        <Link to='/sales1' className='plus'><div>+</div></Link>
                    </div>




                    <table class="table text-dark my-1 table-borderless">

                        <tr className='border-bottom'>
                            <td className="p-3 text-secondary">ID</td>
                            <td className="p-3 text-secondary">Company</td>
                            <td className="p-3 text-secondary">Project</td>
                            <td className="p-3 text-secondary">date</td>
                            <td className="p-3 text-secondary">Amount</td>
                            <td className="p-3 text-secondary">Paymant</td>
                            <td className="p-3 text-secondary">Statues</td>
                            <td className="p-3 text-secondary">Action</td>
                        </tr>

                        <tbody>
                            <tr>
                                <td className="p-3">#2898</td>
                                <td className="p-3">LXYDI</td>
                                <td className="p-3"><p>Car co website </p></td>  
                                <td className='p-3'>22-2-2024</td>
                                <td className="p-3">200$</td>
                                <td className="p-3">200$</td>
                                <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
                                <td className="p-3 d-flex align-items-center gap-3"><FaEdit className='text-success fs-5' /><FaUserGroup className='text-dark fs-5' /></td>

                            </tr>
                            <tr>
                                <td className="p-3">#2898</td>
                                <td className="p-3">LXYDI</td>
                                <td className="p-3"><p>Car co website </p></td>  
                                <td className='p-3'>22-2-2024</td>
                                <td className="p-3">200$</td>
                                <td className="p-3">200$</td>
                                <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
                                <td className="p-3 d-flex align-items-center gap-3"><FaEdit className='text-success fs-5' /><FaUserGroup className='text-dark fs-5' /></td>

                            </tr>
                            <tr>
                                <td className="p-3">#2898</td>
                                <td className="p-3">LXYDI</td>
                                <td className="p-3"><p>Car co website </p></td>  
                                <td className='p-3'>22-2-2024</td>
                                <td className="p-3">200$</td>
                                <td className="p-3">200$</td>
                                <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
                                <td className="p-3 d-flex align-items-center gap-3"><FaEdit className='text-success fs-5' /><FaUserGroup className='text-dark fs-5' /></td>

                            </tr>
                            <tr>
                                <td className="p-3">#2898</td>
                                <td className="p-3">LXYDI</td>
                                <td className="p-3"><p>Car co website </p></td>  
                                <td className='p-3'>22-2-2024</td>
                                <td className="p-3">200$</td>
                                <td className="p-3">200$</td>
                                <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
                                <td className="p-3 d-flex align-items-center gap-3"><FaEdit className='text-success fs-5' /><FaUserGroup className='text-dark fs-5' /></td>
                            </tr>
                        </tbody>
                    </table>












                </div>

            </div>


        </>
    )
}

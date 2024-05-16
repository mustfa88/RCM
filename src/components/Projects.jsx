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
import imgcard from '../image/IMG-20240506-WA0009.jpg'
import avatar1 from '../image/download1.png'
import avatar2 from '../image/download2.png'
import ref from '../image/ic-replay-24px.svg'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import dash from '../image/Group 761.svg'
import cust from '../image/ant-design_customer-service-outlined.svg'
import tasks from '../image/clarity_tasks-line.svg'
import sales from '../image/carbon_sales-ops.svg'
import lead from '../image/clarity_contract-line.svg'
import leade1 from '../image/f7_doc.svg'
import leade2 from '../image/material-symbols-light_leaderboard-outline.svg'
import { FaFile } from "react-icons/fa";
import { BiSolidFile } from "react-icons/bi";
import { BsFillFileEarmarkRichtextFill } from "react-icons/bs";
import filter from '../image/filter.svg'
import right from '../image/Right.svg'



export default function Project() {
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
                    <h2 className='title'>Projects</h2>

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
                        <Link to='/projects2' className='plus'><div>+</div></Link>
                    </div>


                    <div className="d-flex justify-content-between con-box align-items-center">
                        <div class="card my-card">
                            <img src={imgcard} class="card-img-top" alt="photo" height='150' />
                            <div class="card-body p-3">
                                <div className='d-flex fw-bold mb-3 justify-content-between'><p className='w-75 para-p'>Education website ,app
                                    and dashboard</p> <span ><img src={right} alt="" /></span></div>
                                <p className='fw-bold mb-3'>Client: Mohammed</p>
                                <p className='para-p-1 mb-3'>Start date:20-2-2024</p>
                                <p className='para-p-1 mb-3'>End date:20-8-2024</p>
                                <div className='mx-auto w-100 mb-3'><div class="progress pro-1">
                                    <div class="progress-bar bg-info w-75 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div></div>
                                <div className='mx-auto d-flex btns-p mb-5 gap-3'>
                                   <button className='btn btn-1-p btn-pro'>#UI003</button>
                                   <button className='btn btn-2-p btn-pro btn-pro-1'>Development</button>
                                   <button className='btn btn-3-p btn-pro btn-pro-2'>Backlog</button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="div-f">
                                    <div className='div-f-1'>
                                        <img src={avatar1} alt="avatar" />
                                    </div>
                                    <div className='div-f-2'>
                                        <img src={avatar2} alt="avatar" />
                                    </div>
                                    <div className='div-f-3'>
                                        <span>5</span>
                                    </div>
                                    <div className='div-f-4'>
                                        <span>+</span>
                                    </div>
                                    </div>
                                    <div className='d-flex pb-3 align-items-center fw-bold text-secondary gap-2'>
                                    <BiSolidFile/>
                                    <span>2</span>
                                    <BsFillFileEarmarkRichtextFill/>
                                    <span>4</span>

                                </div>
                                </div>





                            </div>
                        </div>
                        <div class="card my-card">
                            <img src={imgcard} class="card-img-top" alt="photo" height='150' />
                            <div class="card-body p-3">
                                <div className='d-flex fw-bold mb-3 justify-content-between'><p className='w-75 para-p'>Education website ,app
                                    and dashboard</p> <span ><img src={right} alt="" /></span></div>
                                <p className='fw-bold mb-3'>Client: Mohammed</p>
                                <p className='para-p-1 mb-3'>Start date:20-2-2024</p>
                                <p className='para-p-1 mb-3'>End date:20-8-2024</p>
                                <div className='mx-auto w-100 mb-3'><div class="progress pro-1">
                                    <div class="progress-bar bg-info w-75 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div></div>
                                <div className='mx-auto d-flex btns-p mb-5 gap-3'>
                                   <button className='btn btn-1-p btn-pro'>#UI003</button>
                                   <button className='btn btn-2-p btn-pro btn-pro-1'>Development</button>
                                   <button className='btn btn-3-p btn-pro btn-pro-2'>Backlog</button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="div-f">
                                    <div className='div-f-1'>
                                        <img src={avatar1} alt="avatar" />
                                    </div>
                                    <div className='div-f-2'>
                                        <img src={avatar2} alt="avatar" />
                                    </div>
                                    <div className='div-f-3'>
                                        <span>5</span>
                                    </div>
                                    <div className='div-f-4'>
                                        <span>+</span>
                                    </div>
                                    </div>
                                    <div className='d-flex pb-3 align-items-center fw-bold text-secondary gap-2'>
                                    <BiSolidFile/>
                                    <span>2</span>
                                    <BsFillFileEarmarkRichtextFill/>
                                    <span>4</span>

                                </div>
                                </div>





                            </div>
                        </div>
                        <div class="card my-card">
                            <img src={imgcard} class="card-img-top" alt="photo" height='150' />
                            <div class="card-body p-3">
                                <div className='d-flex fw-bold mb-3 justify-content-between'><p className='w-75 para-p'>Education website ,app
                                    and dashboard</p> <span ><img src={right} alt="" /></span></div>
                                <p className='fw-bold mb-3'>Client: Mohammed</p>
                                <p className='para-p-1 mb-3'>Start date:20-2-2024</p>
                                <p className='para-p-1 mb-3'>End date:20-8-2024</p>
                                <div className='mx-auto w-100 mb-3'><div class="progress pro-1">
                                    <div class="progress-bar bg-info w-75 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div></div>
                                <div className='mx-auto d-flex btns-p mb-5 gap-3'>
                                   <button className='btn btn-1-p btn-pro'>#UI003</button>
                                   <button className='btn btn-2-p btn-pro btn-pro-1'>Development</button>
                                   <button className='btn btn-3-p btn-pro btn-pro-2'>Backlog</button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="div-f">
                                    <div className='div-f-1'>
                                        <img src={avatar1} alt="avatar" />
                                    </div>
                                    <div className='div-f-2'>
                                        <img src={avatar2} alt="avatar" />
                                    </div>
                                    <div className='div-f-3'>
                                        <span>5</span>
                                    </div>
                                    <div className='div-f-4'>
                                        <span>+</span>
                                    </div>
                                    </div>
                                    <div className='d-flex pb-3 align-items-center fw-bold text-secondary gap-2'>
                                    <BiSolidFile/>
                                    <span>2</span>
                                    <BsFillFileEarmarkRichtextFill/>
                                    <span>4</span>

                                </div>
                                </div>





                            </div>
                        </div>
                    </div>












                </div>

            </div>


        </>
    )
}

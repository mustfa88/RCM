import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { RiTimerFlashLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import img1 from '../image/download.png'
import { BiSolidMessageEdit } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import dash from '../image/Group 761.svg'
import cust from '../image/ant-design_customer-service-outlined.svg'
import tasks from '../image/clarity_tasks-line.svg'
import sales from '../image/carbon_sales-ops.svg'
import lead from '../image/clarity_contract-line.svg'
import leade1 from '../image/f7_doc.svg'
import leade2 from '../image/material-symbols-light_leaderboard-outline.svg'
import { IoMdMail } from "react-icons/io";
import edit from '../image/lucide_edit.svg'



export default function Desktop3() {
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
                <div className="col-9 right p-3 m-0">
                    <h2 className='title'>Customer</h2>
                    
                        <div class="input-group my-3">
                            <span class="input-group-text bg-white px-3 icon-se"><CiSearch className='fw-bold text-dark fs-5' /></span>
                            <input type="text" class="form-control px-1  py-1 input-se" placeholder='Search here' aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <Link to='/addclint' className='btn rounded btn-se'>Add New &nbsp; +</Link>


                   



                    <table class="table text-dark my-1 table-borderless">

                        <tr className='border-bottom'>
                            <td className="p-3 t-he cus-t">Serial number</td>
                            <td className="p-3 t-he">Name</td>
                            <td className="p-3 t-he">E-mails</td>
                            <td className="p-3 t-he">Project</td>
                            <td className="p-3 t-he">Status</td>
                            <td className="p-3 t-he">Invoice</td>
                            <td className="p-3 t-he">Tags</td>
                            <td className="p-3 t-he">Action</td>
                        </tr>

                        <tbody>
                            <tr>
                                <td className="p-3 text-center">#2898</td>
                                <td className="p-3"><p>Mohamed</p></td>
                                <td className="p-3">alexander.foley@gmail.com</td>
                                <td className="p-3 text-center">2</td>
                                <td className="p-3"><button className='btn rounded btn-3'>Active</button></td>
                                <td className="p-3">200$</td>
                                <td className="p-3">Design</td>
                                <td className="p-3 d-flex align-items-center gap-3"><img src={edit} alt="" /><IoMdMail className='text-dark fs-5'/></td>
                            </tr>
                            <tr>
                                <td className="p-3 text-center">#2898</td>
                                <td className="p-3"><p>Mohamed</p></td>
                                <td className="p-3">alexander.foley@gmail.com</td>
                                <td className="p-3 text-center">2</td>
                                <td className="p-3"><button className='btn rounded btn-4'>Inactive</button></td>
                                <td className="p-3">200$</td>
                                <td className="p-3">ui/ux</td>
                                <td className="p-3 d-flex align-items-center gap-3"><img src={edit} alt="" /><IoMdMail className='text-dark fs-5'/></td>
                            </tr>
                            <tr>
                                <td className="p-3 text-center">#2898</td>
                                <td className="p-3"><p>Mohamed</p></td>
                                <td className="p-3">alexander.foley@gmail.com</td>
                                <td className="p-3 text-center">2</td>
                                <td className="p-3"><button className='btn rounded btn-4'>Inactive</button></td>
                                <td className="p-3">200$</td>
                                <td className="p-3">programming</td>
                                <td className="p-3 d-flex align-items-center gap-3"><img src={edit} alt="" /><IoMdMail className='text-dark fs-5'/></td>
                            </tr>
                            <tr>
                                <td className="p-3 text-center">#2898</td>
                                <td className="p-3"><p>Mohamed</p></td>
                                <td className="p-3">alexander.foley@gmail.com</td>
                                <td className="p-3 text-center">2</td>
                                <td className="p-3"><button className='btn rounded btn-3'>Active</button></td>
                                <td className="p-3">200$</td>
                                <td className="p-3">ui/ux</td>
                                <td className="p-3 d-flex align-items-center gap-3"><img src={edit} alt="" /><IoMdMail className='text-dark fs-5'/></td>
                            </tr>
                        </tbody>
                    </table>



                </div>

            </div>


        </>
    )
}

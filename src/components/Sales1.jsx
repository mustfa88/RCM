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
import { BiTask } from "react-icons/bi";
import dash from '../image/Group 761.svg'
import cust from '../image/ant-design_customer-service-outlined.svg'
import tasks from '../image/clarity_tasks-line.svg'
import sales from '../image/carbon_sales-ops.svg'
import lead from '../image/clarity_contract-line.svg'
import leade1 from '../image/f7_doc.svg'
import leade2 from '../image/material-symbols-light_leaderboard-outline.svg'
import { MdDashboard } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { TbDevicesDollar } from "react-icons/tb";


export default function Sales1() {
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
                    <h2 className='title mb-5'>Car co website</h2>

                    <div className="over-1 w-100 d-flex flex-column gap-3">
                          <div className="d-flex w-100 justify-content-between mb-5 div-sales-1">
                             <div>
                              <p className='fw-bold'>Invoice</p>
                              <p className='fw-bold'>#122389</p>
                             </div>
                             <h3 className='text-secondary fw-bold'>DRAFT</h3>
                          </div>
                          <div className="div-sales-1 mb-5">
                          <h3 className=' fw-bold'>LXYDI</h3>

                              <p className='text-secondary'>Cairo,Egypt</p>
                              <p className='text-secondary'>LXYDI.com</p>
                             
                          </div>
                          <div className="d-flex w-100 justify-content-between align-items-center">
                             <div className='d-flex align-items-center gap-3'>
                              <span className='fw-bold'>Invoice date</span>
                              <span className='text-secondary'>23-4-2023</span>
                             </div>
                             <div className='d-flex align-items-center gap-3'>
                              <span className='fw-bold'>Payments</span>
                              <span className='text-secondary'>50$</span>
                             </div>
                          </div>
                          <div className="d-flex w-100 justify-content-between align-items-center">
                             <div className='d-flex align-items-center gap-3'>
                              <span className='fw-bold'>Due date</span>
                              <span className='text-secondary'>23-4-2023</span>
                             </div>
                             <div className='d-flex align-items-center gap-3'>
                              <span className='fw-bold'>Balance Due</span>
                              <span className='text-primary'>200$</span>
                             </div>
                          </div>
                          
                    <table class="table text-dark my-1 table-borderless mx-auto w-50">

<tr className='border-bottom'>
    <td className="p-3 text-secondary">Quntity</td>
    <td className="p-3 text-secondary">Unit</td>
    <td className="p-3 text-secondary">Rate</td>
    <td className="p-3 text-secondary">Total</td>
</tr>

<tbody>
    <tr>
        <td className="p-3">1</td>
        <td className="p-3">Pc</td>
        <td className="p-3">100</td>  
        <td className='p-3'>100</td>
    </tr>
    <tr>
        <td className="p-3">1</td>
        <td className="p-3">Pc</td>
        <td className="p-3">100</td>  
        <td className='p-3'>100</td>
    </tr>
    <tr>
        <td className="p-3">1</td>
        <td className="p-3">Pc</td>
        <td className="p-3">100</td>  
        <td className='p-3'>100</td>
    </tr>
    <tr>
        <td className="p-3">1</td>
        <td className="p-3">Pc</td>
        <td className="p-3">100</td>  
        <td className='p-3'>100</td>
    </tr>
</tbody>
</table>
                    </div>











                </div>

            </div>


        </>
    )
}

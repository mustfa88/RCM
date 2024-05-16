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
import shape from '../image/shape.svg'
import shape1 from '../image/shape1.svg'
import shape2 from '../image/shape2.svg'
import shape3 from '../image/shape3.svg'
import dash from '../image/Group 761.svg'
import cust from '../image/ant-design_customer-service-outlined.svg'
import tasks from '../image/clarity_tasks-line.svg'
import sales from '../image/carbon_sales-ops.svg'
import lead from '../image/clarity_contract-line.svg'
import leade1 from '../image/f7_doc.svg'
import leade2 from '../image/material-symbols-light_leaderboard-outline.svg'
import { CgArrowTopRight } from "react-icons/cg";
import group1 from '../image/Group 16.svg'
import group2 from '../image/Group 17.svg'
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GoArrowDownLeft } from "react-icons/go";
import body from '../image/body.png'
import icong from '../image/Group 18.svg'
import icong2 from '../image/Group 18 Copy.png'

// const data1 = [
//   {
//     name: '',
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: '',
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: '',
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: '',
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: '',
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: '',
//     uv: 2390,
//     pv: 3800,
//   },
//   {
//     name: '',
//     uv: 3490,
//     pv: 4300,
//   },
// ];


// const data = [
//     {
//       name: 'Page A  kkjj',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
export default function Desktop2() {
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
                    <div className="d-flex container justify-content-between align-items-center right-1 rounded">
                        <div class=" text-dark  border-0 p-3"  >
                            <div class=" my-3 border-0 d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold fs-3'>89,935</h5>
                                <img src={shape} alt="" />
                            </div>
                            <p className='fw-bold'>Total users </p>
                            <p className='d-flex align-items-center gap-3'><CgArrowTopRight className='text-success fw-bold'/><span className='light'>10.2 &nbsp; +1.01% this week</span></p>
            
                        </div>
                        <div class=" text-dark box  border-0 p-3"  >
                            <div class=" my-3 border-0 d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold fs-3'>89,935</h5>
                                <img src={shape1} alt="" />
                            </div>
                            <p className='fw-bold'>Total users </p>
                            <p className='d-flex align-items-center gap-3'><CgArrowTopRight className='text-success fw-bold'/><span className='light'>10.2 &nbsp; +1.01% this week</span></p>
            
                        </div>
                        <div class=" text-dark box  border-0 p-3"  >
                            <div class=" my-3 border-0 d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold fs-3'>89,935</h5>
                                <img src={shape2} alt="" />
                            </div>
                            <p className='fw-bold'>Total users </p>
                            <p className='d-flex align-items-center gap-3'><GoArrowDownLeft className='text-danger fw-bold'/><span className='light'>10.2 &nbsp; -0.91% this week</span></p>
            
                        </div>
                        <div class=" text-dark box  border-0 p-3"  >
                            <div class=" my-3 border-0 d-flex align-items-center justify-content-between">
                                <h5 className='fw-bold fs-3'>89,935</h5>
                                <img src={shape3} alt="" />
                            </div>
                            <p className='fw-bold'>Total users </p>
                            <p className='d-flex align-items-center gap-3'><CgArrowTopRight className='text-success fw-bold'/><span className='light'>10.2 &nbsp; +1.01% this week</span></p>
            
                        </div>
                    </div>
                    <div class="dropdown">
  <p class="dropdown-toggle fs-3 m-5 text-dark" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Today
  </p>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div className="d-flex mx-5 justify-content-between align-items-center ">
  <p className='fw-bold position-relative'><FaRegCircle className='cir-1'/>Conversations</p>
  <div className="d-flex flex-column gap-3 ">
      <p className='text-secondary d-flex align-items-center fw-100'><FaCircle className='cir-2'/> &nbsp; <span className='spn'>Today</span></p>
      <p className='text-secondary d-flex align-items-center fw-100'><FaCircle className='cir-3'/> &nbsp; <span className='spn'>Yesterday</span></p>
  </div>
</div>
{/* <ResponsiveContainer width="100%" height="30%"  className='position-relative'>
<div className='note'>
            <p className='note-p'>today</p>
            <p className='fw-bold'>25</p>
            <p className='text-secondary'>testerday</p>
            <p className='fw-bold'>23</p>
          </div>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" height={60}  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
      <img src={body} alt="" width='100%'/>
<div className='row m-5'>
    <div className="col-8">
      <h5 className='title3 fw-bold'>My projects</h5>
      <table class="table text-dark my-1 table-borderless">
    
    <tr className='border-bottom'>
      <td className="p-3 text-secondary">#</td>
      <td className="p-3 text-secondary">Name</td>
      <td className="p-3 text-secondary">Date</td>
      <td className="p-3 text-secondary">Popularity</td>
      <td className="p-3 text-secondary">Statues</td>
    </tr>
  
  <tbody>
    <tr>
      <td className="p-3">01</td>
      <td className="p-3"><p>Website </p></td>
      <td className="p-3">2-2-2002</td>
      <td className="py-3"><div class="progress pro-1">
  <div class="progress-bar bg-info w-75 " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
      <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
    </tr>
    <tr>
      <td className="p-3">02</td>
      <td className="p-3"><p>Website </p></td>
      <td className="p-3">2-2-2002</td>
      <td className="py-3"><div class="progress pro-1">
  <div class="progress-bar bg-success w-100 " role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
      <td className="p-3"><button className='btn rounded btn-2 btn-2-2'>complete</button></td>
    </tr>
    <tr>
      <td className="p-3">03</td>
      <td className="p-3"><p>Website </p></td>
      <td className="p-3">2-2-2002</td>
      <td className="py-3"><div class="progress pro-1">
  <div class="progress-bar bg-success w-100 " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
      <td className="p-3"><button className='btn rounded btn-2 btn-2-2'>complete</button></td>
    </tr>
    <tr>
      <td className="p-3">04</td>
      <td className="p-3"><p>Website </p></td>
      <td className="p-3">2-2-2002</td>
      <td className="py-3"><div class="progress pro-1">
  <div class="progress-bar bg-info w-75 " role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
      <td className="p-3"><button className='btn rounded btn-1'>in progress</button></td>
    </tr>
  </tbody>
</table>
    </div>
    <div className="col-4">
      <h5 className='title3 fw-bold'>Customer Satisfaction</h5>
      {/* <ResponsiveContainer className='mt-1 mx-3' width="100%" height="90%">
        <AreaChart
          width={500}
          height={400}
          data={data1}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
           <XAxis dataKey="name" /> 
           <YAxis /> 
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#0095FF" fill="#0095FF" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#07E098" fill="#07E098" />
        </AreaChart>
      </ResponsiveContainer> */}
      <div className='d-flex flex-column mt-5 g'>
      <img src={group2} alt="" />
        <img src={group1} alt="" className='g-1'/> 
      </div>
      <div className='d-flex flex-column w-75 mx-auto'>
        <div className="d-flex gap-5 justify-content-center align-items-center">
            <div className='d-flex align-items-center'>
              <img src={icong} alt=""/>
              <span className='span-g'>Last Month</span>
            </div>
            <div className='d-flex align-items-center'>
              <img src={icong2} alt=""/>
              <span className='span-g'>This Month</span>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <span className='mx-5 fw-bold'>$3,004</span>
            <span className='mx-5 fw-bold'>$4,504</span>
        </div>
      </div>

    </div>
    
</div>

                </div>

            </div>
        </>
    )
}

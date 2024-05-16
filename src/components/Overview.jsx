import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import '../App.css'
import img from '../image/IMG-20240506-WA0009.jpg'
const data = [
  { name: 'Group A', value: 900 },
  { name: 'Group B', value: 300 }
];
const COLORS = ['#0D99FF', '#3AC977'];

export default function Overview() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className='d-flex justify-content-between align-items-center over-1'>
          <PieChart width={190} height={190} className='position-relative rotate'>

            <Pie
              data={data}
              cx={80}
              cy={80}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {COLORS.map((index) => (
                <Cell key={`cell-${index}`} fill={index} />
              ))}
            </Pie>

          </PieChart>
          <div className='d-flex flex-column gap-5'>
            <p className='fw-bold position-relative'><span className='polit-1 '></span> Complete</p>
            <p className='fw-bold position-relative'><span className='polit-2 '></span> not complete</p>
          </div>
        </div>
        <div className='rounded over-1 '>

          <div className='d-flex py-3 justify-content-between align-items-center position-relative'>
            <p>All invoices</p>
            <span className='sp-1'>250$</span>
            <div class="progress pro-1 w-50">
              <div class="progress-bar bg-info w-100 " role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className='d-flex py-3 justify-content-between align-items-center position-relative'>
            <p>Payment</p>
            <span className='sp-1'>50$</span>
            <div class="progress pro-2 w-50">
              <div class="progress-bar bg-success w-25 " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

            </div>
          </div>
          <div className='d-flex py-3  justify-content-between align-items-center position-relative'>
            <p>Balance due</p>
            <span className='sp-1'>200$</span>
            <div class="progress pro-3 w-50">
              <div class="progress-bar bg-danger w-75 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>


        </div>
      </div>

      <div className="d-flex justify-content-between my-5">
        <div className="d-flex over flex-column gap-5">
          <div className='over-1 over-3  '>
            <div>
              <p className='fw-bold p-1'>E-commerce</p>
              <div className='gray'></div>
            </div>
            <div className="d-flex mt-5 justify-content-between align-items-center">
              <div>
                <p className='fw-bold p-1'>Assigned</p>
                <img src={img} alt="" className='img-over' />
              </div>
              <div>
                <p className='fw-bold p-1'>Project manger</p>
                <img src={img} alt="" className='img-over' />
              </div>
            </div>
          </div>
          <div className="over-1  over-3 flex-column gap-3">
            <div className="d-flex justify-content-between">
              <div>
                <p className='fw-bold'>Start date</p>
                <p className='text-secondary'>2-3-2022</p>
              </div>
              <div>
                <p className='fw-bold'>Due date</p>
              </div>
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div>
                <p className='fw-bold'>Category</p>
                <p className='text-secondary'>website</p>
              </div>
              <div>
                <p className='fw-bold'>Status</p>
                <p className='text-success'>Complete</p>
              </div>
            </div>
          </div>
        </div>

        <div className="over-1 d-flex flex-column gap-5">
            <div className='d-flex align-items-center justify-content-center gap-3'>
              <div className='image-over-1'><img src={img} alt="" className='image-over ' /></div>
              
              <div>
                <h3 className='fw-bold'>LXDYI</h3>
                <p className='text-secondary'>change project status</p>
                <p className='para-over p-1'>New status:complete</p>
              </div>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
              <div><img src={img} alt="" className='image-over ' /></div>
              <div>
                <h3 className='fw-bold'>LXDYI</h3>
                <p className='text-secondary'>change project status</p>
                <p className='para-over p-1'>New status:complete</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

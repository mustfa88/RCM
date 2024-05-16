import React from 'react'
import { RiGroup3Fill } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import icon5 from '../image/fluent_text-description-16-filled.svg'
import icon6 from '../image/solar_list-check-bold.svg'
import icon7 from '../image/ic_round-file-upload.svg'
import { IoIosDownload } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import image from '../image/download1.png'
import icon1 from '../image/grommet-icons_status-info.svg'
import icon2 from '../image/mingcute_safety-certificate-line.svg'
import icon3 from '../image/solar_user-broken.svg'
import icon4 from '../image/gala_clock.svg'
import icon0 from '../image/fontisto_date.svg'
export default function Task1() {
    return (
        <div className="d-flex justify-content-between my-5 w-100">
            <div className="d-flex flex-column gap-3 task1-1">
                <div className="over-1 w-100">
                    <h3 className='title'>Information</h3>
                    <p className='text-secondary'>Task ID: #60</p>
                    <p className='text-secondary'>Created By: LXYDI</p>
                    <p className='text-secondary'>Date created: 12:65</p>
                    <p className='text-secondary'>Total time: 00:00</p>
                    <p className='text-secondary'>Time invoiced: 00:00</p>
                    <p className='text-secondary'>Project:: #33</p>
                </div>
                <div className="over-1 w-100">
                    <h3 className="title">New Task</h3>
                    <p className='para-task-1 mb-5'>Lorem ipsum dolor sit amet consectetur. Tristique turpis malesuada elit dolor lectus. Lacinia sit pellentesque eu non tristique. In turpis sagittis eget mollis nibh. Mattis vestibulum aenean a etiam est tellus.</p>
                     <div className='d-flex gap-3 align-items-center'><img src={icon5} alt="" /><h3 className="title">Description</h3></div>
                     <p className='co-task-1 mb-5'>Edit description</p>
                     <div className='d-flex gap-3 align-items-center'><img src={icon6} alt="" /><h3 className="title">Check list</h3></div>
                     <p className='co-task-1'>Add Check list</p>
                     <div className='d-flex gap-3'><input type='checkbox' /><p>Oranges</p></div>
                     <div className='d-flex gap-3'><input type='checkbox' /><p>Mangos</p></div>
                     <div className='d-flex gap-3'><input type='checkbox' /><p>Apples</p></div>
                     <div className='mb-3 d-flex gap-3' ><input type='checkbox' /><p>Bananas</p></div>
                     <div className='d-flex gap-3 align-items-center'><img src={icon7} alt="" /><h3 className="title">File Attachments</h3></div>
                     <p className='co-task-1 mb-5'>Add file</p>
                     <div className='d-flex gap-3 align-items-center'><img src={icon5} alt="" /><h3 className="title">Custom fields</h3></div>
                     <p className='co-task-1 mb-5'>Add file</p>
                     <button className='btn-task-1'>Edit</button>
                </div>
            </div>
            <div className="over-1 task1-2 ">
                <p className='text-secondary fw-bold mb-3'>Assigned users</p>
                <div className='d-flex gap-5 align-items-center'>
                    <img src={image} alt="photo" className='img-task-1'/>
                    <p className='fw-bold plus-task plus-task-1'><CiCirclePlus className='fw-bold fs-5'/></p>
                </div>
                <div className='mx-5 d-flex flex-column my-1 position-relative'>
                    <h3 className='title mb-3'>TIMER</h3>
                    <div className='d-flex gap-3 mb-3'>
                        <div className="over-task-1 fw-bold">00</div>
                        <div className="over-task-1 fw-bold">00</div>
                        <div className="over-task-1 fw-bold">00</div>
                    </div>
                    <div className='d-flex gap-3'>
                         <span className=''>Hours</span>
                         <span className=''>Minutes</span>
                         <span className=''>Seconds</span>
                    </div>
                    <RiGroup3Fill className='icon-task-1'/>

                </div>
                <h5 className='title'>Settings</h5>
                <div class="input-group  input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0 icon-se b-task-1"><img src={icon0} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1" aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div class="input-group  input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0 icon-se b-task-1"><img src={icon0} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1" aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div class="input-group  input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0 icon-se b-task-1"><img src={icon1} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1" aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div class="input-group  input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0 icon-se b-task-1"><img src={icon2} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1"  aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div class="input-group  input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0 icon-se b-task-1"><img src={icon3} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1"  aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div class="input-group   input-p input-p-1">
                        <span class="input-group-text bg-white px-3 border-end-0  icon-se b-task-1"><img src={icon4} alt="" /></span>
                        <input type="text" class="form-control px-1 border-start-0  py-1 input-se b-task-1"  aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <div className='text-secondary fw-bold tag'>Tags</div>

                    <div className='d-flex flex-column gap-3'>
                    <button className='btn btn-outline-secondary w-75 mt-1 py-1 d-flex gap-1 fw-bold align-items-center btn-task-1-1 justify-content-center'><IoIosDownload/><span>Archive</span></button>
                    <button className='btn btn-outline-danger w-75 py-1 d-flex gap-1 fw-bold align-items-center btn-task-1-2 justify-content-center'><MdOutlineDeleteOutline/><span>Delete</span></button>
                    </div>



            </div>
        </div>
    )
}

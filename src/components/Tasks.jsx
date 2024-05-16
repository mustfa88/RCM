import React, { useState } from 'react'
import image from '../image/download.png'
import { AiFillMessage } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import icon from '../image/humbleicons_chat.svg'
export default function Tasks() {
  const [style1 , setStyle1] = useState('overlay d-flex flex-column d-none')
  const Open = () => {
     setStyle1('overlay d-flex flex-column d-block')
  }
  return (
    <div className='ap'>
          <div className='d-flex justify-content-between align-items-center my-5'>

<div className='d-flex flex-column gap-3 over-1 over-task'>
   <div className='d-flex justify-content-between align-items-center w-100'>
     <h5 className='text-secondary fw-bold'>New</h5>
     <p className='fw-bold plus-task' onClick={Open}><CiCirclePlus className='fw-bold fs-5'/></p>
   </div>
   <p className='fw-bold'>new task</p>
   <button className='btn btn-task'>complete</button>
   <p className='fw-bold'>Project:</p>
   <p className='fw-bold'>Client:</p>
   <p className='fw-bold'>Created:</p>
   <p className='fw-bold'>Start date:</p>
   <p className='fw-bold'>Due date:</p>
   <div className='d-flex justify-content-between align-items-center w-100'>
        <img src={image} alt="" className='img-task' />
         <img src={icon} alt="" />
   </div>
</div>
<div className='d-flex flex-column gap-3 over-1 over-task'>
   <div className='d-flex justify-content-between align-items-center w-100'>
     <h5 className='text-secondary fw-bold'>New</h5>
     <p className='fw-bold plus-task' onClick={Open}><CiCirclePlus className='fw-bold fs-5'/></p>
   </div>
   <p className='fw-bold'>new task</p>
   <button className='btn btn-task'>complete</button>
   <p className='fw-bold'>Project:</p>
   <p className='fw-bold'>Client:</p>
   <p className='fw-bold'>Created:</p>
   <p className='fw-bold'>Start date:</p>
   <p className='fw-bold'>Due date:</p>
   <div className='d-flex justify-content-between align-items-center w-100'>
        <img src={image} alt="" className='img-task' />
         <img src={icon} alt="" />
   </div>
</div>
</div>
<div  className={style1}>
 <h2 className='mb-5'>Add Task</h2>
<dl>
  <dt>Title</dt>
  <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>

  <dt>Milestone</dt>
  <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>

  <dt>Priory</dt>
  <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>

  <dt>Assign users</dt>
  <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>
</dl>
<div className="d-flex flex-column">
   <div className="d-flex justify-content-between">
       <p><span className='fw-bold sp-tasks'>Description & details</span><br /><span className='fw-bold text-dark'>Description & details</span></p>
       <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
        </div>
   </div>
   <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>

</div>
<div className="d-flex flex-column">
   <div className="d-flex justify-content-between">
       <p><span className='fw-bold sp-tasks'>Information</span><br /><span className='fw-bold text-dark'>More Information</span></p>
       <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
        </div>
   </div>
   <dd><input type="text" class="form-control p-3 rounded mb-3" placeholder="Type here" /></dd>

</div>
<div className="d-flex flex-column">
   <div className="d-flex justify-content-between">
       <p><span className='fw-bold sp-tasks'>Options</span><br /><span className='fw-bold text-dark'>Target Date</span></p>
       <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
        </div>
   </div>
   <dd><input type="text" class="form-control p-3 rounded mt-3 mb-3" placeholder="Type here" /></dd>

</div>
<dl>
  
<dt>Tags</dt>
  <dd><input type="text" class="form-control p-3 rounded mb-3" placeholder="Type here" /></dd>
</dl>

<div>
  <Link to='/task' className='btn btn-tasks-1'>Save</Link>
  <button className='btn btn-tasks-2 mx-5'>Reset</button>
</div>
</div>
    </div>
  )
}

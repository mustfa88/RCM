import React from 'react'

export default function AddClinte() {
  return (
    <>
      <div className='title p-3 fw-bold'>Add Clinte</div>
      <div className="row p-3 my-3">
        <div className="col-3 mx-3">
          <dl>
            <dt className='my-3 '>Company name</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>First name</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Last name</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Email</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Category</dt>
            <dd className='my-3 dd-c'>
              <select class="form-select w-100 input-c" aria-label="Default select example  ">
                <option selected className=''>Default</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </dd>

            <dt className='my-3 d-flex align-items-center justify-content-between'><span>Description & details</span>   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div></dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Tags</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 d-flex align-items-center justify-content-between'><span>App module</span>   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div></dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>




            <dt className='my-3 d-flex align-items-center justify-content-between'><span>More information</span>   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div></dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


          </dl>
        </div>
        <div className="col-3 mx-5">
          <dl>
          <dt className='my-3 d-flex align-items-center justify-content-between'><span>Billing address</span>   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div></dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Street</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>city</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>State</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>Zip code</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>Country</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>telephone</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>TAX/VAT Number</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>website</dt>
            <dd className='my-3 dd-c'>
              <select class="form-select  input-c w-100" aria-label="Default select example ">
                <option selected className=''>Default</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </dd>
          </dl>
        </div>
        <div className="col-3">
          <dl>
          <dt className='my-3 d-flex align-items-center justify-content-between'><span>Shipping Address</span>   <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div></dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

            <dt className='my-3 '>Street</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>city</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>State</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>Zip code</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>


            <dt className='my-3 '>Country</dt>
            <dd className='my-3 w-100'><input type="text" className='input-c' /></dd>

          </dl>
        </div>
      </div>
      <div className='p-3'>
        <button className='btn rounded btn-c-1'>Save</button>
        <button className='btn rounded btn-c-2' >Reset</button>
      </div>
    </>
  )
}

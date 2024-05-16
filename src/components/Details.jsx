import React from 'react'

export default function Details() {
  return (
    <div>
      <h2 className='fw-cold'>Paragraph</h2>
      <input type="text" class="form-control py-5 px-3 rounded mt-3 mb-5 input-da" placeholder="Type here" />
      <h2 className='fw-bold'>Tags</h2>
      <input type="text" class="form-control p-3 rounded mt-3 mb-5 input-da" placeholder="Type here" />
      <div>
        <button className='btn btn-deta'>Design</button>
        <button className='btn btn-deta mx-3'>Ui/ux</button>
      </div>
    </div>
  )
}

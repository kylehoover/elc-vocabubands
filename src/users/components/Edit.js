'use strict'

import React from 'react'

const Edit = ({ user, firstNameChange, lastNameChange, levelChange, netIDChange, typeChange, handleSubmit, cancel }) => (
  <div className='edit'>
    <div className='align-center'>
      <h1>
        Edit User Information
      </h1>
      <p className='margin-top-30'>
        Make changes in the form below, then submit.
      </p>
    </div>
    <form id='edit-user-form' method='post' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='firstName'>
          First Name
        </label>
        <input type='text' className='form-control' id='firstName' value={user.first_name} onChange={firstNameChange} required />
      </div>
      <div className='form-group'>
        <label htmlFor='lastName'>
          Last Name
        </label>
        <input type='text' className='form-control' id='lastName' value={user.last_name} onChange={lastNameChange} required />
      </div>
      <div className='form-group'>
        <label htmlFor='netID'>
          Net ID
        </label>
        <input type='text' className='form-control' id='netID' value={user.net_id} onChange={netIDChange} required />
      </div>
      <div className='form-group'>
        <label htmlFor='level'>
          Enrollment Level
        </label>
        <select className='form-control' id='level' value={user.level} onChange={levelChange}>
          <option value=''>--------</option>
          <option value='FP'>Foundations Prep</option>
          <option value='FA'>Foundations A</option>
          <option value='FB'>Foundations B</option>
          <option value='FC'>Foundations C</option>
          <option value='GAP'>Academic Prep</option>
          <option value='AA'>Academic A</option>
          <option value='AB'>Academic B</option>
          <option value='UP'>University Prep</option>
          <option value='none'>None</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='type'>
          User Type
        </label>
        <select className='form-control' id='type' value={user.type} onChange={typeChange} required>
          <option value='admin'>Admin</option>
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
        </select>
      </div>
      <input type='submit' className='btn btn-primary' value='Submit' />
      <button className='btn btn-danger butn-delete' type='button'>
        Delete
      </button>
      <button className='btn btn-default pull-right' type='button' onClick={cancel}>
        Cancel
      </button>
    </form>
  </div>
)

export default Edit

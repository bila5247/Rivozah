import React from 'react'

const createUser = () => {
  return (
    <>
       <div className="main-content">
        <div className="page-content">
        <div className="d-flex vh-100 justify-content-center align-items-center"
            style={{ backgroundColor: "#F9F9F6" }} >
                <div className="w-50 bg-white rounded p-3">
                    <form action="">
                        <h2>Add User</h2>
                        <div className="mb-2">
                            <label>Name</label>
                            <input type="text"  placeholder='Enter User Name' className='form-control'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default createUser

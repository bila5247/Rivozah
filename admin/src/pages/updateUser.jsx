import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';

const updateUser = () => {
  const {id} = useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/getUser'+id)
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
          <>
       <div className="main-content">
        <div className="page-content">
        <div className="d-flex vh-100 justify-content-center align-items-center"
            style={{ backgroundColor: "#F9F9F6" }} >
                <div className="w-50 bg-white rounded p-3">
                    <form action="">
                        <h2>Update User</h2>
                        <div className="mb-2">
                            <label>Name</label> 
                            <input type="text"  placeholder='Enter User Name' className='form-control'/>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="">Email</label>
                          <input type="email" placeholder='Enter User Email' className='form-control' />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="">Address</label>
                          <input type="text" placeholder='Enter User Address' className='form-control' />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="">Phone</label>
                          <input type="text" placeholder='Enter User Phone' className='form-control' />
                        </div>
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary">Update</button>
                          <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>

    </>
  )
}

export default updateUser

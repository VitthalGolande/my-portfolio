import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div>

<h1 className='xy' style={{marginBottom:"50px"}}><span className='sp' >Educational Details</span></h1>
      <table className="table">
       
  <thead>
    <tr>
      <th scope="col">Qualification</th>
      <th scope="col">unniversity</th>
      <th scope="col">Passing Year</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">SSC</th>
      <td>Maharashtra State Board, Pune</td>
      <td>2018</td>
      <td>80.40%</td>
    </tr>
    <tr>
      <th scope="row">HSC</th>
      <td>Maharashtra State Board, Pune</td>
      <td>2020</td>
      <td>64.77%</td>
    </tr>
    <tr>
      <th scope="row">BCA</th>
      <td>SPPU Pune</td>
      <td>2023</td>
      <td>CGPA-8.39</td>
    </tr>
  </tbody>
</table>
    </div>

  )
}

export default Education
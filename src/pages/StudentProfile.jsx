import React from 'react'
import {} from 'react'
import {useParams } from 'react-router'
const StudentProfile = () => {
    let {studentID} = useParams();

  return (
    <h1>StudentProfile  
        profile of ID: {studentID}
    </h1>
  )
}

export default StudentProfile
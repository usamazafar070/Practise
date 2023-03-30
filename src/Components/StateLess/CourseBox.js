import React from 'react'
import './CourseBox.scss'

const CourseBox = ({data}) => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-4 courseBox p-0">
          <img src={data.courseImage} width="100%"/>
          <div className="courseWrapper">
            <h2 className="courseTitle">{data.courseTitle}</h2>
            <p className="courseDetail">{data.courseDescription}</p>
            <h3 className="coursePrice">${data.price}</h3>
            <button className="courseBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
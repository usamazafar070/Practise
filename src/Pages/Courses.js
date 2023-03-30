import React from 'react';
import CourseBox from '../Components/StateLess/CourseBox';

// Courses Details
    const courseDatabase = [
      {
        id: 0,
        courseImage:
          "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        courseTitle: "JavaScript",
        courseDescription:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit primis enim quis pharetra, nostra nisi lacus ac mi potenti cursus urna.",
        price: 3500,
      },
      {
        id: 1,
        courseImage:
          "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        courseTitle: "Bootstrap",
        courseDescription:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit primis enim quis pharetra, nostra nisi lacus ac mi potenti cursus urna.",
        price: 500,
      },
      {
        id: 2,
        courseImage:
          "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        courseTitle: "React",
        courseDescription:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit primis enim quis pharetra, nostra nisi lacus ac mi potenti cursus urna.",
        price: 2800,
      },
    ];

const Courses = () => {

    // const onSelected = (index) => {
    //     console.log('selected id', index)
    //     debugger
    // }

    return (
      <div>
        {courseDatabase.map((item) => (
          <CourseBox data={item} />
        ))}
      </div>
    );
}

export default Courses;
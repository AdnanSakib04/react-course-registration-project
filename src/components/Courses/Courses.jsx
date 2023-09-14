import Course from "../Course/Course";

const Courses = ({courses}) => {
    return (
        <div>
            <h1>Course: {courses.length}</h1>
            {
                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;
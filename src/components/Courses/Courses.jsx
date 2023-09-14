import Course from "../Course/Course";

const Courses = ({courses}) => {
    return (
        <div>
            <h1>Course: {courses.length}</h1>
            <div className="grid grid-cols-3 gap-y-5">

            
            {
                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;
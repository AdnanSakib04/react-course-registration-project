import Course from "../Course/Course";

const Courses = ({courses, handleAddCourse}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-y-5">

            
            {
                courses.map((course, idx) => <Course key={idx} course={course} handleAddCourse={handleAddCourse}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;
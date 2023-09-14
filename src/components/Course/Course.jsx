import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {id, image, course_name, credit, price, details} = course;
    console.log('---', course);
    return (
        <div className='w-[312px]'>
            <img src={image} alt="" />
            <h1>{course_name}</h1>
            <p>{details}</p>
            <div>
                <span>Price: {price}</span>
                <span>Credit: {credit}hr</span>
                <button className='btn rounded-lg text-white w-[280px] h-[40px] bg-[#2F80ED]'>Select</button>
            </div>
            
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
}
export default Course;
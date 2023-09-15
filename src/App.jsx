

import { useEffect } from 'react';
import './App.css'
import Cards from './components/Courses/Courses'
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  const creditLimit = 20;
  useEffect(() => {
    fetch("./course-data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  const handleAddCourse = (course) => {
    const isCourseExist = selectedCourse.find((item) => item.id == course.id);
    let currentCoursePrice = course?.price;
    let totalCourseCost = currentCoursePrice;
    let currentCourseCredit = course?.credit;
    let totalCourseCredit = currentCourseCredit;
    if (isCourseExist) {
      return  toast.error("This course is already added to cart",{
        position:"top-center"
      });
    } else {
      
      selectedCourse.forEach((item) => {
        totalCourseCost = totalCourseCost + item.price;
        totalCourseCredit = totalCourseCredit + item.credit;
        
       
      });
      const remainingCredit = creditLimit - totalCourseCredit;
      
      if (remainingCredit < 0) {
        return  toast.error("You cannot exceed the maximum credit limit which is 20",{
          position:"top-center"
        });
      } else {
        setSelectedCourse([...selectedCourse, course]);
        setTotalCost(totalCourseCost);
        setTotalCredit(totalCourseCredit);
        setRemainingHour(remainingCredit);
      }
    }
  };


  return (
    <>
     <div className='bg-[#F3F3F3] pb-16'>

     
      <h1 className=' text-center text-3xl font-bold pt-12 mb-8'>Course Registration</h1>
      <div className='flex flex-col-reverse items-center justify-items-center md:items-start justify-center md:flex-row max-w-[420px] md:max-w-[1400px] mx-auto'>
      <div className=' lg:w-3/4'>
      <Cards courses={courses} handleAddCourse={handleAddCourse}></Cards>
      </div>

      <div className='  lg:w-1/4'>
      <Cart selectedCourse={selectedCourse} totalCost={totalCost} totalCredit={totalCredit} remainingHour={remainingHour}></Cart>


      </div>
      </div>  
      <ToastContainer />
      </div>
    </>
  )
}

export default App

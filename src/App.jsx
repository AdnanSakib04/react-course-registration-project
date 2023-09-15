

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
  
  useEffect(() => {
    fetch("./course-data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  const handleAddCourse = (course) => {
    const isCourseExist = selectedCourse.find((item) => item.id == course.id);

    if (isCourseExist) {
      return  toast.error("This course is already added to cart",{
        position:"top-center"
      });
    } else {
      setSelectedCourse([...selectedCourse, course]);
    }
  };


  return (
    <>
     <div className='bg-[#F3F3F3]'>

     
      <h1 className=' text-center text-3xl font-bold pt-12'>Course Registration</h1>
      <div className='flex max-w-[1400px] mx-auto'>
      <div className='w-3/4'>
      <Cards courses={courses} handleAddCourse={handleAddCourse}></Cards>
      </div>

      <div className='w-1/4'>
      <Cart selectedCourse={selectedCourse}></Cart>


      </div>
      </div>  
      <ToastContainer />
      </div>
    </>
  )
}

export default App

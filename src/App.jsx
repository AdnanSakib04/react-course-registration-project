

import { useEffect } from 'react';
import './App.css'
import Cards from './components/Courses/Courses'
import { useState } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course-data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>

     
      <h1 className=' text-center text-3xl font-bold mt-12'>Course Registration</h1>
      <div className=' max-w-[1400px] mx-auto'>
      <div className='w-3/4'>
      <Cards courses={courses}></Cards>
      </div>
      </div>
      <div className='w-1/4'>



      </div>
      
      
      
    </>
  )
}

export default App

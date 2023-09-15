
// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse}) => {
    return (
        <div className="w-[312px]  bg-white rounded-lg mt-6 p-5 space-y-3">
            <h1 className="text-[#2F80ED] font-bold text-xl">Credit Hour Remaining 7 hr</h1>

            <hr />
            <h1 className="font-bold text-xl">Course Name</h1>
            <ol className="list-decimal pl-5">
            {selectedCourse.map((course) => (
        <li className="text-[#1C1B1B99]" key={course.id}>{course.course_name}</li>
      ))}
            </ol>
         
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium">Total Credit Hour : 13</h1>
            <hr />
            <h1 className="text-[#1C1B1BCC] font-semibold">Total Price : 48000 USD</h1>            
        </div>
    );
};

export default Cart;
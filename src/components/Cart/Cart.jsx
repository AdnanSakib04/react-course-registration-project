
// eslint-disable-next-line react/prop-types

const Cart = ({selectedCourse, totalCost, totalCredit, remainingHour}) => {
    return (
        <div className="w-[312px]  bg-white rounded-lg  p-5 space-y-3">
            <h1 className="text-[#2F80ED] font-bold text-[18px]">Credit Hour Remaining {remainingHour} hr</h1>

            <hr />
            <h1 className="font-bold text-xl">Course Name</h1>
            <ol className="list-decimal pl-5">
            {selectedCourse.map((course) => (
        <li className="text-[#1C1B1B99]" key={course.id}>{course.course_name}</li>
      ))}
            </ol>
         
            <hr />
            <h1 className="text-[#1C1B1BCC] font-medium">Total Credit Hour : {totalCredit}</h1>
            <hr />
            <h1 className="text-[#1C1B1BCC] font-semibold">Total Price : {totalCost} USD</h1>            
        </div>
    );
};

export default Cart;
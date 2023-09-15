**Q/A 1. Project features are given below:** 
- **Course Selection and Cart Option:** Users can select any course they like and it will be added to cart by a simple click of a button. If an user selects a course that is already in the cart, then it will show an error toast saying the course is already in the cart.
- **Credit Checking:** The application calculates the total credits of the courses added by the user. If the total credit is greater than 20 than user cannot add anymore courses, and still if user wants to add any course, the application will show error toast telling that user has reached the credit limit. 
- **Remaining Credit Hour Calculation:** A user can add up to 20 credit hours. User will be shown how much credit he has left. For every course added to cart, the application will subtract the total credit hours from the initial remaining credit hours which is 20. This remaining value cannot be below 0 and above 20.


<br><br>

**Q/A 2. How I managed the state in my assignment project:**
<br>
I used the useState hook to construct the state variables courses, selectedCourse, totalCost, totalCredit, and remainingHour. These variables are part of the component's local state. The initial values of totalCost and totalCredit is set to 0 by the functions setTotalCost and setTotalCredit respectively and the initial value of remainingHour is set to 20 by the function setRemainingHour. The initial values of courses and selectedCourse are empty array.  When the component is mounted, useEffect is used to retrieve information from the course-data JSON file. setCourses is used to store the information in the courses state variable. This makes sure that the course data is added to the courses state at the time the component is first shown. When a course is selected by clicking the Select button, the function handleAddCourse is invoked. It accepts an argument that is a course object. isCourseExist determines whether the chosen course is already present in the selectedCourse state array. If it does, the function is terminated and an error toast is displayed. The function determines the total cost and total credit of the selected courses, accounting for the newly picked course, if it is not already in the list. Additionally, based on the credit limit, it determines the remaining credit hours. It displays an error toast and ends the function if the remaining credit hours are less than 0 which indicates that the credit limit is exceeded. If everything checks out, the totalCost, totalCredit, and remainingHour states are updated with the new values using the functions(setTotalCost, setTotalCredit, setRemainingHour) that change the state values and the new course is added to the selectedCourse state array using the function setSelectedCourse. This is how I managed the states, to update total cost, total credit, remaining credit hour and course list in cart.

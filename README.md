# Week 7: Train Scheduler App Using Firebase
- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 10/19/2018
- **Built With** HTML, CSS, Bootstrap, Javascript, JQuery, Event Listeners, Moment.js, Firebase


## Description & Requirements
---


In this assignment I created a train schedule application that incorporates Firebase to host arrival and departure data.  It retrieves and manipulates this information with Moment.js. The website then provides arrival times and how many minutes remain until the next train will arrive at the  station based on the information provided by the user.



## How it Works
---

  ![train homework](/assets/images/screen.png)

1. The user will submit information into the dashboard 
    
    * Train Name
    * Destination 
    * First Train Time -- in military time
    * Frequency -- in minutes

    ![train homework](/assets/images/enterData.png)


2. The code will calculate when the next train will arrive relative to the current time. It will then store these values into the Firebase database and make them available for any user viewing the table.


    *DOM DISPLAY*

    ![DOM display](/assets/images/calculate.png)


    *CONSOLE LOG DISPLAY*

    ![Console display](/assets/images/be-calcs.png)




   
        
## Notes
---
This assignment was pretty straight forward. I enjoyed working on it and was excited to try out some new CSS methods as well as learn moment.js. It had a bug that caused it to display the current time in both the 'current time' and 'arrival time' fields which stumped me at the time. However, I revisited it in week 18 of the class and was pleasantly suprised at how easily I was able to debug it. Looks like the classes worked Mark & Sue!











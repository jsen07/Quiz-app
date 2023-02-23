# Quiz-ap

In this project we were given the task to create a Quiz application.  The quiz application would have a menu where when the user clicks 'start' a quiz is displayed to the user, the quiz requires the user to select a multiple choice question whilst a countdown timer is running, when the countdown timer reaches 0 th3e quiz will end, if the player selects an incorrect answer then they will have their points deducted along with a time penality of minus seconds, however if the player sleects the right answer they will gain points. After the user has completed the quiz they are able to save their score into a localstorage and view previous scores to see where they rank in the highscore leaderboard. 

When creating the quiz application I have used HTML, CSS and Javascript along with using JSON and the localstorage to store the player's name and their score. I have struggled in using the localStorage to create the highscore leaderboard as it was my first time working with localStorage, and had tried various ways to implement this. The best method I have found in order to successfully implement a highscore leaderboard is to to use objects to store the player name and their score, however in order to store the object the into the local storage i had to convert the object into a string in which i have had to use JSON stringify and JSON parse in order to do this.
To run the Quiz application simply hit the start button displayed on the home screen, additionlly the user can view previous saved highscores by clicking on the highscores button. When the quiz starts the player can select one of four answers, if the user selects the correct answer they will gain 10 points, if they select the incorrect answer their points will be deducted by 5 points along with a time penality of 5 seconds. When there are no questions left to answer or if the timer runs out before the quiz is completed then then the user is able to save their score into the highscores. The highscores however will only display the top four highest scores.


LINK TO THE APPLICATION: https://jsen07.github.io/Quiz-app/index.html
![image](https://user-images.githubusercontent.com/56829664/221054101-e2503d82-fd19-45e7-92aa-ca09c12cfbe5.png)

![image](https://user-images.githubusercontent.com/56829664/221054213-d3832887-36c6-451b-b69e-6106273b9b17.png)

![image](https://user-images.githubusercontent.com/56829664/221054159-57ab6011-b8e6-4613-af00-8f512e260de3.png)

![image](https://user-images.githubusercontent.com/56829664/221054254-3ad54e31-3c25-4444-8653-eb67b9c29945.png)

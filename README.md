Write a brief description of the application you are imagining. It should walk though who the application is for, what it does, and a few features the user would interact with. 


I am an avid reader. Sometimes it is hard for me to find what to read next based on reviews online. Reddit is a good source but does not have anything well organized.
Good Reads is also a good source but is very overwhelming and not quite as specific as what I’m looking for. That’s why I have designed an app catering to the needs of book lovers. 
The idea is to get a grasp on the user's personality, desires, and how they think about the world to recommend books in a very personalized and individual way. 
The final product would be a hybrid of personality type daily tests, and a continuous, ever evolving list of book recommendations. 
Each day, the user would open the app and answer a set of questions that range from 1 question to 5. 
The user would then get a list of recommendations, anywhere from 1-5 books. 
The user then has a choice to “star” whatever books spark their attention and keep it in a To Read log. 
The longer the user uses the app, the more the app gets to really know the user, and the book recommendations become really accurate and specific over time.

For each module of the course, write a 1-2 sentence description of how you could use that knowledge to build an application. You should include at least one skill from all of the following:

 ○ Organization and Time Management
This design took place over a series of sitting down and writing the script. When frustration sets in, I take a break and come back at a later date.

 ○ Values, Data Types, and Operations 
There are many different values in the form of strings to describe the path the user will take depending on their preferences. Each variable includes camelCase and are very descriptive that clearly convey purpose. 
A boolean is used to confirm user choices as true before inputting responses in an array. Lastly, readline-sync is used to prompt user input.

○ The Growth Mindset
As I developed this idea, I was open to changing certain aspects. As a result, the idea started simple but became more thought out and complex. 
I really wanted to emphasize the idea of this being a real world application and something I would not only use but that it would affect my life positively.

 ○ Stringing Characters Together
I used .toLowerCase to convert all answers to lower case so that “Fantasy” does not trigger something wrong when “fantasy” is correct. 
I used a template literal to summarize the users preferences in a clear and concise way, rather than using + a lot and creating something cumbersome and clunky. 
I used .length in my loop to be able to loop through the array and stop when i< the array length.

○ Control Structures and Logic 
I wrote a conditional using ||, indicated that if  any of the statements are true to accept the user input and move onto the next question. 
I created another conditional where whatever the answer to the first question equals (fantasy, non-fiction, suspense) then the output will be whatever is in that declared variable’s array.
 I have nested a conditional inside a while loop saying if this loop is true, exit the loop. 
I have nested a loop in a conditional saying if your answer is (genre), loop through the array of (genre) books.

○ Working with Loops 
I use a “for” loop to iterate through an array. I used the basic format given in the lesson to do this: for (let i = 0; i < array.length; i++)
    console.log(array[i]);
I used the while (true) loop from what I learned in Working with Loops Lesson 4 Password Validator. 
I wanted to continuously prompt the user for matching input or move onto the next question. This was very similar to the password validator where you could not have your password accepted until it fell in the set conditionals.

○ Building Arrays 
I used an array to store the book preferences by genre.
I created an empty array called answers with the idea of filling that in based on user input to come.

○ Using Arrays
I accessed each array using bracket notation with variables as indices. I used .push to variables into a previously empty array.

# Learning-Management-System
# CLASS
A `User` class was created as a parent class to both stdent and tutor as they share similar properties save a few differences, it has properties consisting of name, password and email with also a constructor initializing the said properties.
The `Tutor` and `Student` classes extend the parent class `User`, a core principle of Object Oriented Programming called **Inheritance**, which means the properties and methods of the `User` class are inherited by the subclasses `Tutor` and `Student` having all its functionalities.

## TUTOR CLASS AND ITS METHODS.
The `createCourse()` method allows the tutor to create and upload a course to their catalog, it takes the course parameter and adds it to the courses array and then logs a message.
The `updateCourse()` method on the other hand allows the tutor to update existing courses taking the **courseId** and **newContent** parameters, it uses the `findCourse` method updates the content if the course exists.
The `findCourse()` method searches for courses within the course array.

## STUDENT CLASS AND ITS METHODS.
The `addToCart()` method takes in the course parameter and pushes it to the cart array and logs a message afterwards.
The `removeFromCart()` method first finds the index of the said course in the cart array and the executes a conditional statement, if the index is not -1, meaning if it is in the cart then the `splice()` method is executed and removes it from the cart and logs a message. Else an error is logged.
The `addActiveCoupon()` method adds a coupon code to the student, or rather gifts a couon code to the student.
The `Checkout()` method when fired, executes a conditional statement that takes the activeCoupon as a parameter, if available, it logs a message and the fires a loop that calculates the discounted price in this case, a 100% discount and logs a message that says a coupon was used. Else it checksout with the normal price and no discount. It pushes the course to the subscription array and removes it from the cart array.
The `activeSubscription()` method shows the courses currently in the subscription array.

## COURSE CLASS AND ITS PARAMETERS
The `updateCourse()` method takes in the **newContent** parameter and updates the course by assigning the contents to the **newContent** used in the `updateCourse()` method.

## COUPON CLASS AND ITS PARAMETER
It has properties **code** and **discountPercentage** used earlier in the code for `activeCoupon()` method.

## POLYMORPHISM
Since both `Tutor` and `Student` classes are subclasses of the `User` class, they can be treated as User objects. They can be passed a functions that invoke methods defined in the `User` class.

## ABSTRACTION
The `User` class defines the essential attributes of a user such as **name**, **email**, **password**, `logIn()`, `updateProfile()`, `verifyPassword()`. It hides the internal implementation and exposes only the necessary methods for interaction with a user object.

## ENCAPSULATION
The `User` class encapsulates the user's details as seen in the parameters it takes. These properties are manipulated through public methods like `logIn()`, `updateProfile()` and `verifyPassword()`. This makes sure the internal details of a user a protected and necessary interactions are done through controlled methods.
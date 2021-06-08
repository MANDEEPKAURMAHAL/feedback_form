# Feedback_form
This code is owned by mandeepkaur1208@gmail.com


This code snippet is used for Feedback Form.
Following are the features handled as part of this code:
   1. A single frontend web page/html that takes feedback from user.
      a. This will consist of 2 text input fields: Username and feedback.
      b. A submit button will post input of above 2 text field’s information to the node server.
   2. Listing of user feedbacks on frontend.
      a. A feedback listing will be displayed from the node server.
      b. This listing shall be displayed below the above input form.
      c. A list item shall contain the following: Username, Feedback & created timestamp.
   3. Create a local node server.
      a. This will be created on the same local machine.
      b. The incoming user feedbacks will be stored on this server.
      c. Also the server shall emit all the feedbacks to the frontend listing page.
      d. The incoming feedback should be logged in server console.
    
  Technology/Language/PackagesDependencies
   Node.js v10.16.3
   "body-parser": "^1.19.0",
   "ejs": "^3.1.6",
   "express": "^4.17.1",
   "nodemon": "^2.0.7"

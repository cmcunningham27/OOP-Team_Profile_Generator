# OOP-Team_Profile_Generator
![License: MIT License](https://img.shields.io/badge/License-MIT-Red.svg)
---
## Descriptions
---
[GitHub Repository URL](https://github/com/cmcunningham27/OOP-Team_Profile_Generator)

My motivation for this project was to create an app that asks the User questions about their team members/employees and creates cards for each member on a page. I built this project to allow teams the ability to see everyone's information and contact. This solves the problem of losing the sheet that has all your team member's information because it will all be accessible via the internet. This project stands out because it is dynamic for large teams.
## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Complications](#complications)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)
## Installation
---
When installing this project, the user must: 

1. Clone the repository in GitBash, using "git clone [link]". 
2. Type "code ." into GitBash. 
3. Once it is open in VS Code, run "npm i" in termial to install npm. 
4. Then type npm index.js in the terminal. This will prompt you with questions. 
5. Answer all of the questions accordingly. When you choose to "Finish building my team" all your team members' information that you answered will have gone into the new index.html file in the dist folder 
6. Open up your index.html in a browser and you will now see all the cards have been rendered to the page.
## Usage
---
[Demonstration Video](https://drive.google.com/file/d/19VBdHrxMD0a_RKUqwIJbZlU4ftq8W-eU/view)
## License
---
This project is licensed under the MIT License license.
## Complications
---
I ran into complications when I realized that I hadn't connected the user's input with the class files. I was using the template html helpers, but I was not able to read all of the files each time a new employee was created. It only did the manager and one other employee. To solve this I created 3 separate functions that took the users input as parameters in an instance of the class they chose and then placed them in a template literal of html code. That then was pushed into the teamMembersArray each time, until the user chose to finish building their team. 

Figuring out where to place each of the whatNext function calls was another complication, but was easily solved. And, finding the way to validate an email correctly took a bit of time. I wanted to make sure it expected a ."something" at the end. Now everything works great. 
## Features
---
For larger teams, create folders that the cards can be rendered into (i.e. Engineer folder, Intern folder).
## Tests
---
To run the tests for the classes in the lib folder, open the command line and enter "npm run test." Here you will find that all 15 tests have passed. To see the tests, go into the "_tests_" folder to find all 4 files associated with all 4 class files.
## Questions
---
[GitHub Profile](https://github.com/cmcunningham27)

E-mail: sttepstutoring@yahoo.com

Please do not hesitate to contact me with any questions or concerns you may have at the e-mail provided.
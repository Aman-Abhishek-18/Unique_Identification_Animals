# Unique Identification Number for Pets

## The idea is to create unique identification number for Pets, so that their owners can get access to their medical history, previous vaccination date, about upcoming vaccinations, and other personal informations of pets

## New Members can create new profile and get the Unique Identification Number

## Existing members can update their old data


Prerequisites:
1. Download and Install Visual Studio Code
2. Download and Install NodeJS
3. Download and Install Microsoft SQL Server


Server-Side set-up:
1. Check environment variable path for NodeJS
2. Check on CMD if NodeJS is installed properly or not (run command node -v)
3. Open VS Code and run command npm init in the terminal, two important files are generated in your project directory: package.json and package-lock.json
4. Set-up MS SQL Server, create user or use default one "sa", use authentication as SQL Server Authentication
   ![Screenshot 2024-06-20 154609](https://github.com/Aman-Abhishek-18/Unique_Identification_Animals/assets/70442464/11803d39-151c-4f75-972c-f0326eaef304)
   

6. Create Database and use DDL DML for schema part (refer database table.png)
    ![database table](https://github.com/Aman-Abhishek-18/Unique_Identification_Animals/assets/70442464/a0f69dd6-a322-4f9f-9f9e-c74880d64a08)
   

8. Open terminal in VS Code and run command npm install mssql --save
9. Create new javascript file (file_name.js) and configure connection from database (refer server.js)
10. Write server name, user, password, database, and other authetication stuffs properly
11. Once server is up and running and js code is completed, run command in the terminal node file_name.js and check the result in terminal
   ![Screenshot 2024-06-20 152157](https://github.com/Aman-Abhishek-18/Unique_Identification_Animals/assets/70442464/42b7f3be-3248-414d-af71-18f79bd7501a)



User Interface:
1. Create html and css file with the extension .html and .css respectively to design the screen
2. Create javascript file with extension .js and use JS Methods for the applicable functionality of the page
3. Use <link> and <script> for connecting CSS and JAVASCRIPT file to HTML respectively (refer AnimalIdentificationPage.html)

-> If anyone faces any issues on the instructions given above, feel free to reach out me (amanabhishek922@gmail.com)
-> Feel free to add enhacements on the functionalities

## Website Preview
![Home Page](https://github.com/Aman-Abhishek-18/Unique_Identification_Animals/assets/70442464/3b42b7f8-b41d-4943-8d3d-858f3b4f9daa)





(Unique Identification Number length must be 12)


![Screenshot 2024-06-21 205824](https://github.com/Aman-Abhishek-18/Unique_Identification_Animals/assets/70442464/b77053f9-b937-41fa-bf1d-4f5ee9e1a341)








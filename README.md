# Unique Identification Number for Pets

## The idea is to create unique identification number for Pets, so that their owners can get access to their medical history, previous vaccination date, about upcoming vaccinations, and other personal informations of pets

## New Members can create new profile and get the Unique Identification Number

## Existing members can update their old data


Prerequisites:
1. Download and Install Visual Studio Code
2. Download and Install NodeJS
3. Download and Install Microsoft SQL Server

After set-up completed:
1. Check environment variable path for NodeJS
2. Check on CMD if NodeJS is installed properly or not (run command node -v)
3. Open VS Code and run command npm init in the terminal, two important files are generated in your project directory: package.json and package-lock.json
4. Set-up MS SQL Server, create user or use default one "sa", use authentication as SQL Server Authentication
5. Create Database and use DDL DML for schema part (refer database table.png)
6. Open terminal in VS Code and run command npm install mssql --save
7. Create new javascript file (file_name.js) and configure connection from database (refer server.js)
8. Write server name, user, password, database, and other authetication stuffs properly
9. Once server is up and running and js code is completed, run command in the terminal node file_name.js and check the result in terminal (refer server data.png)   






const sql = require("mssql");
var config = {
    server: "AMAN\\SQLEXPRESS", 
    database: "FirstDB",
    user: "sa",
    password: "test123",
    options: {
        trustedConnection: false, // Use false if using username and password
        encrypt: false, // Use false if not connecting to Azure
        trustServerCertificate: true, // True for self-signed certificates
        connectTimeout: 30000 
    }
};


sql.connect(config, function(err) {
    if (err) {
        console.log("Connection error: ", err);
        return;
    }


    const request = new sql.Request();
    request.query("SELECT * FROM Animal_Identification where identificationNumber='123412341234'", function(err, result) {
        if (err) console.log("Query error: ", err);
        else {
            const myJson = result.recordset;
            console.log(myJson); // JSON data

            const myJsonStr = JSON.stringify(myJson);
            console.log(myJsonStr); // JSON string

            const jsonArray = JSON.parse(myJsonStr); //Parse the JSON string into a JavaScript object
            const firstObject = jsonArray[0]; //Access the first object in the array
            const petName = firstObject.petName;
            const breedName = firstObject.breedName;
            const dob = firstObject.dob;
            const previousVaccinationDate = firstObject.previousVaccinationDate;
            const diseaseHistory = firstObject.diseaseHistory;
            const ownerName = firstObject.ownerName;
            const weight = firstObject.weight;
            const address = firstObject.address;
            console.log('Pet Name:', petName);
            console.log('Date of Birth:', dob);
            console.log('Breed Name:', breedName);    
        }
    });
});



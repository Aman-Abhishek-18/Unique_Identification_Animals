const sql = require("mssql");
var config = {
    server: "AMANABHISHEK\\SQLEXPRESS", 
    database: "FirstDB",
    user: "sa",
    password: "check1234",
    options: {
        trustedConnection: false, 
        encrypt: false, 
        trustServerCertificate: true, 
        connectTimeout: 30000 
    }
};

sql.connect(config, function(err) {
    if (err) {
        console.log("Connection error: ", err);
        return;
    }


    const request = new sql.Request();
    request.query("SELECT * FROM Animal_Identification", function(err, result) {
        if (err) console.log("Query error: ", err);
        else {
            const myJson = result.recordset;
            console.log(myJson); // JSON data
        }
    });
});





exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    }; 
    try{
       const sql = require("mysql1");
       //const https = require('https')
    } catch(err){
        const response = {
            statusCode: 500,
            body: JSON.stringify(err),
        }; 
    }
    
    var config = {
        user: 'deepakkhetwal',
        password: 'admin!123',
        server: 'onetskills.database.windows.net', 
        database: 'onetskillsextractor' ,
        options: {
            encrypt: true  // use this for Azure database encryption
          }
    };
    /*sql.connect(config, function (err) {
        console.error(err);
        /*if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from ONETSKILLS', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
           //return recordset; 
           const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
            };
            
        }); 
        
    });  */
   return response;
/*try{
    
    
   
    }
    catch(err){
         const response = {
            statusCode: 200,
            body: JSON.stringify(err),
            };
    } 
    return response; */
    
};
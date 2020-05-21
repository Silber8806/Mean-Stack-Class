// How to run tests?
// Run the server locally on port: http://127.0.0.1:8080 or sub localhost if you like.
// Open this as a file in your browser.  Open the Browser's Console window.
// Click the test apis button, it will run all the tests in the browser.
// If everything runs well, you should be able to see it pass all 5 tests.
// Almost all credit goes to the professor for giving us such a great client
// file to use.  I copied his async callAPI function and modified the code to
// run with my software.


(function(){

   var baseURL = 'http://localhost:8080';
   var baseURL = 'http://142.93.2.191:8088';

   function testAPIs(){
    console.log("TEST 1 of 5: Listing Tasks!")
    callAPI('GET', '/api/tasks', null, null)
      .then((list)=>{
        console.log("Passed Test - List...")
        console.log(list);
        console.log("Done!");

        let data = new FormData()

        let name_field = document.querySelector('#name-field').value;
        let description_field = document.querySelector('#description-field').value;
        let date_field = document.querySelector('#date-field').value;

        data = {
          "name" : name_field,
          "description": description_field,
          "date": date_field
        }

        console.log("TEST 2 of 5: Creating Task!");
        callAPI('POST', '/api/tasks', null, data)
          .then((task)=>{
            console.log("Passed Test - Create");
            console.log(task);
            console.log("Done!");

            let task_id = task._id;

            console.log("TEST 3 of 5: Find Task!");
            callAPI('GET','/api/tasks/'+task_id, null, null)
              .then((found_task)=>{
                console.log("Passed Test - Find Task");
                console.log(found_task);
                console.log("Done!");

                if (task_id == found_task._id) {
                  console.log("found and created task are equal");
                  console.log("passed secondary test...")
                }

                console.log("TEST 4 of 5: Update Task!");
                data.name += ' updated by test';
                console.log(data.name);
                callAPI('PUT','/api/tasks/'+ task_id,null,data)
                  .then((updated_task)=>{
                    console.log("Passed Test - Update Task");
                    console.log(updated_task);
                    console.log("Done!");

                    callAPI('DELETE','/api/tasks/'+task_id,null,null)
                      .then((deleted_task)=>{
                          console.log("TEST 5 of 5: Delete Task!");
                          console.log(deleted_task);
                          console.log("Done!");
                          console.log("COMPLETED ALL 5 TESTS!");
                      });
                  });
              });
          });
      })
      .catch((err)=>{
        console.error("error found:")
        console.error(err);
      });
}

  async function callAPI(method, uri, params, body){
    jsonMimeType = {
      'Content-type':'application/json'
    }
    try{
      var response = await fetch(baseURL + uri, {
        method: method, 
        ...(method=='POST' ? {headers: jsonMimeType, body:JSON.stringify(body)} : {}),
        ...(method=='PUT' ?  {headers: jsonMimeType, body:JSON.stringify(body)} : {})
      });
      console.log(response);
      console.log(body);
      return response.json(); 
    }catch(err){
      console.error(err);
      console.log(response);
      return "{'status':'error'}";
    }
  }

  document.querySelector('#test').addEventListener("click", ()=>{
    event.preventDefault();
    var name_field = document.querySelector('#name-field');
    var description_field = document.querySelector('#description-field');
    var date_field = document.querySelector('#date-field');
    console.log("Starting Tests for API!");
    console.log(`name field: ${name_field.value}`);
    console.log(`description field: ${description_field.value}`);
    console.log(`date field: ${date_field.value}`);
    testAPIs();
  });
})();
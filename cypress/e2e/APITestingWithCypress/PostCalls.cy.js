describe("API Testing", () => {

    it("Approach 1 - Hard coded JSON object", () => {
      const requestBody = {
        tourist_name: "Mike",
        tourist_email: "mike34@gmail.com", // fixed typo: "maike34"
        tourist_location: "Bangladesh"
      };
  
      cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/Tourist/Add",

        body: requestBody,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.tourist_name).to.eq("Mike");
        expect(response.body.tourist_email).to.eq("mike34@gmail.com");
        expect(response.body.tourist_location).to.eq("Bangladesh");
      });
  
    });
  
  });
  
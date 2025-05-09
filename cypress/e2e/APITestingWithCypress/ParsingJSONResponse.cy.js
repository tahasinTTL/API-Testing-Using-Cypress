describe('Fake Store API - Parse JSON Response', () => {
    it('Fetches products and logs title and price', () => {
      cy.request('https://fakestoreapi.com/products').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
  
        response.body.forEach((product) => {
          cy.log(`Title: ${product.title}`);
          cy.log(`Price: $${product.price}`);
        });
  
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  });
  
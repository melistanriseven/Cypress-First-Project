/// <reference types="Cypress" />
describe("My First Test:Amazon", () => {
    it("first test", () => {
        //go to www.amazon.com
      cy.visit("www.amazon.com");
        //click search-box and type 'phone' + presss the enter
      cy.get("#twotabsearchtextbox").type("phone{enter}");
        //check that 'phone' is searched
      cy.get(".a-color-state").should('contain', '"phone"');
        //click third result
      cy.get("a.a-link-normal.s-no-outline").eq(2).click();
        //check the 'back to results' text
      cy.get("#breadcrumb-back-link").should('contain', 'Back to results');
  
    });
});
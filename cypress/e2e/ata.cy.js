/// <reference types="cypress" />

it("authentification ATA practice", () => {
  cy.visit("https://practice.automationtesteracademy.com/");
  cy.get('[data-test="username-login"]')
    .type("known_user")
    .should("have.value", "known_user");
  cy.get('[data-testid="nom-utilisateur"]').should(
    "have.text",
    "Nom d'utilisateur"
  );

  cy.get('[data-test="password-login"]')
    .type("cypress-geek")
    .should("have.value", "cypress-geek");
  cy.get('[data-test="submit-login"]').click();

  cy.url().should("include", "/home");
  // cy.get("img").should("have.length", 8);
  cy.get(".grid-container img").should("have.length", 8);
  cy.get(".grid-container").find("img").should("have.length", 8);
});

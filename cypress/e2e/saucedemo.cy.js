/// <reference types="cypress" />

describe("template spec", () => {
  it("Authentification nominale", () => {
    // Etape 1 : Aller à la page de connexion
    // --> Une page de connexion s'affiche
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").should("be.visible");
    // Etape 2 : Mettre un username : standard_user
    // --> Le champ est rempli avec la valeur standard_user

    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    // Etape 3 : Mettre un password : secret_sauce
    // --> Le champ est rempli avec la valeur secret_sauce
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    // Etape 4 : Cliquer sur login
    // --> Redirection vers la page de produits

    cy.get("#login-button").click();
    cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should(
      "be.visible"
    );
    cy.url().should("equal", "https://www.saucedemo.com/inventory.html");
    cy.url().should("contain", "/inventory.html");
    cy.url().should("include", "/inventory.html");
  });

  it("Authentification avec mot de passe eronné", () => {
    // Etape 1 : Aller à la page de connexion
    // --> Une page de connexion s'affiche
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").should("be.visible");
    // Etape 2 : Mettre un username : standard_user
    // --> Le champ est rempli avec la valeur standard_user

    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    // Etape 3 : Mettre un password : secret_sauce
    // --> Le champ est rempli avec la valeur secret_sauce
    cy.get('[data-test="password"]')
      .type("secret")
      .should("have.value", "secret");

    // Etape 4 : Cliquer sur login
    // --> Rester sur la page, message d'erreur apparait avec le contenu
    // :  Username and password do not match

    cy.get("#login-button").click();
    cy.url().should("equal", "https://www.saucedemo.com/");
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain.text", "Username and password do not match ");
  });
});

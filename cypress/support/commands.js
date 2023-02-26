// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
  
    cy.get("#user_login").clear();
    cy.get("#user_login").type(username);
  
    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type(password);
  
    cy.get("#user_remember_me").type("checkbox");
  
    cy.get('input[name="submit"]').click();
  });
  
 Cypress.Commands.add('feedback', (name, email, subject, comment) => {
    cy.clearCookies();
    cy.clearLocalStorage();
  
    cy.get("#name").clear();
    cy.get("#name").type(name);

    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type(email);

    cy.get("#subject").clear();
    cy.get("#subject").type(subject);

    cy.get("#comment").clear();
    cy.get("#comment").type(comment);

  })
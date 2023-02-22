/// <reference types="cypress" />

describe('config', () => {
    it('tes', () => {
    cy.visit('https://example.cypress.io/todo')
    Cypress.config('pageLoadTimeout') // => 60000
    })
})

/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').should('contain.text','Search Results:')
    })
    it('Should check for correct element on the page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online', {timeout: 10000})
        cy.get('h2').should('have.text','Search Results:');
        cy.get('a').should('be.visible')
    })

    it('clicking Zero - Free Access to Online Banking navigate to a new url', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online', {timeout: 10000})
        cy.get('a').contains('Zero - Free Access to Online Banking').click();
    })
   
})
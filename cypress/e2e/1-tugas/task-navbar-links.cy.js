/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking content', () =>{
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Should display feedback content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
       
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('include.text', 'Feedback')
    })

    it('Should display homepage content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
       
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
       
    })
})
/// <reference types="cypress" />

describe('field empty Login Test', () => {
	before(() => {
		cy.visit('https://shopthearea.netlify.app', { timeout: 10000 })
		cy.url().should('include', 'shopthearea.netlify.app')
	})

    it('Should try to login with empty data', () => {
        cy.get('.hamburger-icon > img').click()
        cy.get('.signin-mobile-link').contains('Log in/').click()
        cy.loginkosong()
    })
})

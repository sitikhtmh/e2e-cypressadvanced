/// <reference types="cypress" />

describe('Invalid Login Test', () => {
	before(() => {
		cy.visit('https://shopthearea.netlify.app', { timeout: 10000 })
		cy.url().should('include', 'shopthearea.netlify.app')
	})

    it('Should try to login with invalid data', () => {
        cy.get('.hamburger-icon > img').click()
        cy.get('.signin-mobile-link').contains('Log in/').click()
        cy.fixture('user').then(user => {
			const username = user.usernameinvalid
			const password = user.passwordinvalid

            cy.logininvalidshop(username, password)
        })
    })
})

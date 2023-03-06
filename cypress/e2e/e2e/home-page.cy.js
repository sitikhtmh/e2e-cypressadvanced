/// <reference types="cypress" />

describe('Home Page', () => {
	before(() => {
		cy.visit('https://shopthearea.netlify.app', { timeout: 10000 })
		cy.url().should('include', 'shopthearea.netlify.app')
	})
	it('Home Page', () => {
		cy.get('.hamburger-icon > img').click()
        cy.get('.signin-mobile-link').contains('Log in/').click()

		cy.fixture('user').then(user => {
			const username = user.usernameshop
			const password = user.passwordshop

            //login
			cy.loginshopthearea(username, password)

            cy.get('h3').should('contain.text', ' Popular Boutiques')

            //shop now
            cy.get('.button-border').click()
            
		})
	})
})

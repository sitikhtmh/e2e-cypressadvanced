/// <reference types="cypress" />

describe('Sign up, Login test', () => {
	before(() => {
		cy.visit('https://shopthearea.netlify.app', { timeout: 10000 })
		cy.url().should('include', 'shopthearea.netlify.app')
	})
	it('Sign up, Login test', () => {
		cy.get('.hamburger-icon > img').click()
		//cy.get('.signin-mobile-link > [href="/user/signup"]').click()
        cy.get('.signin-mobile-link').contains('SignUp').click()

		cy.fixture('user').then(user => {
			const email = user.emailshop
			const username = user.usernameshop
			const password = user.passwordshop

			cy.signupshopthearea(email, username, password)

            cy.get('.text-link-blue').contains('Login Now!').click()
            cy.loginshopthearea(username, password)
		})
	})
})

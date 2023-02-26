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
        cy.get('#feedback-title').should('have.text', 'Feedback')

    })
    it('Should try input to feedback', () => {
        cy.visit('http://zero.webappsecurity.com', {timeout: 10000})
        cy.contains('Feedback').click()

        cy.fixture("user").then(user => {
            const name = user.name
            const email = user.email
            const subject = user.subject
            const comment = user.comment

            cy.feedback(name, email, subject, comment)
            cy.contains("Send Message").click()
           
            cy.url().should('include', '/sendFeedback.html')
        })
    })

    it('Should display homepage content', () =>{
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
       
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        
        //assertion
        cy.get('.custom.carousel-caption')
            .find('p')
            .should(($p) => {
            
                const texts = $p.map((i, el) => Cypress.$(el).text())

                const paragraphs = texts.get()

                expect(paragraphs, 'has 1 paragraphs').to.have.length(3)

                expect(
                    paragraphs,
                    'Welcome to Zero Online Banking. Zero provides a greener and more convenient way to manage your money. Zero enables you to check your account balances, pay your bills, transfer money, and  keep detailed records of your transactions,  wherever there is an internet connection.'
                    )
            })
       
    })
})
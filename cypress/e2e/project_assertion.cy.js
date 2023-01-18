/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/assertions')
    })

    describe('Assertion of tables', () => {
        it('verify the current subject', () => {
            cy.get('.assertion-table')
              .find('tbody tr:last')
              .should('have.class', 'success')
              .find('td:first')

        // checking the text of the <td> element in various ways
              .should('have.text', 'Column content')
        })

        it('Verify you can chain multiple assertion together', ()=> {
            cy.get('.assertions-link')
              .should('have.class', 'active')
              .and('have.attr', 'href')
              .and('include', 'cypress.io')
        })



    })
})
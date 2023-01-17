/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit ('https://example.cypress.io/commands/actions')
    })

    it('Verify the text input on Gmail placeholder', ()=> {
        cy.get("input[type='email']")
          .type('fake@email.com', {delay: 300})
          .should('have.value', 'fake@email.com')
          .type('{del}{selectall}{backspace}')

    

    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
  })
})
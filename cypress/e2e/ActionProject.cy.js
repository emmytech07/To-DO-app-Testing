/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit ('https://example.cypress.io/commands/actions')
    })

    it('Verify the text input on Gmail placeholder', ()=> {
        cy.get("input[type='email']")
          .type('fake@email.com', {delay: 100})
          .should('have.value', 'fake@email.com')
          .type('{del}{selectall}{backspace}')

    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
  })

  it("verify if password text is having focus",() => {
    cy.get('#password1').focus()
    .should('have.id', 'password1')
    .prev()
    .should('have.attr', 'style', 'color: orange;')
  })

  it("Verify if the Input text name is blur", () => {
    cy.get('.action-blur').type('about to blur').blur()
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
  })

  it("Verify that input on textarea element can be cleared", () => {
    cy.get('.action-clear').type('clear this text')
      .should('have.value', 'clear this text')
      .clear()
      .should('have.value', '')
  })

  it("Verify that you can submit an input", () => {
    cy.get('.action-form')
      .find('[type="text"]').type("CODE SUBMIT")
      
    cy.get('.action-form')
      .submit()
      .next()
      .should('contain', 'Your form has been submitted!')
    //   .should('have.value','Your form has been submitted!')
  })

  it("varify to click in 9 specific position on the button", ()=> {
    cy.get('.action-btn').click()

    // clicking in the center of the element is the default
    cy.get('#action-canvas').click()

    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')

    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({ multiple: true })
    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({ force: true })
  })

  it('verify input text can enable double', () => {
    
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })
  
  it('.Verify if user can right click on a button', () => {
    
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })
})

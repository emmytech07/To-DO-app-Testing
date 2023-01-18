/// <reference types="cypress" />


describe("Verify details about locator", () => {
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo')
      
  })
 
  it("verify todo items by default is two", () => {
    cy.get('.todo-list li').should('have.length', 2)
    
    cy.get(".todo-list li")
      .first()
      .should('have.text','Pay electric bill')
    
    cy.get(".todo-list li")
      .last()
      .should('have.text','Walk the dog')

  })

  it('verify another todo items', () => {

    const newItem = 'Reading every 2am at nyt'
    cy.get('input[class="new-todo"]').type(`${newItem}{enter}`, {delay:200})

    // Verify the user is having 3 list on todo list
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('verify for completed items on todo list', ()=>{

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Asserting the page to confirm it has been completed 
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')

  })

  it('verify with a checked task', () => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Walk the dog')
        .parent()
        .find('input[type=checkbox]')
        .check()
  })

  it('Verify if uncompleted task is remaining one ', () =>{

      cy.contains('Active').click()
        .should('have.length', 1)
        .first()
        // .should('have.text', 'Reading every 2am at nyt')
        // .should('have.text', 'Pay electric bill')
        
  })

})
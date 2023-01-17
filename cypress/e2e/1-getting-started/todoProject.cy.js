/// <reference types="cypress" />


describe("learn about locators", () => {
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo')
      
  })
 
  it("confirm todo items by default is two", () => {
    cy.get('.todo-list li').should('have.length', 2)
    
    cy.get(".todo-list li")
      .first()
      .should('have.text','Pay electric bill')
    
    cy.get(".todo-list li")
      .last()
      .should('have.text','Walk the dog')

  })

  it('Adding another todo items', () => {

    const newItem = 'Reading every 2am at nyt'
    cy.get('input[class="new-todo"]').type(`${newItem}{enter}`, {delay:500})

    // Verify the user is having 3 list on todo list
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('Checking for completed items on todo list', ()=>{

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Asserting the page to confirm it has been completed 
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')


  })
})
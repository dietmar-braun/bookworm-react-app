/// <reference types="cypress" />

describe('Bookwormers application', function() {
  it('Visits the bookwormers app', function() {
    cy.visit('http://localhost:5173');
    cy.get('h1[data-test="heading"]').contains('Bookwormers')
  })
})
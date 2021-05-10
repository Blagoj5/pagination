/// <reference types="cypress" />

describe('Pagination Test', () => {
  it('should render', () => {
    cy.visit('http://localhost:1234');

    cy.get('[data-test-id="hook"]').contains('usePagination');
  });
});

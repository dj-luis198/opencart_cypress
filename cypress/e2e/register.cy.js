describe('empty spec', () => {

  beforeEach("",()=>{

    cy.visit('/');
  })


  it('Registro con datos validos', () => {
    cy.visit('https://example.cypress.io')
  })
})
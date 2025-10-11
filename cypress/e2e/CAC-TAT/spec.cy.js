describe('Central de Atendimnto ao Cliente TAT', () => {
  it('Verifica o título da aplicação', () => {
    cy.visit('./src/index.html')

    cy.get('#title').should('be.visible')
  })
})
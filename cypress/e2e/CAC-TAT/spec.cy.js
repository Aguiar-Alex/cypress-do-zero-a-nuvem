
beforeEach(() => {
  cy.visit('./src/index.html')
})

describe('Central de Atendimnto ao Cliente TAT', () => {
  it('verifica o título e sub título da aplicação', () => {

    cy.contains('h1', 'CAC TAT').should('be.visible');
    cy.contains('p', 'Forneça o máximo de informações, por favor').should('be.visible')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
   
    cy.get('#firstName').type('Antonio Alexandre', {delay: 0});
    cy.get('#lastName').type('de Aguiar', {delay: 0});
    cy.get('#email').type('antonio.alex.aguiar@gmail.com', {delay: 0});
    cy.get('#phone').type('11961814395', {delay: 0});
    cy.get('#open-text-area').type('Olá , tudo bem ?', {delay: 0});
    cy.contains('button', 'Enviar').click();

    cy.contains('Mensagem enviada com sucesso.').should('be.visible');
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    
    cy.get('#email').type('antonio.alex.aguiar2gmail.com');
    cy.contains('button', 'Enviar').click();

    cy.contains('Valide os campos obrigatórios!').should('be.visible')
  })

  it('digitar valor não numérico campo telefone e ele continuar vazio', () => {
    
    cy.get('#phone').should('not.have.value', 'abc')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
   
    cy.get('#phone-checkbox').check();
    cy.get('#phone').should('not.have.value');
    cy.contains('button', 'Enviar').click();

    cy.contains('Valide os campos obrigatórios!').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName').type('Antonio Alexandre').should('have.value', 'Antonio Alexandre').clear().should('have.value', '');
    cy.get('#lastName').type('de Aguiar').should('have.value', 'de Aguiar').clear().should('have.value', '');
    cy.get('#email').type('antonio.alex.aguiar@gmail.com').should('have.value', 'antonio.alex.aguiar@gmail.com').clear().should('have.value', '');
    cy.get('#phone').type('11961814395').should('have.value', '11961814395').clear().should('have.value', '');
    cy.get('#open-text-area').type('Olá , tudo bem ?').should('have.value', 'Olá , tudo bem ?').clear().should('have.value', '')

  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.contains('Mensagem enviada com sucesso.').should('be.visible');
  })

  it('seleciona um produto por seu valor (value)', () => {

    cy.get('select').select('Blog').should('have.value', 'blog')
    cy.get('select').select('Cursos').should('have.value', 'cursos');
    cy.get('select').select('Mentoria').should('have.value', 'mentoria')
    cy.get('select').select('YouTube').should('have.value', 'youtube');


  })
})

const data = {
    firstName: "Antonio Alexandre",
    lastName: "de Aguiar",
    email: "antonio.aguiar@gmail.com",
    phone: "11961814395",
    textArea: "Olá , mundo"
}

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#email').type(data.email);
    cy.get('#phone').type(data.phone);
    cy.get('#open-text-area').type(data.textArea);
    cy.get('.button').click();
})
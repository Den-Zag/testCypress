describe(`my first test`, () => {
  it(`test001`, () => {
    cy.visit('/')
    // cy.get('.-active').check()
    // cy.get('[appscrollto="aboutSection"]').check()
    // cy.get('[appscrollto="contactsSection"]').check()
    cy.get('.hero-descriptor_btn').click()
    cy.get('#signupName').type('testName')
    cy.get('#signupLastName').type('testLastName')
    cy.get('#signupEmail').type('testName@mail.com')
    cy.get('#signupPassword').type('12345Tt@')
    cy.get('#signupRepeatPassword').type('12345Tt@')
    cy.get('.modal-footer > .btn').click()
  })
})
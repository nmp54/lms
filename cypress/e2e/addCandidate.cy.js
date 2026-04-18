describe('Add Candidate Test', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Tambah candidate berhasil', () => {

        cy.contains('Recruitment').click()
        cy.contains('Add').click()

        cy.get('input[name="firstName"]').type('Nur')
        cy.get('input[name="lastName"]').type('Putri')

        cy.contains('Email')
            .parents('.oxd-input-group')
            .find('input')
            .type('mul@gmail.com')
            .should('have.value', 'mul@gmail.com')

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved', { timeout: 10000 })
            .should('exist')

        cy.screenshot('add-candidate-success')
    })
})
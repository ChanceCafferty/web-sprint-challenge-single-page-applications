describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=username]');
    const specialInput = () => cy.get('input[name=special]');
    const pepInput = () => cy.get('input[name=pepperoni][type=checkbox]');
    const sauInput = () => cy.get('input[name=sausage][type=checkbox]');
    const bacInput = () => cy.get('input[name=bacon][type=checkbox]');
    const chicInput = () => cy.get('input[name=chicken][type=checkbox]');
    const submitBtn = () => cy.get('input[type=submit]')

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    describe('can use inputs', () => {
        it('can type in input boxes', () => {
            nameInput()
                .should('have.value', '')
                .type('Chance')
                .should('have.value', 'Chance')
            specialInput()
                .should('have.value', '')
                .type('Be careful with my pizza!')
                .should('have.value', 'Be careful with my pizza!')
        })
        it('can select multiple toppings', () => {
            pepInput()
                .check()
            sauInput()
                .check()
            bacInput()
                .check()
            chicInput()
                .check()
        })
        it('can submit', () => {
            submitBtn()
            .should('not.be.disabled')
        })
    })
})
describe(`Rock Paper Scissors Game`, () => {
  it(`Plays the game and checks history log`, () => {
    cy.visit(`https://eatoyebi.github.io/Javascript-tooling-eatoyebi/`)
    cy.get(`#username`).type(`Your Name`)
    cy.get(`#start-game-button`).click()
    cy.get(`#user-selection`).select(`Rock`)
    cy.get(`#go-button`).click()
    cy.get(`#game-history`)
  })
})

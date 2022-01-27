describe("Landing to the homepage and searching for a movie", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=searchInput]").type("Lord of the Rings");
    cy.get("[data-cy=submitBtn]").click();
  });
  it("clicks view movie details and navigates to a new page", () => {
    cy.get("a").first().click();
  });
  it("changes the url based on the ID of the movie in the API", () => {
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
  });
  it("shows details for The Two Towers movie", () => {
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
    cy.get("h1").contains("The Two Towers");
    cy.contains("Frodo");
    cy.contains("Release Date");
  });
  it("click back to see the results again", () => {
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
    cy.get("[data-cy=back]").click();
    cy.getLocalStorage("movies");
    cy.contains("The Two Towers");
  });
});

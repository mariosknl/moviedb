describe("Landing to the homepage and searching for a movie", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("clicks view movie details and navigates to a new page", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.get("a").first().click();
  });
  it("changes the url based on the ID of the movie in the API", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
  });
  it("shows details for The Two Towers movie", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
    cy.get("h1").first().contains("The Two Towers");
    cy.contains("Frodo");
    cy.contains("Release Date");
  });
  it("click back to see the results again", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.get("a").first().click();
    cy.url().should("eq", "http://localhost:3000/movie/121");
    cy.get("#back").click();
    cy.getLocalStorage("movies");
    cy.contains("The Two Towers");
  });
});

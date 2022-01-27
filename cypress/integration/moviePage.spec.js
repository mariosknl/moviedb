describe("Landing to the homepage and searching for a movie", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("uses the id from the URL to send a new request to the MovieDB API to get results for the requested movie", () => {
    cy.get("[data-cy=searchInput]").type("Lord of the Rings");
    cy.get("[data-cy=submitBtn]").click();
    cy.request(
      `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
        "api_key"
      )}&query='Lord of the Rings'`
    ).should((response) => {
      expect(response.status).to.eq(200);
      cy.saveLocalStorage("movies");
    });
    cy.get("a").first().click();
    // 121 in the request below is the ID for the specific movie title.
    //In the project it is replaced by a variable that comes from the
    // previous page
    cy.request(
      `https://api.themoviedb.org/3/movie/121?api_key=${Cypress.env("api_key")}`
    ).should((response) => {
      expect(response.status).to.eq(200);
      cy.saveLocalStorage("movies");
    });
    cy.contains("Overview");
    cy.contains("Release Date");
    cy.contains("Popularity");
    cy.contains("Production Companies");
    cy.contains("Production Countries");
    cy.contains("Budget");
    cy.contains("Revenue");
  });
});

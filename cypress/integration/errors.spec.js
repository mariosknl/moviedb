describe("Landing to the homepage and searching for a movie", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });
  it("Visits the MovieDb homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to the MovieDb");
  });
  it("contains an input and two buttons", () => {
    cy.visit("/");
    cy.get("input[type=submit]");
    cy.get("button[type=button]");
  });
  it("searching for a movie that does not exist in the database", () => {
    cy.get("input[name=searchInput").type("sdfnucenusadnucudsdy");
    cy.get("input[type=submit]").click();
    cy.wait(1000);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "This movie doesn't exit in our database. Please try another one."
      );
    });
  });
  it("making a request to moviedb API for a movie that exist stills returns a response.status of 200", () => {
    cy.request(
      `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
        "api_key"
      )}&query='sdfnucenusadnucudsdy'`
    ).should((response) => {
      expect(response.status).to.eq(200);
      cy.saveLocalStorage("movies");
    });
  });
});

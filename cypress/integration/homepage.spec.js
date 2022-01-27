describe("Landing to the homepage and searching for a movie", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });
  beforeEach(() => {
    cy.visit("/");
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
    cy.get("[data-cy=searchInput]");
    cy.get("[data-cy=submitBtn]");
    cy.get("[data-cy=resetBtn]");
  });
  it("searching Lord of the Rings", () => {
    cy.get("[data-cy=searchInput]").type("Lord of the Rings");
    cy.get("[data-cy=submitBtn]").click();
  });
  it("making a request to moviedb API for Lord of the Rings and getting a response.status of 200", () => {
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
  });
  it("displays results like The Two Towers", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.contains("The Two Towers");
  });
  it("displays the release date of each movie after every result is populated", () => {
    // waiting for every result to show in the screen before displaying the release date.
    // we are waiting for 25 seconds until all the animation is complete
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.wait(25000);
    cy.contains("Release Date");
  });
  it("saves the data to localstorage", () => {
    cy.getLocalStorage("movies");
  });
});

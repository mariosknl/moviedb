describe("Landing to the homepage and searching for a movie", () => {
  it("Visits the MovieDb homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to the MovieDb");
  });
  it("contains an input and two buttons", () => {
    cy.visit("/");
    cy.get("input[type=submit]");
    cy.get("button[type=button]");
  });
  it("making a request to moviedb API for Lord of the Rings and getting a response.status of 200", () => {
    cy.request(
      `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
        "api_key"
      )}&query='Lord of the Rings'`
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("searching Lord of the Rings", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
    cy.wait(3000);
  });
  it("displays results like The Two Towers", () => {
    cy.contains("The Two Towers");
  });
  it("displays the release date of each movie after every result is populated", () => {
    cy.wait(25000);
    cy.contains("Release Date");
  });
  it("saves the data to localstorage", () => {
    expect(localStorage.getItem("movies")).to.be.null;
  });
  it("clicks view movie details and navigates to a new page", () => {
    cy.get("a").first().click();
  });
  it("changes the url based on the ID of the movie in the API", () => {
    cy.url().should("eq", "http://localhost:3000/movie/121");
  });
  it("shows details for The Two Towers movie", () => {
    cy.get("img").should("be.visible");
    cy.get("p").first().contains("The Two Towers");
    cy.contains("Frodo");
    cy.contains("Release Date");
  });
});

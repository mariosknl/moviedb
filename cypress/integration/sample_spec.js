describe("Landing to the homepage and searching for a movie", () => {
  it("Visits the MovieDb homepage", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Welcome to the MovieDb");
  });
  it("searching Lord of the Rings", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
  });
});

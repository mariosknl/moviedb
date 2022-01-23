import { mount } from "@cypress/react";

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
  it("searching Lord of the Rings", () => {
    cy.get("input[name=searchInput").type("Lord of the Rings");
    cy.get("input[type=submit]").click();
  });
});

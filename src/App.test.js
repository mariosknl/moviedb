import React from "react";
import { mount } from "@cypress/react";
import Homepage from "./components/Homepage";

it("renders learn react link", () => {
  mount(<Homepage />);
  cy.get("h1").contains("Welcome to the MovieDb");
});

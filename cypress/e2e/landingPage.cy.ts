describe("First Tests", () => {
  it("navigates to homepage", () => {
    cy.visit("http://localhost:3000");
  });

  it("finds the content landing", () => {
    cy.contains("LAnding");
  });

  it("finds the content App Bar", () => {
    cy.contains("App Bar");
  });
});

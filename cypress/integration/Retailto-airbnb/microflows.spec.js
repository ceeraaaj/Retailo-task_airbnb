/// <reference types="cypress" />

context("AirBnB Microflows", () => {
  it("Visits AirBnB", () => {
    cy.visit("https://airbnb.com", { timeout: 15000 });
  });

  it("Types in the location", () => {
    cy.visit("https://airbnb.com", { timeout: 15000 });

    cy.wait(7000);

    cy.get("#bigsearch-query-detached-query")
      .trigger("mouseover")
      .click("center")
      .wait(1000)
      .type("Pakistan")
      .wait(1500)
      .type("{downarrow}")
      .should("have.value", "Pakistan")
      .wait(3000);
  });

  it("Enters the Exact CheckIn Date", () => {
    cy.get("[data-testid=structured-search-input-field-split-dates-0]")
      .trigger("mouseover")
      .click()
      .wait(1000);

    cy.get("[data-testid=structured-search-input-field-dates-panel]")
      .trigger("mouseover")
      .wait(500);

    cy.get("[data-testid=datepicker-day-2021-03-01]")
      .trigger("mouseover")
      .click()
      .wait(1000);
  });

  it("Enters the Exact Checkout Date", () => {
    cy.get("[data-testid=datepicker-day-2021-03-18]")
      .trigger("mouseover")
      .click()
      .wait(1000);
  });

  it("Sets the Flexibility", () => {
    cy.get("[data-testid=structured-search-input-field-dates-panel]")
      .get("._rf9hwai")
      .scrollIntoView()
      .should("be.visible")
      .wait(3000);

    cy.scrollTo("top");
    cy.get(":nth-child(2) > ._yfzvqs").click().wait(1000);
  });

  it("Sets the number of guests", () => {
    cy.get("[data-testid=structured-search-input-field-guests-button]")
      .click()
      .wait(3000);

    for (let n = 0; n < 10; n++) {
      cy.get("[data-testid=stepper-adults-increase-button]").click();
    }

    cy.get("[data-testid=stepper-children-increase-button]").click();
    cy.get("[data-testid=stepper-infants-increase-button]").click().wait(2000);
  });

  it("Press the Search Button", () => {
    cy.get("._m9v25n").click().wait(2000);
    cy.scrollTo("top");
  });
});

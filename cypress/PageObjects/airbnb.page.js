import {
  getMonthDifference,
  formatDate,
  generateRandomFlexibilty,
  formatGuests,
} from "../utils/utils";

export class AirBnb {
  navigate() {
    cy.visit("https://airbnb.com", { timeout: 15000 });
  }

  scroll(position) {
    cy.scrollTo(position).wait(200);
  }

  wait(milliseconds) {
    cy.wait(milliseconds);
  }

  searchCity(city) {
    cy.wait(7000);

    //Typing and Searching City
    cy.get("#bigsearch-query-detached-query")
      .trigger("mouseover")
      .click("center")
      .wait(1000)
      .type(city)
      .wait(1500)
      .type("{downarrow}")
      .wait(200)
      // .type("{enter}")
      // .wait(3000);
  }

  clickCheckInDiv() {
    // Clicking the Check In date
    cy.get("[data-testid=structured-search-input-field-split-dates-0]")
      .trigger("mouseover")
      .click()
      .wait(1000);

    // Hovering over input field dates panel
    cy.get("[data-testid=structured-search-input-field-dates-panel]")
      .trigger("mouseover")
      .wait(500);
  }

  // check if its the current month in the date picker, otherwise changing the month on calender
  navigateToCheckInMonth(check_in) {
    // If the date month is less than current month, move the calender backwards
    let difference = getMonthDifference(check_in);
    if (difference < 0) {
      for (let n = 0; n < Math.abs(difference); n++) {
        cy.get("._nztsc8l > ._187sg6v").trigger("mouseover").click().wait(500);
      }
    }

    // If the date month is greater than current month, move the calender forwards
    if (difference > 0) {
      for (let n = 0; n < Math.abs(difference); n++) {
        cy.get("._13tn83am > ._187sg6v").trigger("mouseover").click().wait(500);
      }
    }
  }

  selectCheckInDate(check_in) {
    cy.get(
      `[data-testid=datepicker-day-${formatDate(
        check_in
      )}] > ._f8btejl > ._1eu9zfzy`
    )
      .trigger("mouseover")
      .should("not.be.disabled")
      .click()
      .wait(1000);
  }

  // check if its the current month in the date picker, otherwise changing the month on calender
  navigateToCheckOutMonth(check_out) {
    let difference = getMonthDifference(check_out);
    // If the date month is less than current month, move the calender backwards
    if (difference < 0) {
      for (let n = 0; n < Math.abs(difference); n++) {
        cy.get("._nztsc8l > ._187sg6v").trigger("mouseover").click().wait(500);
      }
    }

    // If the date month is greater than current month, move the calender forwards
    if (difference > 0) {
      for (let n = 0; n < Math.abs(difference); n++) {
        cy.get("._13tn83am > ._187sg6v").trigger("mouseover").click().wait(500);
      }
    }
  }

  selectCheckOutDate(check_out) {
    cy.get(
      `[data-testid=datepicker-day-${formatDate(
        check_out
      )}] > ._f8btejl > ._1eu9zfzy`
    )
      .trigger("mouseover")
      .should("not.be.disabled")
      .click()
      .wait(1000);
  }

  scrollFlexParamsInDisplay() {
    cy.get("[data-testid=structured-search-input-field-dates-panel]")
      .get("._rf9hwai")
      .scrollIntoView()
      .should("be.visible")
      .wait(3000);
  }

  inputFlexibilityParams() {
    cy.get(generateRandomFlexibilty()).click().wait(1000);
  }

  clickGuestButton() {
    cy.get("[data-testid=structured-search-input-field-guests-button]")
      .click()
      .wait(3000);
  }

  addAdultGuests(inputGuests) {
    let guests = formatGuests(inputGuests);
    for (let n = 0; n < guests.adults; n++) {
      cy.get("[data-testid=stepper-adults-increase-button]").click();
    }
  }

  addChildGuests(inputGuests) {
    let guests = formatGuests(inputGuests);
    for (let n = 0; n < guests.childs; n++) {
      cy.get("[data-testid=stepper-children-increase-button]").click();
    }
  }

  addInfantGuests(inputGuests) {
    let guests = formatGuests(inputGuests);
    for (let n = 0; n < guests.infants; n++) {
      cy.get("[data-testid=stepper-infants-increase-button]").click();
    }
  }

  clickSearchButton() {
    cy.get("._m9v25n").click().wait(2000);
  }

  validateOutput(city, inputGuests) {
    cy.get("._14i3z6h").should("contain", city);
    cy.wait(500);
    let guests = formatGuests(inputGuests);
    let guestsNo = Number(guests.adults) + Number(guests.childs)
    cy.get("._1snxcqc").should(
      "contain",
      `${guestsNo} guests`
    );
  }
}

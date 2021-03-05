/// <reference types="cypress" />

import { AirBnb } from "../../PageObjects/airbnb.page";
const testData = require("../../fixtures/sample.json");

const airbnb = new AirBnb();

testData.forEach((object) => {
  describe("Complete Flow", () => {
    it("Visits AirBnB", () => {
      airbnb.navigate();
    });

    it(`Input City from the JSON: ${object.city}`, () => {
      airbnb.searchCity(object.city);
    });

    it(`Navigate to the Month of check in on date picker: ${object.check_in}`, () => {
      airbnb.clickCheckInDiv();
      airbnb.navigateToCheckInMonth(object.check_in);
    });

    it(`Select the Check In Date: ${object.check_in}`, () => {
      airbnb.selectCheckInDate(object.check_in);
    });

    it(`Navigate to the Month of Check out on date picker: ${object.check_out}`, () => {
      airbnb.navigateToCheckOutMonth(object.check_out);
    });

    it(`Select the Check Out Date: ${object.check_out}`, () => {
      airbnb.selectCheckOutDate(object.check_out);
    });

    it(`Generates Random Flexibility Params and provides as Input`, () => {
      airbnb.scrollFlexParamsInDisplay();
      airbnb.scroll("top");
      airbnb.inputFlexibilityParams();
    });

    it(`Clicks the Guests Button`, () => {
      airbnb.clickGuestButton();
    });

    it(`Adds the Adults Guests: ${object.guests[0]}`, () => {
      airbnb.addAdultGuests(object.guests);
    });

    it(`Adds the Child Guests: ${object.guests[1]}`, () => {
      airbnb.addChildGuests(object.guests);
    });

    it(`Adds the Infant Guests: ${object.guests[2]}`, () => {
      airbnb.addInfantGuests(object.guests);
      airbnb.wait(2000);
    });

    it(`Clicks the search button`, () => {
      airbnb.clickSearchButton();
      airbnb.scroll("top");

      //wait for search results
      airbnb.wait(4000);
    });

    it(`Validates the output by City and Guests`, () => {
      airbnb.validateOutput(object.city, object.guests);
    });
  });
});

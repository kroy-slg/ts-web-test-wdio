import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { homePage } from "../pages/homePage";
import { platformPage } from "../pages/platformPage";
import uimap from "../properties/uimap";

When(/^User lands on home page$/, async function () {
    await homePage.open('');
});

When(/^User lands on the platform page$/, async function () {
    await homePage.open(uimap.aboutThePlatformEndPoint);
});

Then(/^User verifies home page$/, async function () {
    await expect(homePage.homePage).toBeDisplayed();
});

Then(/^User verifies the platform page$/, async function () {
    await expect(platformPage.platformPage).toBeDisplayed();
});
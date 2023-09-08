import { Selector } from 'testcafe';

fixture`Login Test`
    .page`https://dev.deepthought.education/login`; // Replace with your SDLMS application URL

test('1. Test successful login with valid credentials', async (t) => {
    // Replace these selectors with the actual ones for your login page
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');

    const loginButton = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const dashboardHeader = Selector('.sdlms-header-section .sdlms-header');
    // Replace with the dashboard header selector

    // Replace these with valid test username and password
    const validUsername = 'Nag';
    const validPassword = '12345@6';

    await t
        .typeText(usernameInput, validUsername)
        .typeText(passwordInput, validPassword)
        .click(loginButton);

    await t.expect(dashboardHeader.exists).ok();
});

test('2. Test unsuccessful login attempts with invalid credentials', async (t) => {
    // Replace these selectors with the actual ones for your login page
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');

    // Replace these with invalid test username and password
    const invalidUsername = 'nagesh';
    const invalidPassword = '1234567';

    // Store the current URL before attempting to log in
    const initialURL = await t.eval(() => window.location.href);

    // Perform the login attempt
    await t
        .typeText(usernameInput, invalidUsername)
        .typeText(passwordInput, invalidPassword)
        .click(loginButton);

    // Check if the URL has not changed, indicating an unsuccessful login
    await t.expect(await t.eval(() => window.location.href)).eql(initialURL);
});

test('3. Validate that appropriate error messages are displayed for invalid login attempts', async (t) => {
    // Replace these selectors with the actual ones for your login page
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const errorMessage = Selector('#login-error-notify');
     // Replace with your error message selector

    // Replace these with invalid test username and password
    const invalidUsername = 'nagesh';
    const invalidPassword = '1234567';

    await t
        .typeText(usernameInput, invalidUsername)
        .typeText(passwordInput, invalidPassword)
        .click(loginButton);

    // Check if an error message is displayed
    await t.expect(errorMessage.exists).ok();
});

test('4. On successful login, validate that the user is redirected to the dashboard screen', async (t) => {
    // Replace these selectors with the actual ones for your login page
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const dashboardHeader = Selector('.sdlms-header-section .sdlms-header'); // Replace with the dashboard header selector

    // Replace these with valid test username and password
    const validUsername = 'Nag';
    const validPassword = '12345@6';

    await t
        .typeText(usernameInput, validUsername)
        .typeText(passwordInput, validPassword)
        .click(loginButton);

    // Check if the dashboard header exists to ensure successful login
    await t.expect(dashboardHeader.exists).ok();
});

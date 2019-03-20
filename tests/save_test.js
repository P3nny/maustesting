
Feature('Save');

Scenario('test save', (I) => {
    I.amReturningVisitor()
    I.amOnPage('/lernspiel/01')
    I.waitForElement('#save', 30);
    I.click('#save')
    I.fillField('#save_input', 'pups');
    I.click('Speichern')
});

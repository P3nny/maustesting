Feature('Load/GreenFlag/Save');

Scenario('welcome screen', (I) => {
    I.amOnPage('/')
    I.seeInCurrentUrl('/welcome')
    I.seeInTitle('Programmieren mit der Maus')
    I.say('Willkommen läuft')
    I.click('Lernen, wie es geht')
    I.seeInCurrentUrl('/lernspiel/00')
});

Scenario('test green flag', (I) => {
    I.amOnPage('https://programmieren.wdrmaus.de');
    I.see('Programmieren mit der Maus');
    I.click('Lernen, wie es geht')
    I.amOnPage('/lernspiel/00')
    I.click('[title=Los]')
    I.wait(10)
});


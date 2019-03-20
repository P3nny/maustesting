Feature('Load/GreenFlag/Save');

Scenario('welcome screen', (I) => {
    I.amOnPage('/')
    I.seeInCurrentUrl('/welcome')
    I.seeInTitle('Programmieren mit der Maus')
    I.say('Willkommen läuft')
    I.click('Lernen, wie es geht')
    I.seeInCurrentUrl('/lernspiel/00')
});

Scenario('green flag', (I) => {
    I.amReturningVisitor()
    I.amOnPage('/lernspiel/00')
    I.click('Weiter')
    I.wait(1)
    I.click('[title=Los]')
    I.wait(10)
});





Feature('Save');

Scenario('test save', (I) => {
    I.amOnPage('https://programmieren.wdrmaus.de');
    I.see('Programmieren mit der Maus');
    I.click('Lernen, wie es geht')
    I.amOnPage('/lernspiel/00')
    I.click('Speichern')
    I.click('Ok')
    I.fillField('Hier eintippen, wie dein Spiel heißen soll', 'pups');
    I.click('Speichern')
});

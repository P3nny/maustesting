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

const recordOpts = {
    name: 'drag-blocks',
    interval: 100, // ms
    clip: {
        x: 80,
        y: 150,
        width: 620,
        height: 400,
    },
};

Scenario('drag block', I => {
    I.amReturningVisitor()
    I.amOnPage('/projekt/neu')
    I.startRecording(recordOpts)
    I.selectCategory('events')
    I.dragBlock('event_whenflagclicked')
    I.selectCategory('motion')
    I.dragBlock('motion_turnright', 1)
    I.dragBlock('motion_changexby', 2)
    I.wait(1)
    I.stopRecording()
});

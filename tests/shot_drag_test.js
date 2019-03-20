/* Feature('Screenshot/Drag');


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
    I.convertRecording('drag-blocks')
});

*/
var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Det här är så coolt 😃';
var result = sentiment(dataset);

test('synchronous positive with emoji', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 3);
    t.equal(result.comparative, 0.6);
    t.equal(result.tokens.length, 5);
    t.equal(result.words.length, 2);
    t.end();
});

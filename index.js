var Sentiment = require('sentiment');

var sentiment = new Sentiment();

var inputText = ["I enjoyed picking apples with my neighbor.", "I marveled at the rainbow ahead.","I lost my mom to covid", "my dog died", "I just broke up", "End This. I don't want to hope anymore. I don't want to see the faint light of hope in people, anymore. It yields me nothing but dismay. I am tired of this cycle. Hope, Expectation, Dismay. God, please, end this!"]

inputText.forEach(function(s) {
    console.log(s +"    SCORE: " + sentiment.analyze(s).score);
    console.log(sentiment.analyze(s));
})
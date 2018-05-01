var argv = require('yargs-parser')(process.argv.slice(2));

var puts = console.log;

var options = {
    l: {
        description: 'Word Count     [default: 3]'
    },
    s: {
        description: 'Separator      [default: "-"]'
    },
    n: {
        description: 'Password Count [default: 1]'
    },
    h: {
        description: 'Displays this help'
    }
};

this.showHelp = function () {
    puts('Generates a memorable password\r\n');
    puts('Options:');
    var keys = Object.keys(options);

    keys.forEach(function (key) {
        puts('  -' + key + ': ' + options[key].description);
    });
};

this.run = function () {

    if (argv.h) {
        return this.showHelp();
    }

    var word_count = argv.l || 3;
    var separator = argv.s || "-";
    var password_count = argv.n || 1;

    var words = require('fs').readFileSync('words.txt', 'utf-8')
        .split('\n');


    for (var i = 0; i < password_count; i++) {

        var selectedWords = [];

        for (var j = 0; j < word_count; j++) {
            selectedWords.push(words[Math.floor(Math.random() * words.length)]);
        }

        puts(selectedWords.join(separator));
    }
};
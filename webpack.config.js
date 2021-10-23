// const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: ['./src/fontawesome.js', './src/main.js'],
    output: {
        filename: 'main.js',
        // path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateStringArray: true,
            domainLock: ['haidarrentaljogja.com', 'www.haidarrentaljogja.com'],
            domainLockRedirectUrl: 'https://www.haidarrentaljogja.com'
        })
    ]
    
};
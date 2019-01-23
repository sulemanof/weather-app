module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
};

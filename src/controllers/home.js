const path = require('path');

const homeController = {
    renderHome: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    }
}

module.exports = homeController;
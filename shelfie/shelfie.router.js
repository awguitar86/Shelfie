
function getBins (req, res) {
    const instance = req.app.get('instance');
    instance.getAll()
    .then(data => {
        res.send(data);
    })
}

module.exports = {
    getBins
};
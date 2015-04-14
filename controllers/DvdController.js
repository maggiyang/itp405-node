var Dvd = require('../models/Dvd');

module.exports = {
	dvds: function(req, res) {
        console.log(req.query.title);
        console.log(req.query.award);

        Dvd.findAll({
            where: {
                title: { like: '%' + req.query.title + '%'},
                award: { like: req.query.award }
            }
        }).then(function(results){
            res.render('dvds',{
                title: 'Dvds',
                dvds: results
            });
        });

        //console.log(req.query.title);
        //
        //Dvd.findAll({
        //    where: {
        //        title: { like: '%' + req.query.title + '%' },
        //        award: { like: req.query.award }
        //    },
        //    order: 'playCount DESC'
        //}).then(function(results) {
        //    res.render('dvds', {
        //        dvds: results
        //    });
        //});
    }
    //},
    //
    //create: function(req, res) {
		//
    //}
};
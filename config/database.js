const Sequelize = require('sequelize');

module.exports = new Sequelize('demo', 'root', '123', {
	// host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	// storage: 'db/demo.db',
	define: {
		// nueva liena
		timestamps: false // true by default
	}
});

import * as SGAC from '../app/js/SGAC.js';
const assert = require('assert');

describe('SGAC', function () {
	/* * * * * * * * * * Start: SGAC Class Tests * * * * * * * * * */
	// Calculate age on Earth.
	describe('ageEarth', function () {
		it('[ageEarth] should return 28.', function () {
			assert.equal(28, SGAC.ageEarth('1989-03-07'));
		});
	});
	// Calculate age on Mercury.
	describe('ageMercury', function () {
		it('[ageMercury] should return 117.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(117, SGAC.ageMercury(age));
		});
	});
	// Calculate age on Venus.
	describe('ageVenus', function () {
		it('[ageVenus] should return 45.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(45, SGAC.ageVenus(age));
		});
	});
	// Calculate age on Mars.
	describe('ageMars', function () {
		it('[ageMars] should return 15.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(15, SGAC.ageMars(age));
		});
	});
	// Calculate age on Jupiter.
	describe('ageJupiter', function () {
		it('[ageJupiter] should return 2.', function () {
			let age = SGAC.ageEarth('1989-03-07');
			assert.equal(2, SGAC.ageJupiter(age));
		});
	});
	/* * * * * * * * * * End: SGAC Class Tests * * * * * * * * * */
});

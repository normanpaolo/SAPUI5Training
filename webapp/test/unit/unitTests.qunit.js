/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day6exercise3_zaragoza/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

describe("Configuration setup", function() {
    it("should load local configurations", function(next) {
        var config = require('../config')();
        expect(config.mode).toBe('local');
        expect(config.mongo.host).toBe('127.0.0.1');
        expect(config.mongo.port).toBe(27017);
        next();
    });
    it("should load staging configurations", function(next) {
        var config = require('../config')('staging');
        expect(config.mode).toBe('staging');
        expect(config.mongo.host).toBe('127.0.0.1');
        expect(config.mongo.port).toBe(27017);
        next();
    });
    it("should load production configurations", function(next) {
        var config = require('../config')('production');
        expect(config.mode).toBe('production');
        expect(config.mongo.host).toBe('127.0.0.1');
        expect(config.mongo.port).toBe(27017);
        next();
    });
});
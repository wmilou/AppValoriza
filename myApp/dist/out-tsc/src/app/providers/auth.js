import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        //Create user
        this.register = function (data) { return _this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password); };
        //Login
        this.login = function (data) { return _this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password); };
    }
    AuthProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map
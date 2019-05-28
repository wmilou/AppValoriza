import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afs) {
        var _this = this;
        this.afs = afs;
        //Cria usuario no firebase
        this.postUser = function (data) {
            return _this.afs
                .collection("Users")
                .doc(data.uid)
                .set(data);
        };
        // Metodo Cadastra Empresa
        this.postEmpresa = function (data) {
            return _this.afs.firestore.collection('Empresas').add(data);
        };
    }
    //Puxa Usuario Do firebase
    FirebaseProvider.prototype.getUser = function (uid) {
        return this.afs.firestore.collection('Users').doc(uid)
            .get();
    };
    // Puxa Os Dados Das Empresas
    FirebaseProvider.prototype.getEmpresas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.firestore.collection('Empresas').get()
                .then(function (r) {
                var array = [];
                r.forEach(function (d) {
                    var item = d.data();
                    item.id = d.id;
                    array.push(item);
                });
                resolve(array);
            });
        });
    };
    FirebaseProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], FirebaseProvider);
    return FirebaseProvider;
}());
export { FirebaseProvider };
//# sourceMappingURL=firebase.js.map
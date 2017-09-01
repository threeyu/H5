var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 分配器
 */
var Distributor = (function () {
    function Distributor() {
        this._usedPool = null; // 使用中的对象池
        this._idlePool = null; // 未使用的对象池
        this._usedPool = {};
        this._idlePool = {};
    }
    Distributor.prototype.distribution = function (val) {
        if (val.isIdle) {
            this._idlePool[val.hashc] = val;
            delete this._usedPool[val.hashc];
        }
        else {
            this._usedPool[val.hashc] = val;
            delete this._idlePool[val.hashc];
        }
    };
    Distributor.prototype.addVO = function (val) {
        val.setProtocol(this);
        if (val.isIdle) {
            this._idlePool[val.hashc] = val;
        }
        else {
            this._usedPool[val.hashc] = val;
        }
    };
    Distributor.prototype.getVO = function (type) {
        var ball = null;
        for (var key in this._idlePool) {
            ball = this._idlePool[key];
            if (ball.type == type) {
                ball.reset();
                return ball;
            }
        }
        return null;
    };
    Distributor.prototype.clear = function () {
        var ball = null;
        for (var key in this._idlePool) {
            ball = this._idlePool[key];
            ball.del();
        }
        this._idlePool = null;
        this._idlePool = {};
    };
    // ----------------------------------------------
    Distributor.prototype.look = function () {
        console.log("[LOOK]");
        console.log("---------- IdlePool 空闲对象 ----------");
        var num = 0;
        for (var key in this._idlePool) {
            num++;
            console.log("KEY: " + key + " ,type: " + this._idlePool[key].type);
        }
        console.log("共" + num + "个空闲对象");
        num = 0;
        console.log("---------- UsedPool 使用对象 ----------");
        for (var key in this._usedPool) {
            num++;
            console.log("KEY: " + key + " ,type: " + this._usedPool[key].type);
        }
        console.log("共" + num + "个使用对象");
        console.log("\n\n");
    };
    return Distributor;
}());
__reflect(Distributor.prototype, "Distributor", ["IDistributor"]);
//# sourceMappingURL=Distributor.js.map
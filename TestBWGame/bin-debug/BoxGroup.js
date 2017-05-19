var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoxGroup = (function (_super) {
    __extends(BoxGroup, _super);
    function BoxGroup() {
        var _this = _super.call(this) || this;
        _this._rowHit = false;
        _this.init();
        return _this;
    }
    BoxGroup.prototype.init = function () {
        this._itemList = [];
        for (var i = 0; i < GameData.col; ++i) {
            var item = new BoxItem();
            item.x = GameData.getBoxWidth() * i;
            item.addEventListener(GameEvent.GAME_HIT, this.onBoxHit, this);
            item.addEventListener(GameEvent.GAME_OVER, this.onBoxOver, this);
            this.addChild(item);
            this._itemList.push(item);
        }
    };
    BoxGroup.prototype.create = function () {
        this._rowHit = false;
        var rand = Math.floor(Math.random() * GameData.col);
        var len = this._itemList.length;
        for (var i = 0; i < len; ++i) {
            this._itemList[i].drawBox(i == rand ? true : false);
        }
    };
    BoxGroup.prototype.clearPool = function () {
        for (var _i = 0, _a = this._itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.destroy();
            item = null;
        }
    };
    /** 本行是否被点击 */
    BoxGroup.prototype.isHit = function () {
        return this._rowHit;
    };
    // 事件
    BoxGroup.prototype.onBoxHit = function (e) {
        if (!this._rowHit) {
            this._rowHit = true;
            var event = new GameEvent(GameEvent.GAME_HIT);
            this.dispatchEvent(event);
        }
    };
    BoxGroup.prototype.onBoxOver = function (e) {
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    BoxGroup.prototype.removeEvent = function () {
        for (var _i = 0, _a = this._itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.removeEventListener(GameEvent.GAME_HIT, this.onBoxHit, this);
            item.removeEventListener(GameEvent.GAME_OVER, this.onBoxOver, this);
        }
    };
    BoxGroup.prototype.destroy = function () {
        this.removeEvent();
        this.clearPool();
    };
    return BoxGroup;
}(egret.Sprite));
__reflect(BoxGroup.prototype, "BoxGroup");
//# sourceMappingURL=BoxGroup.js.map
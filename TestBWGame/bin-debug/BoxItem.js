var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoxItem = (function (_super) {
    __extends(BoxItem, _super);
    function BoxItem() {
        var _this = _super.call(this) || this;
        _this._canTouch = false;
        _this.init();
        return _this;
    }
    BoxItem.prototype.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchDown, this);
    };
    BoxItem.prototype.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        this.graphics.clear();
        if (canTouch) {
            this.graphics.beginFill(0);
        }
        else {
            this.graphics.beginFill(0xffffff);
        }
        this.graphics.lineStyle(2, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
    };
    BoxItem.prototype.onTouchDown = function (e) {
        this.graphics.clear();
        if (this._canTouch) {
            this.graphics.beginFill(0xcccccc);
        }
        else {
            this.graphics.beginFill(0xff0000);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
        var event;
        if (this._canTouch) {
            event = new GameEvent(GameEvent.GAME_HIT);
        }
        else {
            event = new GameEvent(GameEvent.GAME_OVER);
        }
        this.dispatchEvent(event);
    };
    BoxItem.prototype.removeEvent = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchDown, this);
    };
    BoxItem.prototype.destroy = function () {
        this.removeEvent();
    };
    return BoxItem;
}(egret.Shape));
__reflect(BoxItem.prototype, "BoxItem");
//# sourceMappingURL=BoxItem.js.map
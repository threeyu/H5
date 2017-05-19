var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StartCanvas = (function (_super) {
    __extends(StartCanvas, _super);
    function StartCanvas() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartCanvas.prototype.init = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0);
        this._bg.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        this._btnStart = new egret.TextField();
        this._btnStart.text = "Start";
        this._btnStart.size = 50;
        this._btnStart.x = 180;
        this._btnStart.y = 200;
        this._btnStart.touchEnabled = true;
        this.addChild(this._btnStart);
        this._btnStart.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnClick, this);
    };
    StartCanvas.prototype.onBtnClick = function (e) {
        var event = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    };
    StartCanvas.prototype.removeEvent = function () {
        this._btnStart.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnClick, this);
    };
    StartCanvas.prototype.destroy = function () {
        this.removeEvent();
        this._bg = null;
        this._btnStart = null;
    };
    return StartCanvas;
}(egret.Sprite));
__reflect(StartCanvas.prototype, "StartCanvas");
//# sourceMappingURL=StartCanvas.js.map
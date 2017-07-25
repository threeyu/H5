var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameCanvas = (function (_super) {
    __extends(GameCanvas, _super);
    function GameCanvas() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameCanvas.prototype.init = function () {
        this._groupList = [];
        var len = GameData.row + 1;
        for (var i = 0; i < len; ++i) {
            var group = new BoxGroup();
            group.addEventListener(GameEvent.GAME_HIT, this.onGameHit, this);
            group.addEventListener(GameEvent.GAME_OVER, this.onGameOver, this);
            this.addChild(group);
            this._groupList.push(group);
        }
        this._txtScore = new egret.BitmapText();
        this._txtScore.font = RES.getRes("number_fnt");
        this._txtScore.x = 180;
        this._txtScore.y = 50;
        this._txtScore.text = String(0);
        this.addChild(this._txtScore);
    };
    GameCanvas.prototype.start = function () {
        this._txtScore.text = String(0);
        var len = GameData.row + 1;
        for (var i = 0; i < len; ++i) {
            this._groupList[i].create();
            this._groupList[i].y = 0 - GameData.getBoxHeight() * (i + 1);
        }
        console.log(" ------start over------ ");
    };
    GameCanvas.prototype.move = function () {
        var len = GameData.row + 1;
        for (var i = 0; i < len; ++i) {
            this._groupList[i].y += GameData.getSpeed();
        }
        for (i = 0; i < len; ++i) {
            if (this._groupList[i].y >= GameData.getStageHeight()) {
                if (!this._groupList[i].isHit()) {
                    this.onGameOver(null);
                    return;
                }
                if (i == 0) {
                    this._groupList[i].y = this._groupList[GameData.row].y - GameData.getBoxHeight();
                }
                else {
                    this._groupList[i].y = this._groupList[i - 1].y - GameData.getBoxHeight();
                }
                this._groupList[i].create();
            }
        }
    };
    GameCanvas.prototype.clearPool = function () {
        for (var _i = 0, _a = this._groupList; _i < _a.length; _i++) {
            var group = _a[_i];
            group.destroy();
            group = null;
        }
    };
    // 事件
    GameCanvas.prototype.onGameHit = function (e) {
        GameData.setScore(GameData.getScore() + 1);
        this._txtScore.text = String(GameData.getScore());
    };
    GameCanvas.prototype.onGameOver = function (e) {
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    GameCanvas.prototype.removeEvent = function () {
        for (var _i = 0, _a = this._groupList; _i < _a.length; _i++) {
            var group = _a[_i];
            group.removeEventListener(GameEvent.GAME_HIT, this.onGameHit, this);
            group.removeEventListener(GameEvent.GAME_OVER, this.onGameOver, this);
        }
    };
    GameCanvas.prototype.destroy = function () {
        this.removeEvent();
        this.clearPool();
    };
    return GameCanvas;
}(egret.Sprite));
__reflect(GameCanvas.prototype, "GameCanvas");
//# sourceMappingURL=GameCanvas.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.setSpeed = function (val) {
        this._speed = val;
    };
    GameData.getSpeed = function () {
        return this._speed;
    };
    GameData.setScore = function (val) {
        GameData._score = val;
        // GameData._speed = GameData._score + 10;
    };
    GameData.getScore = function () {
        return GameData._score;
    };
    /** 获得盒子宽度 */
    GameData.getBoxWidth = function () {
        if (GameData._boxWidth == 0) {
            GameData._boxWidth = egret.MainContext.instance.stage.stageWidth / GameData.col;
        }
        return GameData._boxWidth;
    };
    /** 获得盒子高度 */
    GameData.getBoxHeight = function () {
        if (GameData._boxHeight == 0) {
            GameData._boxHeight = egret.MainContext.instance.stage.stageHeight / GameData.row;
        }
        return GameData._boxHeight;
    };
    GameData.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    GameData.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    return GameData;
}());
/** 行数 */
GameData.row = 4;
/** 列数 */
GameData.col = 4;
GameData._boxWidth = 0; // 盒子宽度
GameData._boxHeight = 0; // 盒子高度
GameData._score = 0; // 分数
GameData._speed = 10; // 下落速度
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map
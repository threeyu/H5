var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 关卡数据管理
 */
var LevelDataManager = (function () {
    function LevelDataManager() {
        this._itemList = [];
        this._itemList = RES.getRes("questions_json");
    }
    LevelDataManager.getInstance = function () {
        if (this._instance == null)
            this._instance = new LevelDataManager();
        return this._instance;
    };
    LevelDataManager.prototype.getLevel = function (level) {
        if (level < 0)
            level = 0;
        if (level >= this._itemList.length)
            level = this._itemList.length - 1;
        return this._itemList[level];
    };
    /** 获取当前最新进度 **/
    LevelDataManager.prototype.getMilestone = function () {
        var milestone = egret.localStorage.getItem("TestChengyuDemo_Milestone");
        if (milestone == "" || milestone == null)
            milestone = "1";
        return parseInt(milestone);
    };
    /** 设置当前最新进度 **/
    LevelDataManager.prototype.setMildstone = function (val) {
        egret.localStorage.setItem("TestChengyuDemo_Milestone", val.toString());
    };
    return LevelDataManager;
}());
__reflect(LevelDataManager.prototype, "LevelDataManager");
/**
 * 关卡数据
 */
var LevelDataItem = (function () {
    function LevelDataItem() {
    }
    return LevelDataItem;
}());
__reflect(LevelDataItem.prototype, "LevelDataItem");
//# sourceMappingURL=LevelDataManager.js.map
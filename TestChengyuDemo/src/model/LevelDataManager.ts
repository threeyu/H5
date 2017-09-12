/**
 * 关卡数据管理
 */
class LevelDataManager
{
    private static _instance : LevelDataManager;
    private _itemList : Array<LevelDataItem> = [];

    public constructor()
    {
        this._itemList = RES.getRes("questions_json");
    }

    public static getInstance() : LevelDataManager
    {
        if(this._instance == null)
            this._instance = new LevelDataManager();
        return this._instance;
    }

    public getLevel(level : number) : LevelDataItem
    {
        if(level < 0)
            level = 0;
        if(level >= this._itemList.length)
            level = this._itemList.length - 1;

        return this._itemList[level];
    }

    /** 获取当前最新进度 **/
    public getMilestone() : number
    {
        var milestone = egret.localStorage.getItem("TestChengyuDemo_Milestone");
        if(milestone == "" || milestone == null)
            milestone = "1";
        
        return parseInt(milestone);
    }

    /** 设置当前最新进度 **/
    public setMildstone(val : number) : void
    {
        egret.localStorage.setItem("TestChengyuDemo_Milestone", val.toString());
    }
}


/**
 * 关卡数据
 */
class LevelDataItem
{
    public answer : string;     // 答案
    public img : string;        // 图像
    public word : string;       // 文字
    public tip : string;        // 提示
    public content : string;    // 讲解
}
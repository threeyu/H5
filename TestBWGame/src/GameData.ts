class GameData
{
    /** 行数 */
    public static row : number = 4;
    /** 列数 */
    public static col : number = 4;

    private static _boxWidth : number = 0;   // 盒子宽度
    private static _boxHeight : number = 0;  // 盒子高度
    private static _score : number = 0;      // 分数
    private static _speed : number = 10;     // 下落速度

    public static setSpeed(val : number) : void
    {
        this._speed = val;
    }

    public static getSpeed() : number
    {
        return this._speed;
    }

    public static setScore(val : number) : void
    {
        GameData._score = val;
        // GameData._speed = GameData._score + 10;
    }

    public static getScore() : number
    {
        return GameData._score;
    }

    /** 获得盒子宽度 */
    public static getBoxWidth() : number
    {
        if( GameData._boxWidth == 0)
        {
            GameData._boxWidth = egret.MainContext.instance.stage.stageWidth / GameData.col;
        }
        return GameData._boxWidth;
    }

    /** 获得盒子高度 */
    public static getBoxHeight() : number
    {
        if( GameData._boxHeight == 0)
        {
            GameData._boxHeight = egret.MainContext.instance.stage.stageHeight / GameData.row;
        }
        return GameData._boxHeight;
    }

    public static getStageWidth() : number
    {
        return egret.MainContext.instance.stage.stageWidth;
    }

    public static getStageHeight() : number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }
}
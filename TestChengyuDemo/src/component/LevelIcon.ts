/**
 * 关卡按钮UI
 */
class LevelIcon extends eui.Button
{
    private label_level : eui.Label;

    public constructor()
    {
        super();
        this.skinName = "resource/assets/skin/LevelIconSkin.exml";
    }

    public get Level() : number { return parseInt(this.label_level.text); }
    public set Level(val : number) { this.label_level.text = val.toString(); }

}
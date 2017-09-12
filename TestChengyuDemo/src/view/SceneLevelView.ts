/**
 * 选关界面
 */
class SceneLevelView extends eui.Component
{
    private btn_back : eui.Button;
    private group_levels : eui.Group;
    private img_arrow : eui.Image;

    private _curLevel : number;                 // 当前关卡
    private _iconList : Array<LevelIcon> = [];  // 关卡icon

    private static _instance : SceneLevelView;

    public constructor()
    {
        super();
        this.skinName = "resource/assets/skin/SceneLevelSkin.exml";

        this.init();
        this.addEvent();
    }

    public static getInstance() : SceneLevelView
    {
        if(this._instance == null)
            this._instance = new SceneLevelView();
        return this._instance;
    }

    private init() : void
    {
        var num = 10;
        var row = 20;
        var col = 10;
        var spanx = 720 / col;
        var spany = 1136 / row;
        var group = new eui.Group();
        group.width = 720;
        group.height = (spany * 400);

        // 背景
        var img : eui.Image;
        var len = group.height / 1138;
        for(var i = 0; i <= len; ++i)
        {
            img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * 1138;
            img.touchEnabled = false;
            this.group_levels.addChildAt(img, 0);
        }
        
        // icon 这部分当 icon位置显示到容器以下时 icon会不显示
        // icon
        var milestone : number = LevelDataManager.getInstance().getMilestone();
        for(var i = 0; i < num; ++i)
        {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            // icon.y += spany * i / 2;
            icon.y += spany * i;
            // icon.y = group.height - icon.y - spany;
            icon.enabled = i < milestone;
            group.addChild(icon);
            
            this._iconList.push(icon);
        }
        group.cacheAsBitmap = true;
        this.group_levels.addChild(group);

        //this.group_levels.scrollV = group.height - 1100;// 容器滚动到最后一页

        //跟踪箭头
        this.img_arrow = new eui.Image();
        this.img_arrow.source = RES.getRes("PageDownBtn_png");
        this.img_arrow.anchorOffsetX = 124 / 2 - group.getChildAt(0).width / 2;
        this.img_arrow.anchorOffsetY = 76;
        this.img_arrow.touchEnabled = false;
        this.img_arrow.x = group.getChildAt(0).x;
        this.img_arrow.y = group.getChildAt(0).y;
        group.addChild(this.img_arrow);
    }

    // 打开指定关卡
    public openLevel(level : number) : void
    {
        var icon = this._iconList[level - 1];
        icon.enabled = true;
        this.img_arrow.x = icon.x;
        this.img_arrow.y = icon.y;
        this._curLevel = icon.Level;
        if(level > LevelDataManager.getInstance().getMilestone())
        {
            LevelDataManager.getInstance().setMildstone(level);
        }
    }

    // 事件
    private onBackHandler(e : egret.TouchEvent) : void
    {
        if(this.parent)
        {
            SoundManager.getInstance().playClick();
            this.parent.addChild(SceneStartView.getInstance());
            this.parent.removeChild(this);
        }
    }

    private onIconClickHandler(e : egret.TouchEvent) : void
    {
        SoundManager.getInstance().playClick();
        var icon = e.currentTarget as LevelIcon;
        if(this._curLevel != icon.Level)
        {
            this.img_arrow.x = icon.x;
            this.img_arrow.y = icon.y;
            this._curLevel = icon.Level;
        }
        else
        {
            console.log("------进入关卡： " + icon.Level);
            if(this.parent)
            {
                this.parent.addChild(SceneGameView.getInstance());
                SceneGameView.getInstance().initLevel(icon.Level);
                this.parent.removeChild(this);
            }
        }
    }

    private addEvent() : void
    {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        for(var i = 0; i < this._iconList.length; ++i)
        {
            this._iconList[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIconClickHandler, this);
        }
    }

    private removeEvent() : void
    {
        this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHandler, this);
        for(var i = 0; i < this._iconList.length; ++i)
        {
            this._iconList[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onIconClickHandler, this);
        }
    }

    public destroy() : void
    {
        this.removeEvent();
    }
}
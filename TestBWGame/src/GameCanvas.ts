class GameCanvas extends egret.Sprite
{
    private _groupList : Array<BoxGroup>;
    private _txtScore : egret.BitmapText;

    public constructor()
    {
        super();

        this.init();
    }

    private init() : void
    {
        this._groupList = [];
        var len : number = GameData.row + 1;
        for(var i : number = 0; i < len; ++i)
        {
            var group : BoxGroup = new BoxGroup();
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
    }

    public start() : void
    {
        this._txtScore.text = String(0);
        var len : number = GameData.row + 1;
        for(var i : number = 0; i < len; ++i)
        {
            this._groupList[i].create();
            this._groupList[i].y = 0 - GameData.getBoxHeight() * (i + 1);
        }
        console.log(" ------start over------ ");
    }

    public move()
    {
        var len : number = GameData.row + 1;
        for(var i : number = 0; i < len; ++i)
        {
            this._groupList[i].y += GameData.getSpeed();
        }
        for(i = 0; i < len; ++i)
        {
            if(this._groupList[i].y >= GameData.getStageHeight())
            {
                if(!this._groupList[i].isHit())
                {
                    this.onGameOver(null);
                    return;
                }
                if(i == 0)
                {
                    this._groupList[i].y = this._groupList[GameData.row].y - GameData.getBoxHeight();
                }
                else
                {
                    this._groupList[i].y = this._groupList[i - 1].y - GameData.getBoxHeight();
                }
                this._groupList[i].create();
            }
        }
    }

    private clearPool() : void
    {
        for(var group of this._groupList)
        {
            group.destroy();
            group = null;
        }
    }

    // 事件
    private onGameHit(e : GameEvent) : void
    {
        GameData.setScore(GameData.getScore() + 1);
        this._txtScore.text = String(GameData.getScore());
    }

    private onGameOver(e : GameEvent) : void
    {
        var event : GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

    private removeEvent() : void
    {
        for(var group of this._groupList)
        {
            group.removeEventListener(GameEvent.GAME_HIT, this.onGameHit, this);
            group.removeEventListener(GameEvent.GAME_OVER, this.onGameOver, this);
        }
    }

    public destroy() : void
    {
        this.removeEvent();
        this.clearPool();

    }

}
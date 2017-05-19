class BoxGroup extends egret.Sprite
{
    private _itemList : Array<BoxItem>;
    private _rowHit : boolean = false;

    public constructor()
    {
        super();

        this.init();
    }

    private init() : void
    {
        this._itemList = [];
        for(var i : number = 0; i < GameData.col; ++i)
        {
            var item : BoxItem = new BoxItem();
            item.x = GameData.getBoxWidth() * i;
            item.addEventListener(GameEvent.GAME_HIT, this.onBoxHit, this);
            item.addEventListener(GameEvent.GAME_OVER, this.onBoxOver, this);
            this.addChild(item);

            this._itemList.push(item);
        }
    }

    public create() : void
    {
        this._rowHit = false;
        var rand : number = Math.floor(Math.random() * GameData.col);
        var len : number = this._itemList.length;
        for(var i : number = 0; i < len; ++i)
        {
            this._itemList[i].drawBox(i == rand? true : false);
        }
    }

    private clearPool() : void
    {
        for(var item of this._itemList)
        {
            item.destroy();
            item = null;
        }
    }

    /** 本行是否被点击 */
    public isHit() : boolean
    {
        return this._rowHit;
    }    

    // 事件
    private onBoxHit(e : GameEvent) : void
    {
        if(!this._rowHit)
        {
            this._rowHit = true;
            var event : GameEvent = new GameEvent(GameEvent.GAME_HIT);
            this.dispatchEvent(event);
        }
    }

    private onBoxOver(e : GameEvent) : void
    {
        var event : GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

    private removeEvent() : void
    {
        for(var item of this._itemList)
        {
            item.removeEventListener(GameEvent.GAME_HIT, this.onBoxHit, this);
            item.removeEventListener(GameEvent.GAME_OVER, this.onBoxOver, this);
        }
    }

    public destroy() : void
    {
        this.removeEvent();
        this.clearPool();
    }
}
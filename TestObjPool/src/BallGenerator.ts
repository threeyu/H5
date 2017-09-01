/**
 * 球生成器
 */
class BallGenerator
{
    private _distributor : IDistributor = null;

    public constructor(val : IDistributor)
    {
        this.init(val);
    }

    private init(val : IDistributor)
    {
        this._distributor = val;
    }

    public getBall(type : number) : IBall
    {
        var ball : IBall = this._distributor.getVO(type);
        if(ball == null)
        {
            ball = this.createBall(type);
            this._distributor.addVO(ball);
            ball.reset();
        }
        return ball;
    }

    private createBall(type : number) : IBall
    {
        switch(type)
        {
            case BallType.baseball:
                return new BaseBall();
            case BallType.basketball:
                return new BasketBall();
            case BallType.football:
                return new FootBall();
        }
    }
}

/**
 * 分配器接口
 */
interface IDistributor
{
    distribution(val : IBall) : void;   // 分配
    addVO(val : IBall) : void;          // 添加元素
    getVO(type : number) : IBall;       // 获得元素
    clear() : void;                     // 清除所有未使用的对象
}
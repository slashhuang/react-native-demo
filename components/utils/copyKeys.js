/**
 * Created by slashhuang on 16/3/28.
 */

/**
 * [a,b,c]==> {a:'a',b:'b',c:'c'}
 * @param obj
 * @return {*}
 */
module.exports=function(obj){
   return obj.reduce(function (pre,cur) {
       pre[cur]=cur;
       return pre;
   },{})
};
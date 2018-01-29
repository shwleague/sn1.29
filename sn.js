/**
 * Created by Administrator on 2018/1/28.
 */
window.onload=function () {
    let br=document.querySelectorAll('.bannermid div.banner0 img');
    let mid=document.querySelector('.bannermid');
    let dian=document.querySelectorAll('.bannermid .bannerdian li');
    let  n=0;
    function move() {
        n++;
        if(n>=br.length){
            n=0;
        }
        br.forEach(function (v,i) {
            v.className='bannertu';
            dian[i].classList.remove('dian');
        });
        br[n].className='bannertu2';
        dian[n].classList.add('dian');
    }
    let t=setInterval(move,3500);
    mid.onmousemove=function () {
        clearInterval(t);
    }
    mid.onmouseout=function () {
        t=setInterval(move,3500);
    }
    document.querySelector('.bannermid div.bannerjianyou').onclick=function () {
        move();
    }
    document.querySelector('.bannermid div.bannerjianzuo').onclick=function () {
        function move1() {
            n--;
            if(n<0){
                n=br.length-1;
            }
            br.forEach(function (v,i) {
                v.className='bannertu';

            });
            br[n].className='bannertu2';

        }
        return move1()
    };
    dian.forEach(function (val,index) {
        val.onclick=function () {
            dian.forEach(function (m,k) {
                    br[k].className='bannertu';
                    dian[k].classList.remove('dian');
                });
                br[index].className='bannertu2';
                dian[index].classList.add('dian');
            n=index;
        }
    });
    // 侧
        let ce=document.querySelectorAll('.bannerce');
        let  as=document.querySelectorAll('.bannerzuo ul li');
        as.forEach(function (v,i) {
            v.onmouseover=function(){
                ce[i].classList.remove('noblc');
                ce[i].classList.add('blc');
            }
            v.onmouseout=function(){
                as.forEach(function (c,d) {
                    ce[d].classList.add('noblc');
                });
            }

        })
}
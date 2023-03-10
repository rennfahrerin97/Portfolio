const input = document.querySelector('.mouse-parallax') as HTMLDivElement | null;
console.log(input?.innerHTML);
console.log('hello');
   /* let mouse =  input.onmousemove = function(e) {

        console.log(e)
    e = e || window.e
    const x = e.pageX / document.documentElement.clientWidth
    const y = e.pageY / document.documentElement.clientHeight

    let parallax = document.querySelector('.mouse-parallax__background')
    parallax.style.setProperty('transform', 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)')
    }*/
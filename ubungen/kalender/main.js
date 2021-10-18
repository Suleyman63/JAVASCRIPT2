(function(){


    function el(cssSelector){
        return document.querySelector(cssSelector)

    }

    function create(html){
        return document.createElement(html)

    }

    function group(css){
        return document.querySelectorAll(css)

    }


    async function loadJson(){
        let data = await (await fetch('data/advent_2019.json')).json()
        el('#kalender').appendChild(kalenderGenerator(data))
        console.log(kalenderGenerator(data));
    }


    function kalenderGenerator(data){
        let img,h2;
        let kalenderWrapper = create('div')

        data.forEach((obj) => {

            h2=create('h2')
            h2.innerHTML=obj.h2.innerHTML;

            img=create('img')
            img.src = obj.img.attributes.src;
            img.alt = obj.img.attributes.alt;
            img.className = obj.img.attributes.class[0]


            img.addEventListener('click', function(){
                if(sound){
                    sound.pause()

                }
                sound=new Audio()
                sound.src = obj.audio.attributes.src
                sound.play()


                group('#kalender img').forEach((img) => {
                    img.className = obj.img.attributes.class[0]
                })
                this.className = obj.img.attributes.class[1]
            })

            kalenderWrapper.appendChild(h2)
            kalenderWrapper.appendChild(img)

        })

        return kalenderWrapper
    }
    loadJson()
}())
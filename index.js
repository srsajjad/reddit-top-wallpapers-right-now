  var ul = document.querySelector('#ul');

  reddit.hot('wallpapers').limit(25).fetch(function(res) {
    

    var linkArr = res.data.children
                    .filter((n)=>n.data.url.endsWith('.jpg'))
                    .slice(0,9)
                    .forEach((n,i)=>{
                        var url = n.data.url ;
                        var a = document.createElement('a');
                        var li = document.createElement('div');
                        var img = document.createElement('img');

                        a.href = url ;
                        img.src = url ;

                        a.setAttribute('data-lightbox','test');
                        li.setAttribute('class','li');

                        a.appendChild(img);
                        li.appendChild(a);
                        ul.appendChild(li);
                    })

  });

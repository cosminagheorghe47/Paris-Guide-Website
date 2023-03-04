function ex61(){
    var imagini=document.querySelectorAll("#de_vazut img")
    var rand=Math.floor(Math.random() * 6)+1;
    var i=1;
    
    for(var imagine of imagini)
    {
        if(i==rand)
        {
            var aux=imagine.src;
            imagine.src="images/pexels-photo-11217203.jpeg";
            imagine.alt="intrus";
            break;
        }
        i++;
        
        localStorage.setItem("reusita", "Ati reusit!");
    }imagine.onclick=function()
        {
            
            var varrr=imagine.src;
            if(varrr.match("images/pexels-photo-11217203.jpeg"))
            {
                //alert(varrr);
                imagine.src="images/istockphoto-912696270-170667a.jpg";
                
            }
            if(varrr.match("images/istockphoto-912696270-170667a.jpg"))
            {
                //alert(varrr);
                imagine.src=aux;
                alert(localStorage.getItem("reusita"))
            }
        }
        setTimeout(pop, 5000) ;
        setInterval(pop, 10000);
        function pop(){alert("Gasiti poza nepotrivita cu denumirea!")}

    /*for(var i=0;i<imagini.length;i++)
    {
        
        if(i==rand)
        {
            imagini[i].src="images/pexels-photo-11217203.jpeg";
            imagini[i].alt="intrus";
            //imagini[i].style.border="solid 5px"
        }
        imagini[i].onclick=function()
        {
            alert(imagini[i].src);
        if(imagini[i].src.match("images/pexels-photo-11217203.jpeg"))
        {

            alert("sperr");
            imagini[i].src="images/Symbol-Tiktok.jpg";
        }
        }
    }*/

}
ex61();

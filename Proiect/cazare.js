function stele()
{
    let hoteluri=[{titlu:"InterContinental Paris Le Grand",stele:5},{titlu:"Sofitel Paris Le Faubourg",stele:5},{titlu:"Hôtel Alfred Sommier",stele:5},{titlu:"Room Mate Alain",stele:4},{titlu:"Hotel de L'Esperance",stele:4},{titlu:"Asa si asa",stele:3},{titlu:"Mediu",stele:3},{titlu:"Nu prea",stele:2},{titlu:"TE ROG NU",stele:1}, {titlu:"FUGI",stele:1}]
    
    let v=[];
    let n=prompt("Ce numar de stele preferati?");
    for(var hotel of hoteluri)
    {
        if (hotel.stele==parseInt(n))
        {
            //v.push(hotel.titlu);
            alert("Am gasit un hotel pentru tine!\n"+hotel.titlu);
        }
    }
   // alert(v.join('\n'));
}
stele();


const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}


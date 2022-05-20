const element = document.getElementById('descriereBT1')
const element2 = document.getElementById('descriereBT2')

element.addEventListener("click", () => {
    document.getElementById('descriereBT1').style.backgroundColor = "#004D4F";
    document.getElementById('descriereBT1').style.color = "#FFFFFF";
    document.getElementById('descriereBT1').style.boxShadow = "5px 5px 5px gray";


    document.getElementById('descriereBT2').style.backgroundColor = "#C8C8C8";
    document.getElementById('descriereBT2').style.color = "#000000";
    document.getElementById('descriereBT2').style.boxShadow = "0px 0px 0px ";

	document.getElementById('zonaInfoBT').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});
element2.addEventListener("click", () => {
    document.getElementById('descriereBT2').style.backgroundColor = "#004D4F";
    document.getElementById('descriereBT2').style.color = "#FFFFFF";
    document.getElementById('descriereBT2').style.boxShadow = "5px 5px 5px gray";

    document.getElementById('descriereBT1').style.backgroundColor = "#C8C8C8";
    document.getElementById('descriereBT1').style.color = "#000000";
    document.getElementById('descriereBT1').style.boxShadow = "0px 0px 0px ";

	document.getElementById('zonaInfoBT').innerHTML = "Informatie pentru informatii adaugatoare";
});
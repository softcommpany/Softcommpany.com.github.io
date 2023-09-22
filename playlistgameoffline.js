var solicitarurl = window.location.href;

if (solicitarurl == "https://softcommpany.github.io/Softcommpany.com.github.io/pagewindowsgame.html")
{
	function GameInfromacionWindows(Icono, Name, LinkGame, Public, Presio)
	{
		document.getElementById('Allgamebox').innerHTML += 

		`<section class="GameBox">
            <img class="IconoGame" src="${Icono}">
            <img class="PublicCheck" src="Texture/${Public}.png">
            <a class="gamelink" href="${LinkGame}">${Name}</a>
         </section>`;
	}

	//resgistros de definiciongame para windows/

    GameInfromacionWindows("Texture/IconsGame/fortniquegame.png", "Fortnique", "https://drive.google.com/file/d/1NSnzqK90a287b3LDSjGeOUQpfbegmNHU/view?usp=drive_link", "publico")
    GameInfromacionWindows("Texture/IconsGame/gameiconodefault.png", "sin definir", "", "privado")



} else 
{
	if (solicitarurl == "https://softcommpany.github.io/Softcommpany.com.github.io/pageandroidgame.html") 
	{
		function GameInformacionAndroid(Icono, Name, LinkGame, Public, Presio) 
		{
		    document.getElementById('Allgamebox').innerHTML += 

		    `<section class="GameBox">
                <img class="IconoGame" src="${Icono}">
                <img class="PublicCheck" src="Texture/${Public}.png">
                <a class="gamelink" href="${LinkGame}">${Name}</a>
            </section>`;
		}

		//registros de definiciongame para android/
		GameInformacionAndroid("Texture/IconsGame/fortniquegame.png", "Fortnique", "https://drive.google.com/file/d/1GXlcgvx1HqvmdgZtxUUr10g11VM6ygLo/view?usp=drive_link", "publico")


	} else {document.getElementById('Allgamebox').innerHTML += "NO HAY CONTENIDO PARA MOSTRAR HAY, PUEDE QUE NO AN PUBLICADO NADA AUN."}
}
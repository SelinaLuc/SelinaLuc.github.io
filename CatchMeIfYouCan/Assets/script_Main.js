#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	if(GUI.Button (Rect(750, 400, 90, 50), "Start Game" )) {
		print("start game");

		Application.LoadLevel ("LevelOne");
	}

	// if(GUI.Button (Rect(850, 25, 90, 50), "Exit Game" )) {
	// 	print("exit");

	// 	Application.Quit ();
	// }


}
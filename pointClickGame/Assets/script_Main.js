#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	if(GUI.Button (Rect(200, 100, 90, 50), "Start Game" )) {
		print("start game");

		Application.LoadLevel ("LevelOne");
	}

	if(GUI.Button (Rect(200, 200, 90, 50), "Exit Game" )) {
		print("exit");

		Application.Quit ();
	}


}
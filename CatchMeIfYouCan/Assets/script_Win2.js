#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Label(Rect (400, 10, 100, 40), "You Win!");

	if(GUI.Button (Rect(400, 250, 90, 50), "Play again")) {

		print("Start game");

		Application.LoadLevel ("LevelOne");
	}

	// if(GUI.Button (Rect(850, 25, 90, 50), "Exit Game" )) {
	// 	print("exit");

	// 	Application.Quit ();
	// }

}
#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Label(Rect (400, 10, 100, 40), "You Lose!");

	if(GUI.Button (Rect(400, 200, 90, 50), "Play again")) {

		print("Start game");

		Application.LoadLevel ("LevelOne");
	}

	// quit Button
	// if(GUI.Button (Rect(400, 450, 90, 50), "Exit Game" )) {
	// 	print("exit");

	// 	Application.Quit ();
	// }
}

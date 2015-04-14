#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Label(Rect (200, 10, 100, 40), "You Win!");

	if(GUI.Button (Rect(200, 100, 90, 50), "Play again")) {

		print("Start game");

		Application.LoadLevel ("LevelOne");
	}
}
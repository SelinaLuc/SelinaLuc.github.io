#pragma strict

// player Script

// inspector variables (public)
var tagName    : String;
var rayDistance:float = 100.0;
var score : int = 0; // holds the players score 
var totalGameTime : float = 30.0;
var levelLoadWaitTime : float = 2.0;
var numberOfPointsToWin : int = 20;

function Start () {
	//invoke the countdown function once every second
	InvokeRepeating("CountDown", 1.0, 1.0);

}

// called throughout the game to update the state of the game
function Update () {

	// use mouse button to select on gameObjects in the scene
	if(Input.GetMouseButtonDown(0)) {
		//Debug.Log("Pressed left click.");
		
		// get pixel coordinates position of the mouse
		var rayOrigin    : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		// check if mouse click collided with game object(s)
		var hitDirection : RaycastHit;
			
		
		// if the left click collided with and object do something
		if(Physics.Raycast(rayOrigin, hitDirection, 100.0)) {
			
			// checking to see if the object collided is tagged "enemy"
			if(hitDirection.transform.tag == tagName) {
			
				Debug.Log("you hit an object");
				
				// get random position
				//var randomPosition = Vector3(Random.Range(-6, 6), Random.Range(-4,4), 0);
				// move my object to a new random position
				//hitDirection.transform.position = randomPosition;
				
				
				var enemyScript = hitDirection.transform.GetComponent (script_Enemy);
				
				enemyScript.numberOfClicks -= 1;


				if (enemyScript.numberOfClicks <=0 ) {
					score += enemyScript.enemyPoint ;
				}
				
				}	
					
		}
		else {
			Debug.Log("Pressed left button.");
		}
	}

}
/* my function */

// countdown our totalGameTime
function CountDown () {

	if (--totalGameTime <= 0) {

		CancelInvoke("CountDown"); // built in unity function takes a string

		if (score >= numberOfPointsToWin) {
			Application.LoadLevel("sceneWin");
		}
		else {
			Application.LoadLevel("sceneLose");
		}
	}
}

function OnGUI () {
	// draw a rectangle and display score 
	GUI.Label( Rect (10, 10, 100, 20), "Score: " + score ); 

	//draw a rectangle and display time
	GUI.Label( Rect (10, 25, 100, 20), "Time: " + totalGameTime );
}



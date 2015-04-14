#pragma strict

//public variables
var numberOfClicks : int = 2;
var reappearTime : float = 2.0;
var shapeColor : Color[]; //random colors array
var explosion : Transform; //holds explosion prefab
var enemyPoint : int = 1; //point after defeat enemy

private var storeClicks : int;
function Start () {

	//
	if (numberOfClicks <=0) {
		storeClicks = 1;
		numberOfClicks = 1;
	}
		

	else{
		storeClicks = numberOfClicks;
	}

	RandomPosition ();
	//RandomColor ();

}

function Update () {
	if(numberOfClicks <= 0) {
	
			if(explosion) {

			var explosionInstance = Instantiate(explosion, transform.position, transform.rotation);

			//destroy explosion clone
			Destroy(explosionInstance.gameObject, 2);

			if(audio.clip) {
				audio.Play();
			}
		}

		ReappearWaitTime();

		
		RandomPosition ();
		
		//reset # of clicks to 2
		numberOfClicks = 2;

		//RandomColor();



	}


}

	//create a delay time between reappearance
	function ReappearWaitTime () {
	
		//make object invisible
		gameObject.renderer.enabled = false;
		
		//wait for a few secs
		yield WaitForSeconds(reappearTime);
		
		//make object visible again
		gameObject.renderer.enabled = true;
	}
	
	//change oject to random color before appearing
	//function RandomColor () {
	
	// 	var newColor = Random.RandomRange (0, shapeColor.length);

	// 	gameObject.renderer.material.color = shapeColor[newColor];




	// }

	function RandomPosition () {
		//position of next appearnce
		var randomPosition = Vector3(Random.RandomRange(-6,6) , Random.Range(-4,4), 0);
		
		//put random position insode our transform position
		transform.position = randomPosition;
	}
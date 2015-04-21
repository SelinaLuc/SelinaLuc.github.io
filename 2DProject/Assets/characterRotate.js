#pragma strict

var a = 1;
var b = 2;
var c = 3;

var myPlayer : Transform;

function Start () {
//Happens when the game/script is called.
//It only happens once.
}

function Update () {
//Game Loop.
//Is called many many times. 60 times a second.
	if( a==1 )
	{
		myPlayer.Rotate(24,0,0);
	}

	else if ( a==2 )
	{
		myPlayer.Rotate(1,0,0);
	}

	else
	{
		myPlayer.Rotate(0,0,1);
	}


}

function shoot() {
//check for shoot button pressed.
//shoot the projectile.

}
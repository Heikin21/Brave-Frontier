function VargasToggle() {
  if (document.getElementById("Vargas").style.visibility === 'visible') {
    document.getElementById("Vargas").style.visibility = 'hidden';
  } else {
    document.getElementById("Vargas").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Vargas';
    	document.getElementById('Lance').style.visibility = 'hidden';
    	document.getElementById('Eze').style.visibility = 'hidden';
    	document.getElementById('Selena').style.visibility = 'hidden';
    	document.getElementById('Atro').style.visibility = 'hidden';
    	document.getElementById('Magress').style.visibility = 'hidden';
  }
}
function LanceToggle() {
  if (document.getElementById("Lance").style.visibility === 'visible') {
    document.getElementById("Lance").style.visibility = 'hidden';
  } else {
    document.getElementById("Lance").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Lance';
    	document.getElementById('Vargas').style.visibility = 'hidden';
    	document.getElementById('Eze').style.visibility = 'hidden';
    	document.getElementById('Selena').style.visibility = 'hidden';
    	document.getElementById('Atro').style.visibility = 'hidden';
    	document.getElementById('Magress').style.visibility = 'hidden';
  }
}
function EzeToggle() {
  if (document.getElementById("Eze").style.visibility === 'visible') {
    document.getElementById("Eze").style.visibility = 'hidden';
  } else {
    document.getElementById("Eze").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Eze';
    	document.getElementById('Lance').style.visibility = 'hidden';
    	document.getElementById('Vargas').style.visibility = 'hidden';
    	document.getElementById('Selena').style.visibility = 'hidden';
    	document.getElementById('Atro').style.visibility = 'hidden';
    	document.getElementById('Magress').style.visibility = 'hidden';
  }
}
function SelenaToggle() {
  if (document.getElementById("Selena").style.visibility === 'visible') {
    document.getElementById("Selena").style.visibility = 'hidden';
  } else {
    document.getElementById("Selena").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Selena';
    	document.getElementById('Lance').style.visibility = 'hidden';
    	document.getElementById('Eze').style.visibility = 'hidden';
    	document.getElementById('Vargas').style.visibility = 'hidden';
    	document.getElementById('Atro').style.visibility = 'hidden';
    	document.getElementById('Magress').style.visibility = 'hidden';
  }
}
function AtroToggle() {
  if (document.getElementById("Atro").style.visibility === 'visible') {
    document.getElementById("Atro").style.visibility = 'hidden';
  } else {
    document.getElementById("Atro").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Atro';
    	document.getElementById('Lance').style.visibility = 'hidden';
    	document.getElementById('Eze').style.visibility = 'hidden';
    	document.getElementById('Selena').style.visibility = 'hidden';
    	document.getElementById('Vargas').style.visibility = 'hidden';
    	document.getElementById('Magress').style.visibility = 'hidden';
  }
}
function MagressToggle() {
  if (document.getElementById("Magress").style.visibility === 'visible') {
    document.getElementById("Magress").style.visibility = 'hidden';
  } else {
    document.getElementById("Magress").style.visibility = 'visible';
    document.getElementById('HeroName').innerHTML = 'Magress';
    	document.getElementById('Lance').style.visibility = 'hidden';
    	document.getElementById('Eze').style.visibility = 'hidden';
    	document.getElementById('Selena').style.visibility = 'hidden';
    	document.getElementById('Atro').style.visibility = 'hidden';
    	document.getElementById('Vargas').style.visibility = 'hidden';
  }
}

    // return true if the 2 circles are colliding
    // c1 and c2 are circles 

    function kollisionCircleCircle(c1,c2){
        let dx=c2.x-c1.x;
        let dy=c2.y-c1.y;
        let rSum=c1.r+c2.r;
        return(dx*dx+dy*dy<=rSum*rSum);
    };
	
	//#########################################################
	function kollisionCircleRect(circle,rect){
    let distX = Math.abs(circle.x - rect.x-rect.w/2);
    let distY = Math.abs(circle.y - rect.y-rect.h/2);

    if (distX > (rect.w/2 + circle.r)) { return false; }
    if (distY > (rect.h/2 + circle.r)) { return false; }

    if (distX <= (rect.w/2)) { return true; } 
    if (distY <= (rect.h/2)) { return true; }

    let dx=distX-rect.w/2;
    let dy=distY-rect.h/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
	};

	//#############################################################
	function kollisionRectRect(a,b){
		if(a.x < b.x + b.w && 
			a.x + a.w > b.x &&
			a.y < b.y + b.h &&
			a.y + a.h > b.y){
			return true;
			}else{
			return false;
			}
			
	};
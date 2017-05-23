Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}

Vec3.prototype.add=function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function(){
    if((this.x<this.y)&&(this.x<this.z)){
	return this.x;
    }else if((this.y<this.x)&&(this.y<this.z)){
	return this.y;
    }
    return this.z;
}

Vec3.prototype.mid = function(){
    if((this.x>=this.y)&&(this.x<=this.z)){
	return this.x;
    }else if((this.x<=this.y)&&(this.x>=this.z)){
	return this.x;
    }else   if((this.y>=this.x)&&(this.y<=this.z)){
	return this.y;
    }else if((this.y<=this.x)&&(this.y>=this.z)){
	return this.y;
    }
    return this.z;
}

Vec3.prototype.max = function(){
    if((this.x>this.y)&&(this.x>this.z)){
	return this.x;
    }else if((this.y>this.x)&&(this.y>this.z)){
	return this.y;
    }
    return this.z;
}

function AreaOfTriangle(v0,v1,v2){
    document.write("v0 = ( ",v0.x," , ",v0.y," , ",v0.z," )");
    document.write("<BR>","v1 = ( ",v1.x," , ",v1.y," , ",v1.z," )");
    document.write("<BR>","v2 = ( ",v2.x," , ",v2.y," , ",v2.z," )");
    var AB_x=v1.x-v0.x,AB_y=v1.y-v0.y,AB_z=v1.z-v0.z;
    var AC_x=v2.x-v0.x,AC_y=v2.y-v0.y,AC_z=v2.z-v0.z;
    var a=AB_y*AC_z-AB_z*AC_y;
    var b=AB_z*AC_x-AB_x*AC_z;
    var c=AB_x*AC_y-AB_y*AC_x;
    var s= Math.sqrt(a*a+b*b+c*c);
	
    return s/2;
}

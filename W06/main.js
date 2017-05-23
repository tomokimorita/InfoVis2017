function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    var vertices = [
	[-1,1,0],
	[-1,-1,0],
	[1,-1,0],
	[1,1,0],
	[-1,1,-2],
	[-1,-1,-2],
	[1,-1,-2],
	[1,1,-2]
    ];
    var faces =[
	[0,1,2],
	[2,3,0],
	[0,4,5],
	[5,1,0],
	[0,3,7],
	[7,4,0],
	[7,3,2],
	[2,6,7],
	[6,2,1],
	[1,5,6],
	[6,5,4],
	[4,7,6]
    ];

    var v = ['v0','v1','v2','v3','v4','v5','v6','v7'];
for(var i=0;i<8;i++){
    v[i] = new THREE.Vector3().fromArray(vertices[i]);
    }

    var f = ['f0','f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11'];
    for(var i=0;i<12;i++){
    var id = faces[i];
     f[i] = new THREE.Face3(id[0],id[1],id[2]);
    }
    

    var geometry = new THREE.Geometry();

    for(var i=0;i<8;i++){
	geometry.vertices.push(v[i]);
    }

     for(var i=0;i<12;i++){
    geometry.faces.push(f[i]);
     }
	 
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
         for(var i=0;i<12;i++){
    geometry.faces[i].color = new THREE.Color(1,1,1);
	 }

    var Triangle = new THREE.Mesh(geometry,material);

    scene.add(Triangle);
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        Triangle.rotation.x += 0.001;
        Triangle.rotation.y += 0.001;
        renderer.render( scene, camera );
    }

    
}

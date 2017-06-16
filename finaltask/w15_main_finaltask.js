function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue ,3);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });
 
  


      //phoneのボタンを押した場合
    document.getElementById('shading-Phone-button')
    .addEventListener('click', function() {
                      screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,1);
                      screen.scene.add( surfaces );

                      });
    
    //gouraudのボタンを押した場合
    document.getElementById('shading-Gouraud-button')
    .addEventListener('click', function() {
                       screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,2);
                      screen.scene.add( surfaces );

                      });
    
    //lambertianのボタンを押した場合
    document.getElementById('shading-Lambertian-button')
    .addEventListener('click', function() {
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,3);
                      screen.scene.add( surfaces );
                      
                      });
    
    screen.loop();
}

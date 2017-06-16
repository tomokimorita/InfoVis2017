function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var shard = 3;

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue ,shard);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });
 
  
    //Isovalue applyのボタンを押した場合
    document.getElementById('change-isovalue-button')
    .addEventListener('click', function() {
                      isovalue=document.forms.fm.x0.value;
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,shard);
                      screen.scene.add( surfaces );
                      
                      });

      //phoneのボタンを押した場合
    document.getElementById('shading-Phone-button')
    .addEventListener('click', function() {
                      shard = 1;
                      screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,shard);
                      screen.scene.add( surfaces );

                      });
    
    //gouraudのボタンを押した場合
    document.getElementById('shading-Gouraud-button')
    .addEventListener('click', function() {
                      shard = 2;
                       screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,shard);
                      screen.scene.add( surfaces );

                      });
    
    //lambertianのボタンを押した場合
    document.getElementById('shading-Lambertian-button')
    .addEventListener('click', function() {
                      shard = 3;
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,shard);
                      screen.scene.add( surfaces );
                      
                      });
    
    screen.loop();
}

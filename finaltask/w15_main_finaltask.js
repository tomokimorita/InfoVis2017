function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var shard = 3;
    var st = 0;
    var ed = 255;

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
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
                      surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
                      screen.scene.add( surfaces );
                      
                      });

      //phoneのボタンを押した場合
    document.getElementById('shading-Phone-button')
    .addEventListener('click', function() {
                      shard = 1;
                      screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
                      screen.scene.add( surfaces );

                      });
    
    //gouraudのボタンを押した場合
    document.getElementById('shading-Gouraud-button')
    .addEventListener('click', function() {
                      shard = 2;
                       screen.scene.remove( surfaces );
 surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
                      screen.scene.add( surfaces );

                      });
    
    //lambertianのボタンを押した場合
    document.getElementById('shading-Lambertian-button')
    .addEventListener('click', function() {
                      shard = 3;
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
                      screen.scene.add( surfaces );
                      
                      });
    /*
    //Color chamge applyのボタンを押した場合
    document.getElementById('change-color-button')
    .addEventListener('click', function() {
                     st=document.forms.fm2.y0.value;
                     ed=document.forms.fm2.z0.value;
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,shard,0,255);
                      screen.scene.add( surfaces );
                      
                      });
     */
    //Resetのボタンを押した場合
    document.getElementById('reset-button')
    .addEventListener('click', function() {
                      isovalue=128;
                      st=0;
                      ed=255;
                      shard=3;
                      screen.scene.remove( surfaces );
                      surfaces = Isosurfaces( volume, isovalue ,shard,st,ed);
                      screen.scene.add( surfaces );
                      
                      });


    
    screen.loop();
}

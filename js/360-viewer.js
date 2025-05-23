// 360-degree viewer functionality
export function initialize360Viewer(containerId, imageUrl) {
    return pannellum.viewer(containerId, {
      type: 'equirectangular',
      panorama: imageUrl,
      autoLoad: true,
      autoRotate: -2,
      compass: false,
      hfov: 100,
      showControls: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false
    });
  }
  
  export function setupViewerControls(viewer) {
    // Rotate left
    document.getElementById('rotate-left')?.addEventListener('click', () => {
      const yaw = viewer.getYaw();
      viewer.setYaw(yaw - 30);
    });
  
    // Rotate right
    document.getElementById('rotate-right')?.addEventListener('click', () => {
      const yaw = viewer.getYaw();
      viewer.setYaw(yaw + 30);
    });
  
    // Zoom in
    document.getElementById('zoom-in')?.addEventListener('click', () => {
      const hfov = viewer.getHfov();
      viewer.setHfov(hfov - 10);
    });
  
    // Zoom out
    document.getElementById('zoom-out')?.addEventListener('click', () => {
      const hfov = viewer.getHfov();
      viewer.setHfov(hfov + 10);
    });
  }
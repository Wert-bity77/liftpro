// QR Code generation functionality
export function generateQRCode(elementId, data) {
    const qrContainer = document.getElementById(elementId);
    if (!qrContainer) return;
  
    // Clear previous QR code
    qrContainer.innerHTML = '';
  
    // Generate new QR code
    new QRCode(qrContainer, {
      text: data,
      width: 200,
      height: 200,
      colorDark: '#3d56b2',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  
  // Show QR code modal
  export function showQRModal(modelId) {
    const modal = document.getElementById('qr-modal');
    const qrContainer = document.getElementById('qrcode');
    
    if (!modal || !qrContainer) return;
  
    // Generate QR code URL
    const baseUrl = window.location.origin;
    const qrUrl = `${baseUrl}/view-360.html?model=${modelId}`;
  
    // Generate QR code
    generateQRCode('qrcode', qrUrl);
  
    // Show modal
    modal.classList.add('active');
  }
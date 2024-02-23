'use strick';

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
  }
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
  }
// Check screen size on load
window.addEventListener('load', function() {
    checkScreenSize();
  });
  
  // Check screen size on resize
  window.addEventListener('resize', function() {
    checkScreenSize();
  });
  
  function checkScreenSize() {
    const screenWidth = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
  
    if (screenWidth < 1200) {
      sidebar.style.display = 'flex'; // Show toggle button
      sidebar.style.justifyContent = 'center';
      sidebar.style.alignItem = 'center';
    } else {
      sidebar.style.display = 'none'; // Hide toggle button
    }
  }

  const images = [
    { url: "../Images/solar-system-2939551_1920.jpg" },
    { url: "../Images/renewable-1989416_1920.jpg" },
    { url: "../Images/panel-2562239_1920.jpg" }
  ];
  
  function changeImage() {
    const imageContainer = document.querySelector("#image_container");
    const displayImage = document.createElement("img");
    let currentIndex = 0;
  
    // Function to change the image every 5 seconds
    function rotateImages() {
      displayImage.src = images[currentIndex].url;
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image index
      setTimeout(rotateImages, 3000); // Call this function again after 5 seconds
    }
  
    // Initially display the first image
    displayImage.src = images[currentIndex].url;
    imageContainer.appendChild(displayImage);
  
    // Start rotating images after 5 seconds
    setTimeout(rotateImages, 3000);
  }
  



  const images2 = [
    { url: "../Images/WhatsApp Image 2024-02-23 at 07.14.22_eefe2e36.jpg" },
    { url: "../Images/WhatsApp Image 2024-02-23 at 07.14.22_1de05d9c.jpg" },
    { url: "../Images/WhatsApp Image 2024-02-23 at 07.14.20_eb1e7fac.jpg" },
    { url: "../Images/WhatsApp Image 2024-02-23 at 07.14.17_c466eafe.jpg" },
    { url: "../Images/WhatsApp Image 2024-02-23 at 07.14.18_3e67424e.jpg" },
  ];

  function changeImage2(){
    const galleriesImageContainer = document.querySelector(".galleries_image");
    const displayImage2  = document.createElement("img");
    let currentIndex2 = 0;
    function rotateImages2(){
        displayImage2.src = images2[currentIndex2].url;
        currentIndex2 = (currentIndex2 +1) % images2.length;
        setTimeout(rotateImages2, 3000);
    }
    displayImage2.src = images2[currentIndex2].url;
    galleriesImageContainer.appendChild(displayImage2);
    setTimeout(rotateImages2, 3000);
  }
  changeImage();
  changeImage2()
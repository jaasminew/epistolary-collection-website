function addAllTabs(){

  const folder = document.querySelector(".folder");

  const listOfTitle = ["Letters To The Future", 
  "Dear Data", 
  "The Gorgeous Nothings", 
  "Written-With-Threads",
  "Tape Letters", 
  "The Letter Writing Project", 
  "A Monologue For You",
  "Illustrated Letters",
  "Giant Letter",
  "Concrete Envelope",
  "Book From The Sky",
  "Tiny Mail",
  "Letter Home",
  "Mail Art",
  "Sky Ladder",
  "Ambiguous Documents",
  "Take Care Of Yourself",
  "Alfred Frueh's Letter",
  "Letter With Map",
  "Letters To emilie Bohm"];

  const listOfDescription = ["Letters written on plastic bags", 
  "Postcards embeding data", 
  "Emily Dickinson's letter collection", 
  "Art project by Rima Day",
  "Recording and sending messages on cassette tape", 
  "Mixed media interactive installation", 
  "An artist book by AD. Mistroom",
  "Albred Joseph Frueh to Giuliette Fanciulli",
  "An art Installation Project",
  "Microsoft marketing campaign in August 2009",
  "Installation of hand-printed books and ceiling and wall scrolls printed from wood letterpress type",
  "A tiny post office at a bakery Oakland, CA",
  "A letter written in sound waves",
  "A movement based on the principles of sending small scale works through the postal service",
  "A firework performance by contemporary artist Cai Guo-Qiang",
  "An artwork by Ania Wawrzkowicz",
  "A mixed media installation by Sophie Calle",
  "A letter home to Frueh’s wife Giuliette",
  "A letter from Connecticut to New York by Alexander Calder",
  "An illustrated letter from Max Bohm to Emilie Bohm"];

  const listOfLink = [
      "https://kisaigon.com/letters-to-the-future/", 
      "https://www.dear-data.com/theproject", 
      "https://terreyrocoreograficoblog.files.wordpress.com/2016/10/emily_dickinson.pdf", 
      "https://www.rimadayart.com/written-with-threads", 
      "https://tapeletters.com/",
      "https://www.perrotin.com/artists/lee_mingwei/550/the-letter-writing-project/48699", 
      "https://www.behance.net/gallery/64766025/A-monologue-for-you?locale=en_US&", 
      "https://www.si.edu/object/alfred-joseph-frueh-giuliette-fanciulli:AAADCD_item_3207",
      "https://giantletter.com/",
      "https://www.adsoftheworld.com/campaigns/concrete-envelope",
      "https://www.metmuseum.org/art/collection/search/77468",
      "https://leafcutterdesigns.com/tiny-mail/",
      "https://twitter.com/Lirographe/status/1709303849738002895",
      "https://www.tate.org.uk/art/art-terms/m/mail-art",
      "https://www.thisiscolossal.com/2015/08/sky-ladder-cai-guo-qiang/",
      "https://www.aniawawrzkowicz.com/filter/art/Ambiguous-Documents",
      "https://www.perrotin.com/artists/Sophie_Calle/1/take-care-of-yourself-complete-set/12963",
      "https://www.architectural-review.com/essays/folio/folio-alfred-joseph-fruehs-letter",
      "https://www.si.edu/object/alexander-calder-roxbury-connecticut-letter-ben-shahn-new-york-new-york:AAADCD_item_504",
      "https://www.si.edu/object/max-bohm-emilie-bohm:AAADCD_item_1910"];

  for (let i = 0; i < 20; i++) {

    
    // Create a new div element
    const boxSrc = "/img/file-img/file-" + (20 - i) + ".png"; // Change the image source
    const boxAlt = "File png"; // Change the alt text
    const text1 = listOfTitle[20 - (i + 1)];
    const text2 = listOfDescription[20 - (i + 1)];
    const imageSrc = "/img/file-img-within/file-"+(20 - i)+"-img-within.png";
    const imageAlt = "Letters image";
    const imageHref = listOfLink[20 - (i + 1)];
    const count = i;
    
    addTab(folder, boxSrc, boxAlt, text1, text2, imageSrc, imageAlt, imageHref, i);
    
  }
}

function addTab(folder, boxSrc, boxAlt, text1, text2, imageSrc, imageAlt, imageHref, i) {
  const newFile = document.createElement("DIV");
  newFile.className = "file";
  newFile.style.position = "absolute";
  newFile.style.left = 400 - i * 4 + "px";
  newFile.style.top = 400 + i * 25 + "px";
  newFile.style.zIndex = i + 2;

  const newFilepng = document.createElement("IMG");
  newFilepng.className = "file-img";
  newFilepng.src = boxSrc;//"/img/file-img/file-1.png"; // Change the image source
  newFilepng.alt = boxAlt;//"File png"; // Change the alt text
  newFilepng.height = 650; // Change the height (in pixels)
  newFilepng.width = 926 + i * 8;

  const newFileText = document.createElement("DIV");
  newFileText.className = "file-text";
  const newh1 = document.createElement("H1");
  const newh2 = document.createElement("H2");
  newh1.innerText = text1;//"Dear Data";
  newh2.innerText = text2;//"Postcards embeding data";
  // newh1.style.paddingLeft = "55px";
  // newh2.style.paddingLeft = "55px";

  const newFileImgContainter = document.createElement("DIV");
  newFileImgContainter.className = "file-img-container";
  const newFileImgWithin = document.createElement("IMG");
  newFileImgWithin.className = "file-img-within";
  newFileImgWithin.src = imageSrc; //"/img/file-img/file-1-img-within.png";
  newFileImgWithin.alt = imageAlt; //"Letters image";
  newFileImgWithin.width = 493 + i * 4;
  newFileImgWithin.style.maxHeight = "450px";

  const newImgLink = document.createElement("A");
  newImgLink.className = "img-link";
  newImgLink.href = imageHref; //"https://www.dear-data.com/theproject";
  newImgLink.target = "_blank";

  folder.appendChild(newFile);
  newFile.appendChild(newFilepng);
  newFile.appendChild(newFileText);
  newFile.appendChild(newFileImgContainter);
  newFileText.appendChild(newh1);
  newFileText.appendChild(newh2);
  newFileImgContainter.appendChild(newImgLink);
  newImgLink.appendChild(newFileImgWithin);

  // newFile.addEventListener("click", function() {
  //   // Move the div upward by modifying its top position
  //   const currentTop = parseInt(newFile.style.top) || 0;
  //   const newPosition = currentTop - 400; // Move upward by 20 pixels
  //   newFile.style.top = newPosition + "px";
  // });
  var isDown = true;

  newFile.addEventListener("click", function() {

    if (isDown) {
      // Calculate the target position (top)
      const currentTop = parseInt(window.getComputedStyle(newFile).top);
      const targetTop = currentTop - 400; // Move upward by 400 pixels
    
      // Define the animate function
      function animate() {
        // Get the current position (top)
        const currentTop = parseInt(window.getComputedStyle(newFile).top);
        
        // Calculate the distance to move in each frame
        const distance = -40; // 10 frames for the animation
    
        // Update the position
        newFile.style.top = currentTop + distance + "px";
    
        // Request the next frame
        if (currentTop > targetTop) {
          requestAnimationFrame(animate);
        }
      }
    
      // Call the animate function
      animate();
      // newFile.style.height = 2000 + "px";
      newFile.style.height = newFile.offsetHeight + "px";
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          // Update the container's height to match the content
          newFile.style.height = entry.target.offsetHeight + "px";
        }
      });
      
      // Observe the content element for resize changes
      observer.observe(newFile);
      isDown = false;
    } else {
      // Calculate the target position (top)
      const currentTop = parseInt(window.getComputedStyle(newFile).top);
      const targetTop = currentTop + 400; // Move upward by 400 pixels
  
      // Define the animate function
      function animate2() {
        // Get the current position (top)
        const currentTop = parseInt(window.getComputedStyle(newFile).top);
        
        // Calculate the distance to move in each frame
        const distance = 40; // 10 frames for the animation
    
        // Update the position
        newFile.style.top = currentTop + distance + "px";
    
        // Request the next frame
        if (currentTop < targetTop) {
          requestAnimationFrame(animate2);
        }
      }
    
      // Call the animate function
      animate2();
      isDown = true;
      

      // newFile.style.height = newFile.offsetHeight + "px";
      // const observer = new ResizeObserver(entries => {
      //   for (let entry of entries) {
      //     // Update the container's height to match the content
      //     newFile.style.height = entry.target.offsetHeight + "px";
      //   }
      // });
      
      // // Observe the content element for resize changes
      // observer.observe(newFile);
    }
    
  });

}










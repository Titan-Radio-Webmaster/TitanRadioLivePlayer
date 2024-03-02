//use this bad boy to copy paste into DJ shedule after so you don't have to 
//delete all the shows manually for the beginning of the semester when you need to put in new shows
// <script type="text/javascript"> 
function DJSchedule() {
    var nextDate = new Date();
    var pst = nextDate.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      });     
    nextDate = new Date(pst);
    switch(nextDate.getDay()) {
        case 0:
            switch(nextDate.getHours()) {
                // SUNDAY
                case 0:
                    let text0 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text0)
                        document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "TR Staff")
                        DJname0.innerHTML = "TR Staff";
                    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                    // SUNDAY
                case 7:
                    let text7 = "The Kickback Hour";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ K")
                        DJname7.innerHTML = "DJ K";
                    if(DJbio7.innerHTML !== "DJ K is a 3rd year Communications Major who enjoys many genres of music. His go to artist is blackbear, but is open to whatever recommendations come his way! He’s also a sociable person and enjoys the company of guests on his show!")
                        DJbio7.innerHTML = "DJ K is a 3rd year Communications Major who enjoys many genres of music. His go to artist is blackbear, but is open to whatever recommendations come his way! He’s also a sociable person and enjoys the company of guests on his show!";
                    if(DJshowBio7.innerHTML !== "The Kickback Hour is a show where all music is welcome! Each week, various genres are played through the episodes. Not only will there be music, but guests are welcome to add their own take on music and chat with DJ K himself about music, their lives, and anything else that comes to mind!")
                        DJshowBio7.innerHTML = "The Kickback Hour is a show where all music is welcome! Each week, various genres are played through the episodes. Not only will there be music, but guests are welcome to add their own take on music and chat with DJ K himself about music, their lives, and anything else that comes to mind!";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Rent Free History";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "DJ Kemdi")
                         DJname8.innerHTML = "DJ Kemdi";
                    if (DJbio8.innerHTML !== "Kemdi was told from a young age that he had a face for radio and ever since, he's set out to become the best radio DJ he could be. He's really good at improve and is a fast thinker.")
                         DJbio8.innerHTML = "Kemdi was told from a young age that he had a face for radio and ever since, he's set out to become the best radio DJ he could be. He's really good at improve and is a fast thinker.";
                    if (DJshowBio8.innerHTML !== "A show about moments in history that live rent free in people's heads")
                         DJshowBio8.innerHTML = "A show about moments in history that live rent free in people's heads";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Fairy Soirée";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                    document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Linz")
                         DJname9.innerHTML = "Linz";
                    if (DJbio9.innerHTML !== "Linz did a semester of TR, so why not another round! She loves to share her genre of music with others in hopes for others to enjoy her music!")
                         DJbio9.innerHTML = "Linz did a semester of TR, so why not another round! She loves to share her genre of music with others in hopes for others to enjoy her music!";
                    if (DJshowBio9.innerHTML !== "In the mood to listen to some cute, fairy-like music? say no more ! fairy soirée is the spot for you, with various artists to listen and vibe to ! join the fairy soirée for some fun banter !!")
                         DJshowBio9.innerHTML = "In the mood to listen to some cute, fairy-like music? say no more ! fairy soirée is the spot for you, with various artists to listen and vibe to ! join the fairy soirée for some fun banter !!";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "Bottle Blonde Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                         document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "St. Gemini")
                         DJname10.innerHTML = "St. Gemini";
                    if (DJbio10.innerHTML !== "St. Gemini is inspired by the zodiac celestial twins. She shows duality in her tastes and mixes genres in a way that brings together the yin and yang of sound. She has the music that hurts so good and goes with every season.")
                         DJbio10.innerHTML = "St. Gemini is inspired by the zodiac celestial twins. She shows duality in her tastes and mixes genres in a way that brings together the yin and yang of sound. She has the music that hurts so good and goes with every season.";
                    if (DJshowBio10.innerHTML !== "Bottle Blonde Radio is a show for those with a flair for the dramatic, but wanna do it in a “rock n roll” kinda way. Traveling through soundscapes that explore the gritty spirit of Grunge as well as the melodic brilliance of Indie Pop, this show takes you on a  journey that feels like a night drive or long walk home. Welcome to your sanctuary for authentic, unapologetic music.")
                         DJshowBio10.innerHTML = "Bottle Blonde Radio is a show for those with a flair for the dramatic, but wanna do it in a “rock n roll” kinda way. Traveling through soundscapes that explore the gritty spirit of Grunge as well as the melodic brilliance of Indie Pop, this show takes you on a  journey that feels like a night drive or long walk home. Welcome to your sanctuary for authentic, unapologetic music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 11:
                    let text11 = "Bubbles and Grunge";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                         document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "Seener")
                         DJname11.innerHTML = "Seener";
                    if (DJbio11.innerHTML !== "Seener is an animation student that loves listening and learning about music. When she’s not creating art, she enjoys organizing her favorite songs to curate the most perfect playlist on Spotify for any mood, niche genre, or whatever she feels that day. She hopes to help listeners learn fun facts about sub-genres and music communities they may have never heard of!")
                         DJbio11.innerHTML = "Seener is an animation student that loves listening and learning about music. When she’s not creating art, she enjoys organizing her favorite songs to curate the most perfect playlist on Spotify for any mood, niche genre, or whatever she feels that day. She hopes to help listeners learn fun facts about sub-genres and music communities they may have never heard of!";
                    if (DJshowBio11.innerHTML !== "Tune into my show for a journey into an eclectic blend of hand-picked songs. Every week I’ll explore many genres (and sub-genres) of a wide range of artists and niches. We’ll explore anything from softer listens like Alt, indie, and folk, to more heavy listens like metal, grunge, nu-metal, and anything in between! If you love learning about music like me and broadening your musical library, then I hope you’d enjoy my show. ")
                         DJshowBio11.innerHTML = "Tune into my show for a journey into an eclectic blend of hand-picked songs. Every week I’ll explore many genres (and sub-genres) of a wide range of artists and niches. We’ll explore anything from softer listens like Alt, indie, and folk, to more heavy listens like metal, grunge, nu-metal, and anything in between! If you love learning about music like me and broadening your musical library, then I hope you’d enjoy my show. ";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 12:
                    let text12 = "Chisme Something";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                         document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "DJ Itzel")
                         DJname12.innerHTML = "DJ Itzel";
                    if (DJbio12.innerHTML !== "Itzel is just a really cool and relaxed person. She always has bright and creative ideas iin her head and would love the opportunity to explore them.")
                         DJbio12.innerHTML = "Itzel is just a really cool and relaxed person. She always has bright and creative ideas iin her head and would love the opportunity to explore them.";
                    if (DJshowBio12.innerHTML !== "The show would be just like a little show and we would tell other peoples drama stories and give our advice and stuff every week. Like they would share really detailed stories about themselves or family anonymously.")
                         DJshowBio12.innerHTML = "The show would be just like a little show and we would tell other peoples drama stories and give our advice and stuff every week. Like they would share really detailed stories about themselves or family anonymously.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 13:
                    let text13 = "Daydreaming";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                         document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "Emmie")
                         DJname13.innerHTML = "Emmie";
                    if (DJbio13.innerHTML !== "")
                         DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                         DJshowBio13.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
    
                case 14:
                    let text14 = "Playlisting with Blondie";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                         document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "DJ Blondie")
                         DJname14.innerHTML = "DJ Blondie";
                    if (DJbio14.innerHTML !== "Sophia is a hardcore music lover and concert enthusiast. She has an extremely wide range taste in music, going from classic rock, to hardcore punk, to funky jazz. She overall loves collecting vinyls, drinking iced vanilla lattes, and talking about upcoming events in town. She plans on working with a record label in production after graduating")
                         DJbio14.innerHTML = "Sophia is a hardcore music lover and concert enthusiast. She has an extremely wide range taste in music, going from classic rock, to hardcore punk, to funky jazz. She overall loves collecting vinyls, drinking iced vanilla lattes, and talking about upcoming events in town. She plans on working with a record label in production after graduating";
                    if (DJshowBio14.innerHTML !== "Whether it's local bands from Orange County, or big bands from all around, there's good music everywhere. Playlisting with Blondie is all about experiencing life through music. Playlisting with Blondie brings you a good mix of indie, rock, psychedelic, grunge, punk, and some funk to get you through you day.")
                         DJshowBio14.innerHTML = "Whether it's local bands from Orange County, or big bands from all around, there's good music everywhere. Playlisting with Blondie is all about experiencing life through music. Playlisting with Blondie brings you a good mix of indie, rock, psychedelic, grunge, punk, and some funk to get you through you day.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 15:
                    let text15 = "The Room is on Fire";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                         document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "DJ Alexa Lei")
                         DJname15.innerHTML = "DJ Alexa Lei";
                    if (DJbio15.innerHTML !== "Alexa Lei is a red hair'd bubbly girl with a charming taste for music. She's a sleazy first-year with hopes of working with bands similar to what you'll hear on her radio. All and all she just wants to be one of The Strokes. ")
                         DJbio15.innerHTML = "Alexa Lei is a red hair'd bubbly girl with a charming taste for music. She's a sleazy first-year with hopes of working with bands similar to what you'll hear on her radio. All and all she just wants to be one of The Strokes. ";
                    if (DJshowBio15.innerHTML !== "Listen to some shoe-gaze for when you're in a daze! Pop in for momentary bliss and enjoy music ranging from Garage Rock, SynthPop, and some good casual male manipulator music. Make sure to stay for some commentary between me and friends!")
                         DJshowBio15.innerHTML = "Listen to some shoe-gaze for when you're in a daze! Pop in for momentary bliss and enjoy music ranging from Garage Rock, SynthPop, and some good casual male manipulator music. Make sure to stay for some commentary between me and friends!";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 16:
                    let text16 = "Special K";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                         document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Special Kittykat")
                         DJname16.innerHTML = "Special Kittykat";
                    if (DJbio16.innerHTML !== "Special K brings out different types of music that show case her personality and all the different parts of her. Very avant-garde with every show, she’s a wild card that also inspires her listeners to stay true to themselves. ")
                         DJbio16.innerHTML = "Special K brings out different types of music that show case her personality and all the different parts of her. Very avant-garde with every show, she’s a wild card that also inspires her listeners to stay true to themselves. ";
                    if (DJshowBio16.innerHTML !== "Every show is unique in the way that it has a rough blue print and the magic of the show is candid. The music, the talks, the guest stars are what also makes it so special. ")
                         DJshowBio16.innerHTML = "Every show is unique in the way that it has a rough blue print and the magic of the show is candid. The music, the talks, the guest stars are what also makes it so special. ";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                        
                case 17:
                    let text17 = "Sonic Alchemy";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                         document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "DJ Kary")
                         DJname17.innerHTML = "DJ Kary";
                    if (DJbio17.innerHTML !== " I try to build connections with music to show how music connects to me. I love to show other’s new music, and be shown new music. I’ll try every new genre at least once.")
                         DJbio17.innerHTML = " I try to build connections with music to show how music connects to me. I love to show other’s new music, and be shown new music. I’ll try every new genre at least once.";
                    if (DJshowBio17.innerHTML !== "Redefine your fundamentals of music! Each track flows like a carefully brewed elixir! Let the music transform you like a spell!")
                         DJshowBio17.innerHTML = "Redefine your fundamentals of music! Each track flows like a carefully brewed elixir! Let the music transform you like a spell!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 18:
                    let text18 = "dinner with vane";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                         document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "el vane")
                         DJname18.innerHTML = "el vane";
                    if (DJbio18.innerHTML !== "el vane is a third year comm major transfer student who enjoys every genre of music, yes all of them. the goal of vane's radio show is to hopefully share some new music with listeners and at the very least, revisit the bangers.")
                         DJbio18.innerHTML = "el vane is a third year comm major transfer student who enjoys every genre of music, yes all of them. the goal of vane's radio show is to hopefully share some new music with listeners and at the very least, revisit the bangers.";
                    if (DJshowBio18.innerHTML !== "")
                         DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Not a Phase";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                         document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "Anais")
                         DJname19.innerHTML = "Anais";
                    if (DJbio19.innerHTML !== "Growing up attending Warped Tour and local shows, Anais has always adored the sense of community and belonging this music has brought to her and those who enjoy it. Anais is eager to bring this same community and nostalgia to CSUF through her musical picks each week.")
                         DJbio19.innerHTML = "Growing up attending Warped Tour and local shows, Anais has always adored the sense of community and belonging this music has brought to her and those who enjoy it. Anais is eager to bring this same community and nostalgia to CSUF through her musical picks each week.";
                    if (DJshowBio19.innerHTML !== "A show for fans of Post-hardcore, pop-punk, melodic hardcore, hardcore punk, shoegaze, and emo. Current and throwback, it’s not a phase, mom!")
                         DJshowBio19.innerHTML = "A show for fans of Post-hardcore, pop-punk, melodic hardcore, hardcore punk, shoegaze, and emo. Current and throwback, it’s not a phase, mom!";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                        
                case 20:
                    let text20 = "Oh Bam! With Sam :p";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                         document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "SamX")
                         DJname20.innerHTML = "SamX";
                    if (DJbio20.innerHTML !== "I am a first generation Salvadorian student at CSUF who has always loved to dance! I love cumbias and salsas as well as new wave spanish rock and indie hispanic artists as well. I think I’d make a great addition to Titan Radio as I would provide lots of fun, upbeat sessions that represent our hispanic student body!")
                         DJbio20.innerHTML = "I am a first generation Salvadorian student at CSUF who has always loved to dance! I love cumbias and salsas as well as new wave spanish rock and indie hispanic artists as well. I think I’d make a great addition to Titan Radio as I would provide lots of fun, upbeat sessions that represent our hispanic student body!";
                    if (DJshowBio20.innerHTML !== "I want to be a DJ that welcomes everyone and just curates good vibes for the whole day. I’d love to be the Latinx representation that I’ve been wanting to see more of within CSUF. I have classic spanish party song playlists and soft study sessions with an emphasis on being a first generation student. ")
                         DJshowBio20.innerHTML = "I want to be a DJ that welcomes everyone and just curates good vibes for the whole day. I’d love to be the Latinx representation that I’ve been wanting to see more of within CSUF. I have classic spanish party song playlists and soft study sessions with an emphasis on being a first generation student. ";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                        
                case 21:
                    let text21 = "Harrison the Goofball Show";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                         document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "Harrison The Goofball Gomes")
                         DJname21.innerHTML = "Harrison The Goofball Gomes";
                    if (DJbio21.innerHTML !== "I am Harrison The Goofball and I am your wacky radio dj. Tune into my show to hear all the best music from the likes of Weird Al, Cheech and Chong, Adam Sandler, and more!")
                         DJbio21.innerHTML = "I am Harrison The Goofball and I am your wacky radio dj. Tune into my show to hear all the best music from the likes of Weird Al, Cheech and Chong, Adam Sandler, and more!";
                    if (DJshowBio21.innerHTML !== "Comedy/novelty songs, bits, skits, and games.")
                         DJshowBio21.innerHTML = "Comedy/novelty songs, bits, skits, and games.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                        
                case 22:
                    let text22 = "SariTunes";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "DJ Sari")
                         DJname22.innerHTML = "DJ Sari";
                    if (DJbio22.innerHTML !== "Sari entered the scene in the mid 2010s, admiring artists like Baauer, RL Grime, and Krane. As the years passed and his taste expanded, an insatiable search for the next big sounds emerged. With a love for sharing music he hopes to bring you tunes you’ll keep coming back to!")
                         DJbio22.innerHTML = "Sari entered the scene in the mid 2010s, admiring artists like Baauer, RL Grime, and Krane. As the years passed and his taste expanded, an insatiable search for the next big sounds emerged. With a love for sharing music he hopes to bring you tunes you’ll keep coming back to!";
                    if (DJshowBio22.innerHTML !== "Trap, Drum n Bass, House, Techno, and some more. a curated collection of certified dingers from the past and present, for those familiar with the electronic scene, and to introduce palatable sounds to those unacquainted.")
                         DJshowBio22.innerHTML = "Trap, Drum n Bass, House, Techno, and some more. a curated collection of certified dingers from the past and present, for those familiar with the electronic scene, and to introduce palatable sounds to those unacquainted.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                        
                case 23:
                    let text23 = "Dollhouse Disco";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                         document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "DJ BINK")
                         DJname23.innerHTML = "DJ BINK";
                    if (DJbio23.innerHTML !== "DJ Bink is the alter ego of Sam Davis, a fourth-year communications major at CSUF. When she's not in class or looking for parking, Sam can be found immersing herself in the world of live EDM shows and festivals, where her passion for house music was born.")
                         DJbio23.innerHTML = "DJ Bink is the alter ego of Sam Davis, a fourth-year communications major at CSUF. When she's not in class or looking for parking, Sam can be found immersing herself in the world of live EDM shows and festivals, where her passion for house music was born.";
                    if (DJshowBio23.innerHTML !== "Get ready to groove to Bassline Bliss with DJ Bink! This vibrant mix of house music is the perfect soundtrack for gym sessions, house parties, or even your morning commute.")
                         DJshowBio23.innerHTML = "Get ready to groove to Bassline Bliss with DJ Bink! This vibrant mix of house music is the perfect soundtrack for gym sessions, house parties, or even your morning commute.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                         DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                        
            }
            break
            // MONDAY
        case 1:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text0)
                        document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "TR Staff")
                        DJname0.innerHTML = "TR Staff";
                    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "nic’s Mix";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "nic")
                        DJname7.innerHTML = "nic";
                    if(DJbio7.innerHTML !== "Nicollette, or Nic, loves all things music. Some of her favorite artists include Faye Webster, TV Girl, and Farmer's Wife... You'll hear a lot of that tuning in. Enjoy the show! :)")
                            DJbio7.innerHTML = "Nicollette, or Nic, loves all things music. Some of her favorite artists include Faye Webster, TV Girl, and Farmer's Wife... You'll hear a lot of that tuning in. Enjoy the show! :)";
                    if(DJshowBio7.innerHTML !== "Nic's mix is exactly what it sounds like; a mix of all kinds of indie/rock music.")
                        DJshowBio7.innerHTML = "Nic's mix is exactly what it sounds like; a mix of all kinds of indie/rock music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "a3 radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "A3")
                        DJname8.innerHTML = "A3";
                    if (DJbio8.innerHTML !== "Alex is an eccentric personality who wakes up listening to different genres of music on a daily basis. His style constantly mixes between calming and upbeat as he navigates through his daily life trying to find the soundtrack to his day.")
                        DJbio8.innerHTML = "Alex is an eccentric personality who wakes up listening to different genres of music on a daily basis. His style constantly mixes between calming and upbeat as he navigates through his daily life trying to find the soundtrack to his day.";
                    if (DJshowBio8.innerHTML !== "A3 radio would branch out to different genres primarily focusing on smooth r&b and investigating house, alternative, and hip hop beats. The show would provide listeners with old school songs, and new songs sampling familiar nostalgic tunes while simultaneously searching for the next big thing")
                        DJshowBio8.innerHTML = "A3 radio would branch out to different genres primarily focusing on smooth r&b and investigating house, alternative, and hip hop beats. The show would provide listeners with old school songs, and new songs sampling familiar nostalgic tunes while simultaneously searching for the next big thing";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9: // NO SHOW INFO
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "A Walk on the Moon";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "_nullbody")
                        DJname10.innerHTML = "_nullbody";
                    if (DJbio10.innerHTML !== "He wants so desperately to be understood but never knows the language you speak. Maybe a trip around the systems together can bring you closer.")
                        DJbio10.innerHTML = "He wants so desperately to be understood but never knows the language you speak. Maybe a trip around the systems together can bring you closer.";
                    if (DJshowBio10.innerHTML !== "You want in my head? Let’s find it first. Guaranteed to have yours spinning.")
                        DJshowBio10.innerHTML = "You want in my head? Let’s find it first. Guaranteed to have yours spinning.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Bluetooth Connected";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "DJ V")
                        DJname11.innerHTML = "DJ V";
                    if (DJbio11.innerHTML !== "Allergic to all nuts. CD’s ok. ")
                        DJbio11.innerHTML = "Allergic to all nuts. CD’s ok. ";
                    if (DJshowBio11.innerHTML !== "Pairing your ears to the rhythm of fun and hits and the occasional miss. ")
                        DJshowBio11.innerHTML = "Pairing your ears to the rhythm of fun and hits and the occasional miss. ";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "Yacht Wave";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "Lefty Lou")
                        DJname12.innerHTML = "Lefty Lou";
                    if (DJbio12.innerHTML !== "DJ Lefty Lou sustains the range to keeping it tour! Introducing you to some composers where you’ve heard sampled. Let’s follow our nautica and listen deep!")
                        DJbio12.innerHTML = "DJ Lefty Lou sustains the range to keeping it tour! Introducing you to some composers where you’ve heard sampled. Let’s follow our nautica and listen deep!";
                    if (DJshowBio12.innerHTML !== "From Fusion to Funk, we catch waves with our yacht. We range from all decades of the icy sunrise through our warm sunset.")
                        DJshowBio12.innerHTML = "From Fusion to Funk, we catch waves with our yacht. We range from all decades of the icy sunrise through our warm sunset.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "senior skip day";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "nala")
                        DJname13.innerHTML = "nala";
                    if (DJbio13.innerHTML !== "Nala's passion for music knows no bounds, encompassing a wide array of genres. Lately, she has immersed herself in the vibrant realm of house music. Off-campus, you'll find her DJ-ing her friends' house parties. ")
                        DJbio13.innerHTML = "Nala's passion for music knows no bounds, encompassing a wide array of genres. Lately, she has immersed herself in the vibrant realm of house music. Off-campus, you'll find her DJ-ing her friends' house parties. ";
                    if (DJshowBio13.innerHTML !== "Senior Skip Day isn't just a radio show; it's a journey through music's past, present, and future. Nala curates a unique blend that takes you on a sonic odyssey. From the vintage synths of the '80s to the cutting-edge beats of today's underground scene, every episode is a musical time machine.")
                        DJshowBio13.innerHTML = "Senior Skip Day isn't just a radio show; it's a journey through music's past, present, and future. Nala curates a unique blend that takes you on a sonic odyssey. From the vintage synths of the '80s to the cutting-edge beats of today's underground scene, every episode is a musical time machine.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Rocking With El Chicano";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "Dj Silverlupe")
                        DJname14.innerHTML = "Dj Silverlupe";
                    if (DJbio14.innerHTML !== "My name is Dj Silverlupe, and my goal is to bring back music from the 1950s and early 1960s. I mostly grew up listening to this type of music or oldies. I want to also share my Playlist to my listeners.")
                        DJbio14.innerHTML = "My name is Dj Silverlupe, and my goal is to bring back music from the 1950s and early 1960s. I mostly grew up listening to this type of music or oldies. I want to also share my Playlist to my listeners.";
                    if (DJshowBio14.innerHTML !== "My show is about the 1950s and 1960s rock and roll and doowop. Also I would like to share some of my favorite old school rocking roll music with my listeners. I also would like to bring alive rocking roll from the past to my generation.")
                        DJshowBio14.innerHTML = "My show is about the 1950s and 1960s rock and roll and doowop. Also I would like to share some of my favorite old school rocking roll music with my listeners. I also would like to bring alive rocking roll fr m the past to my generation.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "Next Door Neighbor Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "Maya Desai")
                        DJname15.innerHTML = "Maya Desai";
                    if (DJbio15.innerHTML !== "Maya Desai is a senior transfer student majoring in Marketing. She hopes to utilize her marketing skills in the love music industry one day to get others as excited about music as she is. Maya has been a diehard Harry Styles fan since 2011 and a lover of music since 2001.")
                        DJbio15.innerHTML = "Maya Desai is a senior transfer student majoring in Marketing. She hopes to utilize her marketing skills in the love music industry one day to get others as excited about music as she is. Maya has been a diehard Harry Styles fan since 2011 and a lover of music since 2001.";
                    if (DJshowBio15.innerHTML !== "Next Door Neighbor Radio brings you music of the manic pixie dream girl next door. You’ll find music ranging from indie pop to alternative to pop rock to straight-up pop. With artists as mainstream as Harry Styles, Taylor Swift, and Phoebe Bridgers to lesser known musicians like Clairo, Ethel Cain, and The National, Next Door Neighbor Radio is here to provide you with the best sounds from the self-proclaimed cool girl’s bedroom.")
                        DJshowBio15.innerHTML = "Next Door Neighbor Radio brings you music of the manic pixie dream girl next door. You’ll find music ranging from indie pop to alternative to pop rock to straight-up pop. With artists as mainstream as Harry Styles, Taylor Swift, and Phoebe Bridgers to lesser known musicians like Clairo, Ethel Cain, and The National, Next Door Neighbor Radio is here to provide you with the best sounds from the self-proclaimed cool girl’s bedroom.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "The Strange Daze";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Michael")
                        DJname16.innerHTML = "Michael";
                    if (DJbio16.innerHTML !== "Michael is a record collecting and heavy rock listening enthusiast who can talk endlessly about bands such as Black Sabbath, Pentagram, Blue Cheer, and many more. He has been a DJ at Titan Radio since fall of 2021.")
                        DJbio16.innerHTML = "Michael is a record collecting and heavy rock listening enthusiast who can talk endlessly about bands such as Black Sabbath, Pentagram, Blue Cheer, and many more. He has been a DJ at Titan Radio since fall of 2021.";
                    if (DJshowBio16.innerHTML !== "Strange Daze is a show dedicated to playing trippy bands from the late sixties to seventies and often includes doom metal as well. Listen to actual vinyl records being played on air from Michael's record collecting habits.")
                        DJshowBio16.innerHTML = "Strange Daze is a show dedicated to playing trippy bands from the late sixties to seventies and often includes doom metal as well. Listen to actual vinyl records being played on air from Michael's record collecting habits.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "Recess";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "ari")
                        DJname18.innerHTML = "ari";
                    if (DJbio18.innerHTML !== "Dj Arianna is the host of Recess which airs on Mondays at 6PM.")
                        DJbio18.innerHTML = "Dj Arianna is the host of Recess which airs on Mondays at 6PM.";
                    if (DJshowBio18.innerHTML !== "Recess airing Mondays at 6pm is my hour to have fun and play whatever music I’m feeling that week.")
                        DJshowBio18.innerHTML = "Recess airing Mondays at 6pm is my hour to have fun and play whatever music I’m feeling that week.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Alt and New";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "DJ Lauren Ipsum")
                        DJname19.innerHTML = "DJ Lauren Ipsum";
                    if (DJbio19.innerHTML !== "DJ Lauren Ipsum has a deep passion for music, and is studying Music Education to share that passion with others. Additionally they have a unique understanding of recording and compositional techniques that gives them insight into the process of music making. Finally they play upwards of 10 different instruments, allowing them a unique understanding of how musicians practice and improve musically.")
                        DJbio19.innerHTML = "DJ Lauren Ipsum has a deep passion for music, and is studying Music Education to share that passion with others. Additionally they have a unique understanding of recording and compositional techniques that gives them insight into the process of music making. Finally they play upwards of 10 different instruments, allowing them a unique understanding of how musicians practice and improve musically.";
                    if (DJshowBio19.innerHTML !== "Experience the bands that changed the face of rock music. We will listen and discuss alternative rock and new wave movements from the 80’s and 90’s, the bands that influenced them, and were influenced by them.")
                        DJshowBio19.innerHTML = "Experience the bands that changed the face of rock music. We will listen and discuss alternative rock and new wave movements from the 80’s and 90’s, the bands that influenced them, and were influenced by them.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "The Mouse Hole";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "DJ Peach Rat")
                        DJname20.innerHTML = "DJ Peach Rat";
                    if (DJbio20.innerHTML !== "DJ Peach Rat not only brings a wide variety of music to his house, but also brings a lot of thoughts and observations about the world. From the mundane to the unique, he always has observations and thoughts that are best said out loud. Life is too short to leave things unheard and unsaid.")
                        DJbio20.innerHTML = "DJ Peach Rat not only brings a wide variety of music to his house, but also brings a lot of thoughts and observations about the world. From the mundane to the unique, he always has observations and thoughts that are best said out loud. Life is too short to leave things unheard and unsaid.";
                    if (DJshowBio20.innerHTML !== "Enjoy a wide variety of genres? Then, walk through the door and enter this hole of musical whiplash, where there's no such thing as a stranger. Come for the music, stay for the thoughts. Everyone's welcome in this little hole.")
                        DJshowBio20.innerHTML = "Enjoy a wide variety of genres? Then, walk through the door and enter this hole of musical whiplash, where there's no such thing as a stranger. Come for the music, stay for the thoughts. Everyone's welcome in this little hole.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Homebound FM";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "Saint Ruben")
                        DJname21.innerHTML = "Saint Ruben";
                    if (DJbio21.innerHTML !== "I’ve been working with my dads DJ business since I was 14, so I know what it take to move a crowd. I try to find ‘the new thing’ and rediscover bangers to make my mix unique. I make myself unique with my music choices and try to always accommodate everyone.")
                        DJbio21.innerHTML = "I’ve been working with my dads DJ business since I was 14, so I know what it take to move a crowd. I try to find ‘the new thing’ and rediscover bangers to make my mix unique. I make myself unique with my music choices and try to always accommodate everyone.";
                    if (DJshowBio21.innerHTML !== "We your local serotonin boost. We the homie you trust with the aux. playlist crazy with vibes so amazing, we want you to be you. Playing mainstream hits to deep cuts, we grooving till we homebound")
                        DJshowBio21.innerHTML = "We your local serotonin boost. We the homie you trust with the aux. playlist crazy with vibes so amazing, we want you to be you. Playing mainstream hits to deep cuts, we grooving till we homebound";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "Stretch Break";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "Gavin Valladares")
                        DJname22.innerHTML = "Gavin Valladares";
                    if (DJbio22.innerHTML !== "Gavin Valladares is a 22-year old creative originally hailing from Ventura County, CA. His new, but exciting career as a touring and session drummer includes names such as Slater, Presley Regier, and Madge to name a few. Alongside playing live, Gavin has worked to develop a reputable discography of music he has produced containing artists such as Marianne Ross, Nevi, and blood pact. Gavin is not a celebrity, but his passion for what he does bleeds into the friends, new and old, that he surrounds himself with. Personally curated Spotify playlists, each with a specific theme, have received hundreds of submissions and thousands of listens. While Gavin desires to acknowledge that he is still working to find his way in the music industry and life in general, his pursuit of creativity, sincerity and dedication to making friends along the way makes him at the very least worth keeping up with.")
                        DJbio22.innerHTML = "Gavin Valladares is a 22-year old creative originally hailing from Ventura County, CA. His new, but exciting career as a touring and session drummer includes names such as Slater, Presley Regier, and Madge to name a few. Alongside playing live, Gavin has worked to develop a reputable discography of music he has produced containing artists such as Marianne Ross, Nevi, and blood pact. Gavin is not a celebrity, but his passion for what he does bleeds into the friends, new and old, that he surrounds himself with. Personally curated Spotify playlists, each with a specific theme, have received hundreds of submissions and thousands of listens. While Gavin desires to acknowledge that he is still working to find his way in the music industry and life in general, his pursuit of creativity, sincerity and dedication to making friends along the way makes him at the very least worth keeping up with.";
                    if (DJshowBio22.innerHTML !== "My show will probably be whatever I've been listening to. I work as a drummer within a lot of local diy, pop, and touring scenes. I'd love to be able to showcase cool bands I've found that have smaller followings or just favorite songs of my own.")
                        DJshowBio22.innerHTML = "My show will probably be whatever I've been listening to. I work as a drummer within a lot of local diy, pop, and touring scenes. I'd love to be able to showcase cool bands I've found that have smaller followings or just favorite songs of my own.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Spanglish Lovers";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "DJ Fern")
                        DJname23.innerHTML = "DJ Fern";
                    if (DJbio23.innerHTML !== "Fernanda is a queer first-gen college student who has always struggled between English and Spanish that has definitely developed only being able to speak and feel in Spanglish. Fernanda is a cat mom who embraces culture and loves live music. When it comes to connecting with music not just one language expresses enough for Fernanda.")
                        DJbio23.innerHTML = "Fernanda is a queer first-gen college student who has always struggled between English and Spanish that has definitely developed only being able to speak and feel in Spanglish. Fernanda is a cat mom who embraces culture and loves live music. When it comes to connecting with music not just one language expresses enough for Fernanda.";
                    if (DJshowBio23.innerHTML !== "My show is for the Spanglish lovers, those who don't just love and cry in English but Spanish as well. A place where they can vibe to being in love to those who are heartbroken in both languages.")
                        DJshowBio23.innerHTML = "My show is for the Spanglish lovers, those who don't just love and cry in English but Spanish as well. A place where they can vibe to being in love to those who are heartbroken in both languages.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
            // TUESDAY
        case 2:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text0)
                        document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "TR Staff")
                        DJname0.innerHTML = "TR Staff";
                    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                 // MISSING DJ BIO AND SHOW BIO
                 case 7:
                    let text7 = "TEATIME.";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ M")
                        DJname7.innerHTML = "DJ M";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Road Trip";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "Tori G")
                        DJname8.innerHTML = "Tori G";
                    if (DJbio8.innerHTML !== "The “two magic ladies” on the bright green CD, who turned out to be Stevie Nicks and Christine McVie, were the start of a long journey through different genres of music for Tori. Growing up around a Metallica Mom, a Chicago and Bob Seger Dad, and a Tupac older brother, Tori has learned to love almost any kind of music and continues to listen to anything new she can put in her AirPods.")
                        DJbio8.innerHTML = "The “two magic ladies” on the bright green CD, who turned out to be Stevie Nicks and Christine McVie, were the start of a long journey through different genres of music for Tori. Growing up around a Metallica Mom, a Chicago and Bob Seger Dad, and a Tupac older brother, Tori has learned to love almost any kind of music and continues to listen to anything new she can put in her AirPods.";
                    if (DJshowBio8.innerHTML !== "From the mind of someone who has spent countless hours pretending to be in a music video while on a road trip and screaming lyrics at the top of my lungs on the way to CSUF, I am looking to share the music I have gathered from different people from all different walks of life! From Cher to Rammstein to Hot Mulligan, the hope of “Road Trip” is to explore new and old music that is perfect for just having a good time on a long drive.")
                        DJshowBio8.innerHTML = "From the mind of someone who has spent countless hours pretending to be in a music video while on a road trip and screaming lyrics at the top of my lungs on the way to CSUF, I am looking to share the music I have gathered from different people from all different walks of life! From Cher to Rammstein to Hot Mulligan, the hope of “Road Trip” is to explore new and old music that is perfect for just having a good time on a long drive.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "who’s on aux";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Reggie &k8")
                        DJname9.innerHTML = "Reggie &k8";
                    if (DJbio9.innerHTML !== "Reggie &k8 is a French techno dj and music producer from France. He performed mixes and lives at festivals and rave parties in Europe since 4 years. His style blends heavy underground music with remixes from popular international songs.")
                        DJbio9.innerHTML = "Reggie &k8 is a French techno dj and music producer from France. He performed mixes and lives at festivals and rave parties in Europe since 4 years. His style blends heavy underground music with remixes from popular international songs.";
                    if (DJshowBio9.innerHTML !== "We interview up and coming artists to talk about new music and the struggles of making music and starting out.")
                        DJshowBio9.innerHTML = "We interview up and coming artists to talk about new music and the struggles of making music and starting out.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "Indie Encounters";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "DJ Raniel")
                        DJname10.innerHTML = "DJ Raniel";
                    if (DJbio10.innerHTML !== "DJ Raniel (RAN-yel) is an aspiring music critic. To him, there’s no such thing as a guilty pleasure. Overall, he loves talking about whatever he’s listening to and wants to share it with others.")
                        DJbio10.innerHTML = "DJ Raniel (RAN-yel) is an aspiring music critic. To him, there’s no such thing as a guilty pleasure. Overall, he loves talking about whatever he’s listening to and wants to share it with others.";
                    if (DJshowBio10.innerHTML !== "A mainly modern mix of indie, alternative, pop and rock. Designed to introduce you to artists you may not have heard before, and hopefully help you get through the day.")
                        DJshowBio10.innerHTML = "A mainly modern mix of indie, alternative, pop and rock. Designed to introduce you to artists you may not have heard before, and hopefully help you get through the day.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Complete Mess";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "Claire")
                        DJname11.innerHTML = "Claire";
                    if (DJbio11.innerHTML !== "Claire is a fourth year and hopes to work with books or anything pop culture related some day. She goes to as many concerts as her bank account will let her and loves discovering new music.")
                        DJbio11.innerHTML = "Claire is a fourth year and hopes to work with books or anything pop culture related some day. She goes to as many concerts as her bank account will let her and loves discovering new music.";
                    if (DJshowBio11.innerHTML !== "Music drowns out the noise of everything around you and lets you escape from everything. Here, we can escape together and be complete messes with one another.")
                        DJshowBio11.innerHTML = "Music drowns out the noise of everything around you and lets you escape from everything. Here, we can escape together and be complete messes with one another.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "backseat radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "lauren")
                        DJname12.innerHTML = "lauren";
                    if (DJbio12.innerHTML !== "lauren is a fourth year communications major and also serves as the technical director here at titan radio! with a big love for live music, you’ll spot lauren at a random concert pretty frequently. on top of that, she loves finding new matcha spots and driving around the city for a good view!")
                        DJbio12.innerHTML = "lauren is a fourth year communications major and also serves as the technical director here at titan radio! with a big love for live music, you’ll spot lauren at a random concert pretty frequently. on top of that, she loves finding new matcha spots and driving around the city for a good view!";
                    if (DJshowBio12.innerHTML !== "sit back, relax, and enjoy the smooth ride as lauren plays all her favorite tracks! from grunge rock to dance pop, she is sure to show you some new songs that’ll get you wanting to stick out the window and just sing!")
                        DJshowBio12.innerHTML = "sit back, relax, and enjoy the smooth ride as lauren plays all her favorite tracks! from grunge rock to dance pop, she is sure to show you some new songs that’ll get you wanting to stick out the window and just sing!";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "The Graveyard Groove";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "Roy ‘The Rat King’ Morales")
                        DJname13.innerHTML = "Roy ‘The Rat King’ Morales";
                    if (DJbio13.innerHTML !== "Ever since Roy was a kid he's been obsessed with the heavier side of music. If it was weird, scary, and you could headbang to it, he was all in. Now he's ready to share his own weird brand of Macabre with anyone who will listen.")
                        DJbio13.innerHTML = "Ever since Roy was a kid he's been obsessed with the heavier side of music. If it was weird, scary, and you could headbang to it, he was all in. Now he's ready to share his own weird brand of Macabre with anyone who will listen.";
                    if (DJshowBio13.innerHTML !== "Ever wanted to sit around in a graveyard at night and listen to some good music? No? Good cause that'd be weird. A mix of metal, punk, and whatever else I happen to think would be cool to play in a graveyard. (I'm not encouraging you to go do this and take no responsibility if you get in trouble for trespassing)")
                        DJshowBio13.innerHTML = "Ever wanted to sit around in a graveyard at night and listen to some good music? No? Good cause that'd be weird. A mix of metal, punk, and whatever else I happen to think would be cool to play in a graveyard. (I'm not encouraging you to go do this and take no responsibility if you get in trouble for trespassing)";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Whammy Bar Hour";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "Fionna")
                        DJname14.innerHTML = "Fionna";
                    if (DJbio14.innerHTML !== "Fionna is an Animation major who loves listening to all kinds of music and going to small concerts. Her life was changed when she discovered La Luz, a woman-led surf inspired indie band, whose tunes inspired her to pick up guitar and begin writing songs. She is very passionate about cool guitar riffs and instant ramen.")
                        DJbio14.innerHTML = "Fionna is an Animation major who loves listening to all kinds of music and going to small concerts. Her life was changed when she discovered La Luz, a woman-led surf inspired indie band, whose tunes inspired her to pick up guitar and begin writing songs. She is very passionate about cool guitar riffs and instant ramen.";
                    if (DJshowBio14.innerHTML !== "Named after my favorite part of the electric guitar, my show features innovative indie rock artists and bands that deserve a bit more love! Whether it's dreamy folk or jazzy post-rock, I hope to add a bit of spice to your listening experience!")
                        DJshowBio14.innerHTML = "Named after my favorite part of the electric guitar, my show features innovative indie rock artists and bands that deserve a bit more love! Whether it's dreamy folk or jazzy post-rock, I hope to add a bit of spice to your listening experience!";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "Soft Shock Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "Nia ☆")
                        DJname15.innerHTML = "Nia ☆";
                    if (DJbio15.innerHTML !== "Nia finds comfort and vulnerability in the hidden meanings of songs. Music can say a lot when you can’t, so she loves feeling connected to others by sharing the artists she has on repeat or taking someone to a concert and appreciating great music together!")
                        DJbio15.innerHTML = "Nia finds comfort and vulnerability in the hidden meanings of songs. Music can say a lot when you can’t, so she loves feeling connected to others by sharing the artists she has on repeat or taking someone to a concert and appreciating great music together!";
                    if (DJshowBio15.innerHTML !== "Soft Shock includes a mix of songs and musicians that are stuck in my head, and most likely on replay. Anything and everything in between surf rock, alternative, shoegaze, indie, punk, and experimental!")
                        DJshowBio15.innerHTML = "Soft Shock includes a mix of songs and musicians that are stuck in my head, and most likely on replay. Anything and everything in between surf rock, alternative, shoegaze, indie, punk, and experimental!";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "news and noize";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "DJ Natti")
                        DJname16.innerHTML = "DJ Natti";
                    if (DJbio16.innerHTML !== "From uncovering hidden music gems to complaining about the latest news, DJ Natti has you covered. Music and politics are his bread and butter. Just don't ask him about Pavement.")
                        DJbio16.innerHTML = "From uncovering hidden music gems to complaining about the latest news, DJ Natti has you covered. Music and politics are his bread and butter. Just don't ask him about Pavement.";
                    if (DJshowBio16.innerHTML !== "Annoying politics kid meets insufferable music obsessor. What could go wrong? In this show, DJ Natti explores the relationship between the current or past events and how it correlates with the noise of that generation.")
                        DJshowBio16.innerHTML = "Annoying politics kid meets insufferable music obsessor. What could go wrong? In this show, DJ Natti explores the relationship between the current or past events and how it correlates with the noise of that generation.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "Your Temporary Fix";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "DJ AJ")
                        DJname18.innerHTML = "DJ AJ";
                    if (DJbio18.innerHTML !== "DJ AJ is a 2nd year student who enjoys listening to music and attending concerts! She loves discovering new songs and talking about her favorite artists and bands. She hopes to bring some good vibes as a “temporary fix” for all of her listeners!")
                        DJbio18.innerHTML = "DJ AJ is a 2nd year student who enjoys listening to music and attending concerts! She loves discovering new songs and talking about her favorite artists and bands. She hopes to bring some good vibes as a “temporary fix” for all of her listeners!";
                    if (DJshowBio18.innerHTML !== "My show will include a mix of mainly pop and rock music, along with some fun themed shows! Some of my favorite artists include 5 Seconds of Summer, One Direction, Taylor Swift, The Driver Era, Van Halen, and The Go Go’s. Be sure to check out my instagram @yourtemporaryfix.titanradio to discover more!")
                        DJshowBio18.innerHTML = "My show will include a mix of mainly pop and rock music, along with some fun themed shows! Some of my favorite artists include 5 Seconds of Summer, One Direction, Taylor Swift, The Driver Era, Van Halen, and The Go Go’s. Be sure to check out my instagram @yourtemporaryfix.titanradio to discover more!";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Top Down Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "EVP")
                        DJname19.innerHTML = "EVP";
                    if (DJbio19.innerHTML !== "Emily is a returning DJ who loves all music that emulates summertime. DON'T be misled though, this does not mean all upbeat music....She will always provide visual context and inspo for each and every set!")
                        DJbio19.innerHTML = "Emily is a returning DJ who loves all music that emulates summertime. DON'T be misled though, this does not mean all upbeat music....She will always provide visual context and inspo for each and every set!";
                    if (DJshowBio19.innerHTML !== "Warm and dreamy all the time, Top Down is your playlist for beach days and summer nights with your friends. All wrapped in a California cruiser with ur friends and the windows down <3")
                        DJshowBio19.innerHTML = "Warm and dreamy all the time, Top Down is your playlist for beach days and summer nights with your friends. All wrapped in a California cruiser with ur friends and the windows down <3";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "drop the playlist";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "lyss")
                        DJname20.innerHTML = "lyss";
                    if (DJbio20.innerHTML !== "Dj Lyss is a Samoan artist from Carson, CA and has always been interested in all things creative. From painting and sketches, to photography and jewelry making, Lyss loves to delve into it all. Lyss loves to chat, and would love to connect with all listeners interested.")
                        DJbio20.innerHTML = "Dj Lyss is a Samoan artist from Carson, CA and has always been interested in all things creative. From painting and sketches, to photography and jewelry making, Lyss loves to delve into it all. Lyss loves to chat, and would love to connect with all listeners interested.";
                    if (DJshowBio20.innerHTML !== "My show is for all the shazam warriors who need music recommendations, but feel awkward asking. I drop a playlist every week to introduce more music of all genres to my listeners. In the past I've played tons of 90's-00's R&B, Island Reggae, Punk/Alt, and all eras of Hip-Hop. This is a comforting and chill show for all to enjoy and be a part of.")
                        DJshowBio20.innerHTML = "My show is for all the shazam warriors who need music recommendations, but feel awkward asking. I drop a playlist every week to introduce more music of all genres to my listeners. In the past I've played tons of 90's-00's R&B, Island Reggae, Punk/Alt, and all eras of Hip-Hop. This is a comforting and chill show for all to enjoy and be a part of.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Ambient Occlusion w ERRORIC";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "erroric")
                        DJname21.innerHTML = "erroric";
                    if (DJbio21.innerHTML !== "erroric is constantly on the search for the most obscure forms of music. Whether it be searching deep through soundcloud and other niche music platforms, the thrill of finding new sounds and artists is what they love most about music.")
                        DJbio21.innerHTML = "erroric is constantly on the search for the most obscure forms of music. Whether it be searching deep through soundcloud and other niche music platforms, the thrill of finding new sounds and artists is what they love most about music.";
                    if (DJshowBio21.innerHTML !== "My show would focus on the ambient and electric sounds you can hear in Intelligent Dance Music (IDM) and other related genres. As opposed to lyric song structure, the tracks I feature focus on the production of the music and how the artists manipulate sound to create ambient soundscapes that transport you into another world")
                        DJshowBio21.innerHTML = "My show would focus on the ambient and electric sounds you can hear in Intelligent Dance Music (IDM) and other related genres. As opposed to lyric song structure, the tracks I feature focus on the production of the music and how the artists manipulate sound to create ambient soundscapes that transport you into another world";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "Tabuu's Tracks";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "TABUU")
                        DJname22.innerHTML = "TABUU";
                    if (DJbio22.innerHTML !== "DJ TABUU (aka Gabe) tries to keep an open mind when it comes to music. Most people would say their playlists give them “emotional whiplash” as it can play a melancholic “lay in your bed and stare at the ceiling” ballad then escalate to an energetic hardstyle rave track. However, Tabuu believes that an extreme and drastic shift in one’s preferred genre can help to remind audiences that there is more to the world of music than what you choose to consume.")
                        DJbio22.innerHTML = "DJ TABUU (aka Gabe) tries to keep an open mind when it comes to music. Most people would say their playlists give them “emotional whiplash” as it can play a melancholic “lay in your bed and stare at the ceiling” ballad then escalate to an energetic hardstyle rave track. However, Tabuu believes that an extreme and drastic shift in one’s preferred genre can help to remind audiences that there is more to the world of music than what you choose to consume.";
                    if (DJshowBio22.innerHTML !== "Just a standard radio show. Would love to share music of varying genres and maybe preface the artists/songs/genres. Maybe including some personal stories as well if there are any to do with the song.")
                        DJshowBio22.innerHTML = "Just a standard radio show. Would love to share music of varying genres and maybe preface the artists/songs/genres. Maybe including some personal stories as well if there are any to do with the song.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Broken CD";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "Pravin")
                        DJname23.innerHTML = "Pravin";
                    if (DJbio23.innerHTML !== "Meet Pravin, the boy from across continents sharing his love for music through 'Broken CD'. Pravin loves to jam out on indie/rnb/vanguard during his study sesh.")
                        DJbio23.innerHTML = "Meet Pravin, the boy from across continents sharing his love for music through 'Broken CD'. Pravin loves to jam out on indie/rnb/vanguard during his study sesh.";
                    if (DJshowBio23.innerHTML !== "Conceptualizing that we still use CDs for radio shows, my CD always turns out to be faulty. This radio show would be me trying to curate the best playlist every week for college students who love indie/rnb/vanguard, eventually (metaphorically) making my CD/playlist perfect.")
                        DJshowBio23.innerHTML = "Conceptualizing that we still use CDs for radio shows, my CD always turns out to be faulty. This radio show would be me trying to curate the best playlist every week for college students who love indie/rnb/vanguard, eventually (metaphorically) making my CD/playlist perfect.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
  
            // WEDNESDAY
        case 3:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text0)
                        document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "TR Staff")
                        DJname0.innerHTML = "TR Staff";
                    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break

                case 7:
                    let text7 = "Groove Global";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "f(A)")
                        DJname7.innerHTML = "f(A)";
                    if(DJbio7.innerHTML !== "Alex has been curating unique playlists for 10 years. His taste spans languages, genres, and decades. He is sure to show you a banger or two.")
                            DJbio7.innerHTML = "Alex has been curating unique playlists for 10 years. His taste spans languages, genres, and decades. He is sure to show you a banger or two.";
                    if(DJshowBio7.innerHTML !== "An eclectic selection of global tracks sure to get you groovin. I generally play upbeat music that I can’t understand. It’s all about the vibes around here.")
                        DJshowBio7.innerHTML = "An eclectic selection of global tracks sure to get you groovin. I generally play upbeat music that I can’t understand. It’s all about the vibes around here.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Stoked!";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "oh.no.noemi")
                        DJname8.innerHTML = "oh.no.noemi";
                    if (DJbio8.innerHTML !== "Noemi is an avid concert goer whose whole life revolves around music whether it be to help her fall asleep, to pick her up when she’s down, or simply just because music is music to her ears. She’s her most passionate self when it comes to expressing music especially her own music taste so come have a listen.")
                        DJbio8.innerHTML = "Noemi is an avid concert goer whose whole life revolves around music whether it be to help her fall asleep, to pick her up when she’s down, or simply just because music is music to her ears. She’s her most passionate self when it comes to expressing music especially her own music taste so come have a listen.";
                    if (DJshowBio8.innerHTML !== "Welcome to Stoked! Where I’m stoked to be your radio host and you better be stoked to listen. We’ll just hangout, listen to good music, talk about tours coming soon, concert stories, and the experiences you have listening to music. Music is a memory everyone is tied to whether you can control it or not and if I can be the one to show you a new song that’ll give you new memories I’m all for it.")
                        DJshowBio8.innerHTML = "Welcome to Stoked! Where I’m stoked to be your radio host and you better be stoked to listen. We’ll just hangout, listen to good music, talk about tours coming soon, concert stories, and the experiences you have listening to music. Music is a memory everyone is tied to whether you can control it or not and if I can be the one to show you a new song that’ll give you new memories I’m all for it.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Trill Station";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Zeke Trill")
                        DJname9.innerHTML = "Zeke Trill";
                    if (DJbio9.innerHTML !== "When hard work and talent meet, you get Zeke. Zeke Trill is a future Grammy award winning audio engineer and music producer. His attention to detail and love for diversifying his music palate makes him stand out from the rest.")
                        DJbio9.innerHTML = "When hard work and talent meet, you get Zeke. Zeke Trill is a future Grammy award winning audio engineer and music producer. His attention to detail and love for diversifying his music palate makes him stand out from the rest.";
                    if (DJshowBio9.innerHTML !== "From Noname to Alex Isley. Kaytranada to Solange. Cleo Sol to Masego. Lucky Day to Joji. If these names are familiar, you’ve made it to the right place. If it’s unfamiliar, come vibe to new music at the Trill Station!")
                        DJshowBio9.innerHTML = "From Noname to Alex Isley. Kaytranada to Solange. Cleo Sol to Masego. Lucky Day to Joji. If these names are familiar, you’ve made it to the right place. If it’s unfamiliar, come vibe to new music at the Trill Station!";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "JC BOPZ";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "Jacob Batalla")
                        DJname10.innerHTML = "Jacob Batalla";
                    if (DJbio10.innerHTML !== "Jacob Batalla is an icon that has a wide range of interest in different genres. He is very outspoken and very up to date with pop culture in the music industry. He has a way of getting people to relate to different types of music from getting out of your seat and dancing like a complete maniac to wanting to go to your bed and cry for hours.")
                        DJbio10.innerHTML = "Jacob Batalla is an icon that has a wide range of interest in different genres. He is very outspoken and very up to date with pop culture in the music industry. He has a way of getting people to relate to different types of music from getting out of your seat and dancing like a complete maniac to wanting to go to your bed and cry for hours.";
                    if (DJshowBio10.innerHTML !== "My radio show will include different types of genres for all students to relate and enjoy, from in your feels to dance club bops. I want the listeners to be able to vibe to all the music choices that I’m playing and for fellow peers to have something to look forward to after a long day. This will be a fun and safe space for students to learn and experience great bopz. I want students to dance, cry, and to let the listeners have a good time and want to come back for more!")
                        DJshowBio10.innerHTML = "My radio show will include different types of genres for all students to relate and enjoy, from in your feels to dance club bops. I want the listeners to be able to vibe to all the music choices that I’m playing and for fellow peers to have something to look forward to after a long day. This will be a fun and safe space for students to learn and experience great bopz. I want students to dance, cry, and to let the listeners have a good time and want to come back for more!";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "MAWKSIA";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "MIA")
                        DJname11.innerHTML = "MIA";
                    if (DJbio11.innerHTML !== "Hosted by the amusingly awkward MIA, this show dives headfirst into the depths of offbeat humor and curates a playlist that will make you do that goofy head bobbing with every tune. Mawskia will take you on a rollercoaster ride through a kaleidoscope of music genres, ensuring you discover hidden gems and have unforgettable laughs along the way.")
                        DJbio11.innerHTML = "Hosted by the amusingly awkward MIA, this show dives headfirst into the depths of offbeat humor and curates a playlist that will make you do that goofy head bobbing with every tune. Mawskia will take you on a rollercoaster ride through a kaleidoscope of music genres, ensuring you discover hidden gems and have unforgettable laughs along the way.";
                    if (DJshowBio11.innerHTML !== "A show where space, pop culture, and music collide! Tune in to keep up to date for what's happening in the universe, to viral internet phenomena and dynamic events within the music industry! We aim educate and entertain!")
                        DJshowBio11.innerHTML = "A show where space, pop culture, and music collide! Tune in to keep up to date for what's happening in the universe, to viral internet phenomena and dynamic events within the music industry! We aim educate and entertain!";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "eavesdrop";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "Edwin")
                        DJname12.innerHTML = "Edwin";
                    if (DJbio12.innerHTML !== "Edwin has a wide variety of music taste and would share it with anyone who’d listen.")
                        DJbio12.innerHTML = "Edwin has a wide variety of music taste and would share it with anyone who’d listen.";
                    if (DJshowBio12.innerHTML !== "Whatever I want to play:) eavesdrop on what I’d be listening to whether you’re there or not.")
                        DJshowBio12.innerHTML = "Whatever I want to play:) eavesdrop on what I’d be listening to whether you’re there or not.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13: // COME BACK TO ADD IT
                    let text13 = "Sunsick Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "DJ Silly")
                        DJname13.innerHTML = "DJ Silly";
                    if (DJbio13.innerHTML !== "Ever since Roy was a kid he's been obsessed with the heavier side of music. If it was weird, scary, and you could headbang to it, he was all in. Now he's ready to share his own weird brand of Macabre with anyone who will listen.")
                        DJbio13.innerHTML = "Ever since Roy was a kid he's been obsessed with the heavier side of music. If it was weird, scary, and you could headbang to it, he was all in. Now he's ready to share his own weird brand of Macabre with anyone who will listen.";
                    if (DJshowBio13.innerHTML !== "Ever wanted to sit around in a graveyard at night and listen to some good music? No? Good cause that'd be weird. A mix of metal, punk, and whatever else I happen to think would be cool to play in a graveyard. (I'm not encouraging you to go do this and take no responsibility if you get in trouble for trespassing)")
                        DJshowBio13.innerHTML = "Ever wanted to sit around in a graveyard at night and listen to some good music? No? Good cause that'd be weird. A mix of metal, punk, and whatever else I happen to think would be cool to play in a graveyard. (I'm not encouraging you to go do this and take no responsibility if you get in trouble for trespassing)";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Música Recuerdos";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "DJ Nikki")
                        DJname14.innerHTML = "DJ Nikki";
                    if (DJbio14.innerHTML !== "DJ Nikki knows how to keep you moving. Her great music taste never fails to amaze those tuning in.")
                        DJbio14.innerHTML = "DJ Nikki knows how to keep you moving. Her great music taste never fails to amaze those tuning in.";
                    if (DJshowBio14.innerHTML !== "Música Recuerdos takes you down memory lane during each show plus some music history facts that will leave you shocked. DJ Nikki can easily take you for the 80s to the 2000s.")
                        DJshowBio14.innerHTML = "Música Recuerdos takes you down memory lane during each show plus some music history facts that will leave you shocked. DJ Nikki can easily take you for the 80s to the 2000s.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "Press Play Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "Nya")
                        DJname15.innerHTML = "Nya";
                    if (DJbio15.innerHTML !== "She first got her love for music from watching the VH1 Top 20 Video Countdown before school each morning. Since then she has curated playlists for people, parties, and radio shows. Now she is committed to learning more about music and exploring different genres. She’s even teaching herself how to DJ and mix at home!")
                        DJbio15.innerHTML = "She first got her love for music from watching the VH1 Top 20 Video Countdown before school each morning. Since then she has curated playlists for people, parties, and radio shows. Now she is committed to learning more about music and exploring different genres. She’s even teaching herself how to DJ and mix at home!";
                    if (DJshowBio15.innerHTML !== "When you listen to music you want uninterrupted harmony. My show focuses on curating playlists with smooth transitions that’ll make you say ooo and ahh. Whether the genre be hip hop (old and new school), r&b, pop, indie, rock, house, k-pop. I’ll always be prepared with some grooves that’ll be a vibe.")
                        DJshowBio15.innerHTML = "When you listen to music you want uninterrupted harmony. My show focuses on curating playlists with smooth transitions that’ll make you say ooo and ahh. Whether the genre be hip hop (old and new school), r&b, pop, indie, rock, house, k-pop. I’ll always be prepared with some grooves that’ll be a vibe.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "Commercial break";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Bashcash")
                        DJname16.innerHTML = "Bashcash";
                    if (DJbio16.innerHTML !== "Bashar loves music maybe a little too much. He has a song for every emotion and every scenario. He can go from genre to genre in a second. He really loves sounds.")
                        DJbio16.innerHTML = "Bashar loves music maybe a little too much. He has a song for every emotion and every scenario. He can go from genre to genre in a second. He really loves sounds.";
                    if (DJshowBio16.innerHTML !== "An eclectic mix of all my favorite songs. A little bit of everything from Beyoncé to bad brains. Just an hour of good stuff.")
                        DJshowBio16.innerHTML = "An eclectic mix of all my favorite songs. A little bit of everything from Beyoncé to bad brains. Just an hour of good stuff.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "ADawg Presents";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "DJ ADawg")
                        DJname18.innerHTML = "DJ ADawg";
                    if (DJbio18.innerHTML !== "ADawg enjoys listening to hip-hop, R&B, and rap but is open to experiencing all sounds that contribute to the auditory experience.")
                        DJbio18.innerHTML = "ADawg enjoys listening to hip-hop, R&B, and rap but is open to experiencing all sounds that contribute to the auditory experience.";
                    if (DJshowBio18.innerHTML !== "ADawg Radio is a show that showcases smooth-like-butter daydreaming melodies. Every Wednesday at 6 PM, you can expect themes and inspirations that cater to your music situation.")
                        DJshowBio18.innerHTML = "ADawg Radio is a show that showcases smooth-like-butter daydreaming melodies. Every Wednesday at 6 PM, you can expect themes and inspirations that cater to your music situation.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Cornerstone Rock Radio Station";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "hippie nicky")
                        DJname19.innerHTML = "hippie nicky";
                    if (DJbio19.innerHTML !== "Hippie Nicky, behind the mic at Cornerstone Rock Radio Station, brings a blend of passion and music mastery. With a soul as wild as the tunes he spins, Hippie Nicky invites listeners through the realms of rock. Whether it's the timeless classics or the latest chart toppers, Nicky's eclectic taste and laid-back vibes make every show an unforgettable listen. Join him as he grooves to the rhythm of rock, spreading peace, love, and the undeniable magic of music.")
                        DJbio19.innerHTML = "Hippie Nicky, behind the mic at Cornerstone Rock Radio Station, brings a blend of passion and music mastery. With a soul as wild as the tunes he spins, Hippie Nicky invites listeners through the realms of rock. Whether it's the timeless classics or the latest chart toppers, Nicky's eclectic taste and laid-back vibes make every show an unforgettable listen. Join him as he grooves to the rhythm of rock, spreading peace, love, and the undeniable magic of music.";
                    if (DJshowBio19.innerHTML !== "Enjoy music from all genres of rock, where the pulse of rock beats with unbridled energy. Immerse yourself in a journey through the ages, from classic anthems to cutting edge tracks. Tune in for a relentless blend of electrifying guitar riffs, powerful vocals, and the heartbeat of rock 'n' roll. Cornerstone Rock Radio Station – your ultimate destination for a rock experience.")
                        DJshowBio19.innerHTML = "Enjoy music from all genres of rock, where the pulse of rock beats with unbridled energy. Immerse yourself in a journey through the ages, from classic anthems to cutting edge tracks. Tune in for a relentless blend of electrifying guitar riffs, powerful vocals, and the heartbeat of rock 'n' roll. Cornerstone Rock Radio Station – your ultimate destination for a rock experience.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "The Dean's List";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "Dr. Dean")
                        DJname20.innerHTML = "Dr. Dean";
                    if (DJbio20.innerHTML !== "Dr. Dean is an amateur radio host who has the biggest brain in the world and the best taste in music and also millions of dollars. He is majoring in cinema aka the most academically intensive subject possible because again he’s just so smart.")
                        DJbio20.innerHTML = "Dr. Dean is an amateur radio host who has the biggest brain in the world and the best taste in music and also millions of dollars. He is majoring in cinema aka the most academically intensive subject possible because again he’s just so smart.";
                    if (DJshowBio20.innerHTML !== "The Dean’s List presents an hour of delightful musical whiplash for anyone who feels so inclined to tune in. Between hip hop, indie, R&B, pop, rock, electronic, and who knows what else, from smash hits to hidden gems, nothing is off limits.")
                        DJshowBio20.innerHTML = "The Dean’s List presents an hour of delightful musical whiplash for anyone who feels so inclined to tune in. Between hip hop, indie, R&B, pop, rock, electronic, and who knows what else, from smash hits to hidden gems, nothing is off limits.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Living Well with TitanWELL";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "TitanWELL")
                        DJname21.innerHTML = "TitanWELL";
                    if (DJbio21.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJbio21.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "Kenoma Radiosonic Music Hour";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "Ken")
                        DJname22.innerHTML = "Ken";
                    if (DJbio22.innerHTML !== "Ken loves variety. A kenoma song takes from the popular and the bleeding-edge in equal measure—both familiar and alienating. He hopes his listeners, forged by the internet, chase that long-forgotten unusual chord change or melodic turn.")
                        DJbio22.innerHTML = "Ken loves variety. A kenoma song takes from the popular and the bleeding-edge in equal measure—both familiar and alienating. He hopes his listeners, forged by the internet, chase that long-forgotten unusual chord change or melodic turn.";
                    if (DJshowBio22.innerHTML !== "Eclecticism from around the world. Avant/brutal prog, folk, experimental pop.")
                        DJshowBio22.innerHTML = "Eclecticism from around the world. Avant/brutal prog, folk, experimental pop.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "That Melancholy Mood";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "Johny")
                        DJname23.innerHTML = "Johny";
                    if (DJbio23.innerHTML !== "Evan Cooper is a senior Cinema and Television Arts student, philanthropist, Clyde’s 1930 Hot Wing Challenge silver medalist, and audiophile with an ear to the streets.")
                        DJbio23.innerHTML = "Evan Cooper is a senior Cinema and Television Arts student, philanthropist, Clyde’s 1930 Hot Wing Challenge silver medalist, and audiophile with an ear to the streets.";
                    if (DJshowBio23.innerHTML !== "I’m just a guy always trying to finesse my way into an AUX cord near you. Undercurrent is a continuation of that pattern of behavior. Come along with me on a trip across the musical spectrum. Maybe a few unsolicited opinions. Free of charge.")
                        DJshowBio23.innerHTML = "I’m just a guy always trying to finesse my way into an AUX cord near you. Undercurrent is a continuation of that pattern of behavior. Come along with me on a trip across the musical spectrum. Maybe a few unsolicited opinions. Free of charge.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break

        case 4:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text0)
                        document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "TR Staff")
                        DJname0.innerHTML = "TR Staff";
                    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "")
                        DJname7.innerHTML = "";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "")
                        DJname8.innerHTML = "";
                    if (DJbio8.innerHTML !== "")
                        DJbio8.innerHTML = "";
                    if (DJshowBio8.innerHTML !== "")
                        DJshowBio8.innerHTML = "";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "")
                        DJname10.innerHTML = "";
                    if (DJbio10.innerHTML !== "")
                        DJbio10.innerHTML = "";
                    if (DJshowBio10.innerHTML !== "")
                        DJshowBio10.innerHTML = "";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "")
                        DJname11.innerHTML = "";
                    if (DJbio11.innerHTML !== "")
                        DJbio11.innerHTML = "";
                    if (DJshowBio11.innerHTML !== "")
                        DJshowBio11.innerHTML = "";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "")
                        DJname12.innerHTML = "";
                    if (DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if (DJshowBio12.innerHTML !== "")
                        DJshowBio12.innerHTML = "";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "")
                        DJname13.innerHTML = "";
                    if (DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "")
                        DJshowBio13.innerHTML = "";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "")
                        DJname14.innerHTML = "";
                    if (DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if (DJshowBio14.innerHTML !== "")
                        DJshowBio14.innerHTML = "";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "")
                        DJname15.innerHTML = "";
                    if (DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if (DJshowBio15.innerHTML !== "")
                        DJshowBio15.innerHTML = "";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "")
                        DJname16.innerHTML = "";
                    if (DJbio16.innerHTML !== "")
                        DJbio16.innerHTML = "";
                    if (DJshowBio16.innerHTML !== "")
                        DJshowBio16.innerHTML = "";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "")
                        DJname17.innerHTML = "";
                    if (DJbio17.innerHTML !== "")
                        DJbio17.innerHTML = "";
                    if (DJshowBio17.innerHTML !== "")
                        DJshowBio17.innerHTML = "";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "")
                        DJname18.innerHTML = "";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "")
                        DJname19.innerHTML = "";
                    if (DJbio19.innerHTML !== "")
                        DJbio19.innerHTML = "";
                    if (DJshowBio19.innerHTML !== "")
                        DJshowBio19.innerHTML = "";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "")
                        DJname20.innerHTML = "";
                    if (DJbio20.innerHTML !== "")
                        DJbio20.innerHTML = "";
                    if (DJshowBio20.innerHTML !== "")
                        DJshowBio20.innerHTML = "";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "")
                        DJname21.innerHTML = "";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "")
                        DJname22.innerHTML = "";
                    if (DJbio22.innerHTML !== "")
                        DJbio22.innerHTML = "";
                    if (DJshowBio22.innerHTML !== "")
                        DJshowBio22.innerHTML = "";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "")
                        DJname23.innerHTML = "";
                    if (DJbio23.innerHTML !== "")
                        DJbio23.innerHTML = "";
                    if (DJshowBio23.innerHTML !== "")
                        DJshowBio23.innerHTML = "";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
        case 5:
            switch(nextDate.getHours()) {
                case 0:
                    case 0:
                        let text0 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text0)
                            document.getElementById("bio").innerHTML = text0;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo0 = document.getElementById("DJshowLogo");
                        let DJname0 = document.getElementById("DJname");
                        let DJbio0 = document.getElementById("DJbio");
                        let DJshowBio0 = document.getElementById("DJshowBio");
                        if(DJname0.innerHTML !== "TR Staff")
                            DJname0.innerHTML = "TR Staff";
                        if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 1:
                        let text1 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text1)
                            document.getElementById("bio").innerHTML = text1;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo1 = document.getElementById("DJshowLogo");
                        let DJname1 = document.getElementById("DJname");
                        let DJbio1 = document.getElementById("DJbio");
                        let DJshowBio1 = document.getElementById("DJshowBio");
                        if(DJname1.innerHTML !== "TR Staff")
                            DJname1.innerHTML = "TR Staff";
                        if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 2:
                        let text2 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text2)
                            document.getElementById("bio").innerHTML = text2;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo2 = document.getElementById("DJshowLogo");
                        let DJname2 = document.getElementById("DJname");
                        let DJbio2 = document.getElementById("DJbio");
                        let DJshowBio2 = document.getElementById("DJshowBio");
                        if(DJname2.innerHTML !== "TR Staff")
                            DJname2.innerHTML = "TR Staff";
                        if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 3:
                        let text3 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text3)
                            document.getElementById("bio").innerHTML = text3;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo3 = document.getElementById("DJshowLogo");
                        let DJname3 = document.getElementById("DJname");
                        let DJbio3 = document.getElementById("DJbio");
                        let DJshowBio3 = document.getElementById("DJshowBio");
                        if(DJname3.innerHTML !== "TR Staff")
                            DJname3.innerHTML = "TR Staff";
                        if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 4:
                        let text4 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text4)
                            document.getElementById("bio").innerHTML = text4;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo4 = document.getElementById("DJshowLogo");
                        let DJname4 = document.getElementById("DJname");
                        let DJbio4 = document.getElementById("DJbio");
                        let DJshowBio4 = document.getElementById("DJshowBio");
                        if(DJname4.innerHTML !== "TR Staff")
                            DJname4.innerHTML = "TR Staff";
                        if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 5:
                        let text5 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text5)
                            document.getElementById("bio").innerHTML = text5;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo5 = document.getElementById("DJshowLogo");
                        let DJname5 = document.getElementById("DJname");
                        let DJbio5 = document.getElementById("DJbio");
                        let DJshowBio5 = document.getElementById("DJshowBio");
                        if(DJname5.innerHTML !== "TR Staff")
                            DJname5.innerHTML = "TR Staff";
                        if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 6:
                        let text6 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text6)
                            document.getElementById("bio").innerHTML = text6;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo6 = document.getElementById("DJshowLogo");
                        let DJname6 = document.getElementById("DJname");
                        let DJbio6 = document.getElementById("DJbio");
                        let DJshowBio6 = document.getElementById("DJshowBio");
                        if(DJname6.innerHTML !== "TR Staff")
                            DJname6.innerHTML = "TR Staff";
                        if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 7:
                        let text7 = "";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text7)
                                document.getElementById("bio").innerHTML = text7;
                        let DJshowLogo7 = document.getElementById("DJshowLogo");
                        let DJname7 = document.getElementById("DJname");
                        let DJbio7 = document.getElementById("DJbio");
                        let DJshowBio7 = document.getElementById("DJshowBio");  
                        if(DJname7.innerHTML !== "")
                            DJname7.innerHTML = "";
                        if(DJbio7.innerHTML !== "")
                                DJbio7.innerHTML = "";
                        if(DJshowBio7.innerHTML !== "")
                            DJshowBio7.innerHTML = "";
                        if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break
                    case 8:
                        let text8 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let DJshowLogo8 = document.getElementById("DJshowLogo");
                        let DJname8 = document.getElementById("DJname");
                        let DJbio8 = document.getElementById("DJbio");
                        let DJshowBio8 = document.getElementById("DJshowBio");
                        if (DJname8.innerHTML !== "")
                            DJname8.innerHTML = "";
                        if (DJbio8.innerHTML !== "")
                            DJbio8.innerHTML = "";
                        if (DJshowBio8.innerHTML !== "")
                            DJshowBio8.innerHTML = "";
                        if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    case 9:
                        let text9 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let DJshowLogo9 = document.getElementById("DJshowLogo");
                        let DJname9 = document.getElementById("DJname");
                        let DJbio9 = document.getElementById("DJbio");
                        let DJshowBio9 = document.getElementById("DJshowBio");
                        if (DJname9.innerHTML !== "")
                            DJname9.innerHTML = "";
                        if (DJbio9.innerHTML !== "")
                            DJbio9.innerHTML = "";
                        if (DJshowBio9.innerHTML !== "")
                            DJshowBio9.innerHTML = "";
                        if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                            
                    case 10:
                        let text10 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let DJshowLogo10 = document.getElementById("DJshowLogo");
                        let DJname10 = document.getElementById("DJname");
                        let DJbio10 = document.getElementById("DJbio");
                        let DJshowBio10 = document.getElementById("DJshowBio");
                        if (DJname10.innerHTML !== "")
                            DJname10.innerHTML = "";
                        if (DJbio10.innerHTML !== "")
                            DJbio10.innerHTML = "";
                        if (DJshowBio10.innerHTML !== "")
                            DJshowBio10.innerHTML = "";
                        if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 11:
                        let text11 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let DJshowLogo11 = document.getElementById("DJshowLogo");
                        let DJname11 = document.getElementById("DJname");
                        let DJbio11 = document.getElementById("DJbio");
                        let DJshowBio11 = document.getElementById("DJshowBio");
                        if (DJname11.innerHTML !== "")
                            DJname11.innerHTML = "";
                        if (DJbio11.innerHTML !== "")
                            DJbio11.innerHTML = "";
                        if (DJshowBio11.innerHTML !== "")
                            DJshowBio11.innerHTML = "";
                        if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 12:
                        let text12 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let DJshowLogo12 = document.getElementById("DJshowLogo");
                        let DJname12 = document.getElementById("DJname");
                        let DJbio12 = document.getElementById("DJbio");
                        let DJshowBio12 = document.getElementById("DJshowBio");
                        if (DJname12.innerHTML !== "")
                            DJname12.innerHTML = "";
                        if (DJbio12.innerHTML !== "")
                            DJbio12.innerHTML = "";
                        if (DJshowBio12.innerHTML !== "")
                            DJshowBio12.innerHTML = "";
                        if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 13:
                        let text13 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text13)
                            document.getElementById("bio").innerHTML = text13;
                        let DJshowLogo13 = document.getElementById("DJshowLogo");
                        let DJname13 = document.getElementById("DJname");
                        let DJbio13 = document.getElementById("DJbio");
                        let DJshowBio13 = document.getElementById("DJshowBio");
                        if (DJname13.innerHTML !== "")
                            DJname13.innerHTML = "";
                        if (DJbio13.innerHTML !== "")
                            DJbio13.innerHTML = "";
                        if (DJshowBio13.innerHTML !== "")
                            DJshowBio13.innerHTML = "";
                        if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
    
                    case 14:
                        let text14 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text14)
                            document.getElementById("bio").innerHTML = text14;
                        let DJshowLogo14 = document.getElementById("DJshowLogo");
                        let DJname14 = document.getElementById("DJname");
                        let DJbio14 = document.getElementById("DJbio");
                        let DJshowBio14 = document.getElementById("DJshowBio");
                        if (DJname14.innerHTML !== "")
                            DJname14.innerHTML = "";
                        if (DJbio14.innerHTML !== "")
                            DJbio14.innerHTML = "";
                        if (DJshowBio14.innerHTML !== "")
                            DJshowBio14.innerHTML = "";
                        if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 15:
                        let text15 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text15)
                            document.getElementById("bio").innerHTML = text15;
                        let DJshowLogo15 = document.getElementById("DJshowLogo");
                        let DJname15 = document.getElementById("DJname");
                        let DJbio15 = document.getElementById("DJbio");
                        let DJshowBio15 = document.getElementById("DJshowBio");
                        if (DJname15.innerHTML !== "")
                            DJname15.innerHTML = "";
                        if (DJbio15.innerHTML !== "")
                            DJbio15.innerHTML = "";
                        if (DJshowBio15.innerHTML !== "")
                            DJshowBio15.innerHTML = "";
                        if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 16:
                        let text16 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text16)
                            document.getElementById("bio").innerHTML = text16;
                        let DJshowLogo16 = document.getElementById("DJshowLogo");
                        let DJname16 = document.getElementById("DJname");
                        let DJbio16 = document.getElementById("DJbio");
                        let DJshowBio16 = document.getElementById("DJshowBio");
                        if (DJname16.innerHTML !== "")
                            DJname16.innerHTML = "";
                        if (DJbio16.innerHTML !== "")
                            DJbio16.innerHTML = "";
                        if (DJshowBio16.innerHTML !== "")
                            DJshowBio16.innerHTML = "";
                        if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 17:
                        let text17 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text17)
                            document.getElementById("bio").innerHTML = text17;
                        let DJshowLogo17 = document.getElementById("DJshowLogo");
                        let DJname17 = document.getElementById("DJname");
                        let DJbio17 = document.getElementById("DJbio");
                        let DJshowBio17 = document.getElementById("DJshowBio");
                        if (DJname17.innerHTML !== "")
                            DJname17.innerHTML = "";
                        if (DJbio17.innerHTML !== "")
                            DJbio17.innerHTML = "";
                        if (DJshowBio17.innerHTML !== "")
                            DJshowBio17.innerHTML = "";
                        if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 18:
                        let text18 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let DJshowLogo18 = document.getElementById("DJshowLogo");
                        let DJname18 = document.getElementById("DJname");
                        let DJbio18 = document.getElementById("DJbio");
                        let DJshowBio18 = document.getElementById("DJshowBio");
                        if (DJname18.innerHTML !== "")
                            DJname18.innerHTML = "";
                        if (DJbio18.innerHTML !== "")
                            DJbio18.innerHTML = "";
                        if (DJshowBio18.innerHTML !== "")
                            DJshowBio18.innerHTML = "";
                        if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 19:
                        let text19 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let DJshowLogo19 = document.getElementById("DJshowLogo");
                        let DJname19 = document.getElementById("DJname");
                        let DJbio19 = document.getElementById("DJbio");
                        let DJshowBio19 = document.getElementById("DJshowBio");
                        if (DJname19.innerHTML !== "")
                            DJname19.innerHTML = "";
                        if (DJbio19.innerHTML !== "")
                            DJbio19.innerHTML = "";
                        if (DJshowBio19.innerHTML !== "")
                            DJshowBio19.innerHTML = "";
                        if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 20:
                        let text20 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let DJshowLogo20 = document.getElementById("DJshowLogo");
                        let DJname20 = document.getElementById("DJname");
                        let DJbio20 = document.getElementById("DJbio");
                        let DJshowBio20 = document.getElementById("DJshowBio");
                        if (DJname20.innerHTML !== "")
                            DJname20.innerHTML = "";
                        if (DJbio20.innerHTML !== "")
                            DJbio20.innerHTML = "";
                        if (DJshowBio20.innerHTML !== "")
                            DJshowBio20.innerHTML = "";
                        if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                                     
                    case 21:
                        let text21 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let DJshowLogo21 = document.getElementById("DJshowLogo");
                        let DJname21 = document.getElementById("DJname");
                        let DJbio21 = document.getElementById("DJbio");
                        let DJshowBio21 = document.getElementById("DJshowBio");
                        if (DJname21.innerHTML !== "")
                            DJname21.innerHTML = "";
                        if (DJbio21.innerHTML !== "")
                            DJbio21.innerHTML = "";
                        if (DJshowBio21.innerHTML !== "")
                            DJshowBio21.innerHTML = "";
                        if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 22:
                        let text22 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let DJshowLogo22 = document.getElementById("DJshowLogo");
                        let DJname22 = document.getElementById("DJname");
                        let DJbio22 = document.getElementById("DJbio");
                        let DJshowBio22 = document.getElementById("DJshowBio");
                        if (DJname22.innerHTML !== "")
                            DJname22.innerHTML = "";
                        if (DJbio22.innerHTML !== "")
                            DJbio22.innerHTML = "";
                        if (DJshowBio22.innerHTML !== "")
                            DJshowBio22.innerHTML = "";
                        if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 23:
                        let text23 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let DJshowLogo23 = document.getElementById("DJshowLogo");
                        let DJname23 = document.getElementById("DJname");
                        let DJbio23 = document.getElementById("DJbio");
                        let DJshowBio23 = document.getElementById("DJshowBio");
                        if (DJname23.innerHTML !== "")
                            DJname23.innerHTML = "";
                        if (DJbio23.innerHTML !== "")
                            DJbio23.innerHTML = "";
                        if (DJshowBio23.innerHTML !== "")
                            DJshowBio23.innerHTML = "";
                        if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;  
            }
            break
        case 6:
            switch(nextDate.getHours()) {
                case 0:
                    case 0:
                        let text0 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text0)
                            document.getElementById("bio").innerHTML = text0;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo0 = document.getElementById("DJshowLogo");
                        let DJname0 = document.getElementById("DJname");
                        let DJbio0 = document.getElementById("DJbio");
                        let DJshowBio0 = document.getElementById("DJshowBio");
                        if(DJname0.innerHTML !== "TR Staff")
                            DJname0.innerHTML = "TR Staff";
                        if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 1:
                        let text1 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text1)
                            document.getElementById("bio").innerHTML = text1;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo1 = document.getElementById("DJshowLogo");
                        let DJname1 = document.getElementById("DJname");
                        let DJbio1 = document.getElementById("DJbio");
                        let DJshowBio1 = document.getElementById("DJshowBio");
                        if(DJname1.innerHTML !== "TR Staff")
                            DJname1.innerHTML = "TR Staff";
                        if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 2:
                        let text2 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text2)
                            document.getElementById("bio").innerHTML = text2;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo2 = document.getElementById("DJshowLogo");
                        let DJname2 = document.getElementById("DJname");
                        let DJbio2 = document.getElementById("DJbio");
                        let DJshowBio2 = document.getElementById("DJshowBio");
                        if(DJname2.innerHTML !== "TR Staff")
                            DJname2.innerHTML = "TR Staff";
                        if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 3:
                        let text3 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text3)
                            document.getElementById("bio").innerHTML = text3;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo3 = document.getElementById("DJshowLogo");
                        let DJname3 = document.getElementById("DJname");
                        let DJbio3 = document.getElementById("DJbio");
                        let DJshowBio3 = document.getElementById("DJshowBio");
                        if(DJname3.innerHTML !== "TR Staff")
                            DJname3.innerHTML = "TR Staff";
                        if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 4:
                        let text4 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text4)
                            document.getElementById("bio").innerHTML = text4;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo4 = document.getElementById("DJshowLogo");
                        let DJname4 = document.getElementById("DJname");
                        let DJbio4 = document.getElementById("DJbio");
                        let DJshowBio4 = document.getElementById("DJshowBio");
                        if(DJname4.innerHTML !== "TR Staff")
                            DJname4.innerHTML = "TR Staff";
                        if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 5:
                        let text5 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text5)
                            document.getElementById("bio").innerHTML = text5;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo5 = document.getElementById("DJshowLogo");
                        let DJname5 = document.getElementById("DJname");
                        let DJbio5 = document.getElementById("DJbio");
                        let DJshowBio5 = document.getElementById("DJshowBio");
                        if(DJname5.innerHTML !== "TR Staff")
                            DJname5.innerHTML = "TR Staff";
                        if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 6:
                        let text6 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text6)
                            document.getElementById("bio").innerHTML = text6;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo6 = document.getElementById("DJshowLogo");
                        let DJname6 = document.getElementById("DJname");
                        let DJbio6 = document.getElementById("DJbio");
                        let DJshowBio6 = document.getElementById("DJshowBio");
                        if(DJname6.innerHTML !== "TR Staff")
                            DJname6.innerHTML = "TR Staff";
                        if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 7:
                        let text7 = "";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text7)
                                document.getElementById("bio").innerHTML = text7;
                        let DJshowLogo7 = document.getElementById("DJshowLogo");
                        let DJname7 = document.getElementById("DJname");
                        let DJbio7 = document.getElementById("DJbio");
                        let DJshowBio7 = document.getElementById("DJshowBio");  
                        if(DJname7.innerHTML !== "")
                            DJname7.innerHTML = "";
                        if(DJbio7.innerHTML !== "")
                                DJbio7.innerHTML = "";
                        if(DJshowBio7.innerHTML !== "")
                            DJshowBio7.innerHTML = "";
                        if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break
                    case 8:
                        let text8 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let DJshowLogo8 = document.getElementById("DJshowLogo");
                        let DJname8 = document.getElementById("DJname");
                        let DJbio8 = document.getElementById("DJbio");
                        let DJshowBio8 = document.getElementById("DJshowBio");
                        if (DJname8.innerHTML !== "")
                            DJname8.innerHTML = "";
                        if (DJbio8.innerHTML !== "")
                            DJbio8.innerHTML = "";
                        if (DJshowBio8.innerHTML !== "")
                            DJshowBio8.innerHTML = "";
                        if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    case 9:
                        let text9 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let DJshowLogo9 = document.getElementById("DJshowLogo");
                        let DJname9 = document.getElementById("DJname");
                        let DJbio9 = document.getElementById("DJbio");
                        let DJshowBio9 = document.getElementById("DJshowBio");
                        if (DJname9.innerHTML !== "")
                            DJname9.innerHTML = "";
                        if (DJbio9.innerHTML !== "")
                            DJbio9.innerHTML = "";
                        if (DJshowBio9.innerHTML !== "")
                            DJshowBio9.innerHTML = "";
                        if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                            
                    case 10:
                        let text10 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let DJshowLogo10 = document.getElementById("DJshowLogo");
                        let DJname10 = document.getElementById("DJname");
                        let DJbio10 = document.getElementById("DJbio");
                        let DJshowBio10 = document.getElementById("DJshowBio");
                        if (DJname10.innerHTML !== "")
                            DJname10.innerHTML = "";
                        if (DJbio10.innerHTML !== "")
                            DJbio10.innerHTML = "";
                        if (DJshowBio10.innerHTML !== "")
                            DJshowBio10.innerHTML = "";
                        if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 11:
                        let text11 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let DJshowLogo11 = document.getElementById("DJshowLogo");
                        let DJname11 = document.getElementById("DJname");
                        let DJbio11 = document.getElementById("DJbio");
                        let DJshowBio11 = document.getElementById("DJshowBio");
                        if (DJname11.innerHTML !== "")
                            DJname11.innerHTML = "";
                        if (DJbio11.innerHTML !== "")
                            DJbio11.innerHTML = "";
                        if (DJshowBio11.innerHTML !== "")
                            DJshowBio11.innerHTML = "";
                        if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 12:
                        let text12 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let DJshowLogo12 = document.getElementById("DJshowLogo");
                        let DJname12 = document.getElementById("DJname");
                        let DJbio12 = document.getElementById("DJbio");
                        let DJshowBio12 = document.getElementById("DJshowBio");
                        if (DJname12.innerHTML !== "")
                            DJname12.innerHTML = "";
                        if (DJbio12.innerHTML !== "")
                            DJbio12.innerHTML = "";
                        if (DJshowBio12.innerHTML !== "")
                            DJshowBio12.innerHTML = "";
                        if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 13:
                        let text13 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text13)
                            document.getElementById("bio").innerHTML = text13;
                        let DJshowLogo13 = document.getElementById("DJshowLogo");
                        let DJname13 = document.getElementById("DJname");
                        let DJbio13 = document.getElementById("DJbio");
                        let DJshowBio13 = document.getElementById("DJshowBio");
                        if (DJname13.innerHTML !== "")
                            DJname13.innerHTML = "";
                        if (DJbio13.innerHTML !== "")
                            DJbio13.innerHTML = "";
                        if (DJshowBio13.innerHTML !== "")
                            DJshowBio13.innerHTML = "";
                        if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
    
                    case 14:
                        let text14 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text14)
                            document.getElementById("bio").innerHTML = text14;
                        let DJshowLogo14 = document.getElementById("DJshowLogo");
                        let DJname14 = document.getElementById("DJname");
                        let DJbio14 = document.getElementById("DJbio");
                        let DJshowBio14 = document.getElementById("DJshowBio");
                        if (DJname14.innerHTML !== "")
                            DJname14.innerHTML = "";
                        if (DJbio14.innerHTML !== "")
                            DJbio14.innerHTML = "";
                        if (DJshowBio14.innerHTML !== "")
                            DJshowBio14.innerHTML = "";
                        if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 15:
                        let text15 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text15)
                            document.getElementById("bio").innerHTML = text15;
                        let DJshowLogo15 = document.getElementById("DJshowLogo");
                        let DJname15 = document.getElementById("DJname");
                        let DJbio15 = document.getElementById("DJbio");
                        let DJshowBio15 = document.getElementById("DJshowBio");
                        if (DJname15.innerHTML !== "")
                            DJname15.innerHTML = "";
                        if (DJbio15.innerHTML !== "")
                            DJbio15.innerHTML = "";
                        if (DJshowBio15.innerHTML !== "")
                            DJshowBio15.innerHTML = "";
                        if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 16:
                        let text16 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text16)
                            document.getElementById("bio").innerHTML = text16;
                        let DJshowLogo16 = document.getElementById("DJshowLogo");
                        let DJname16 = document.getElementById("DJname");
                        let DJbio16 = document.getElementById("DJbio");
                        let DJshowBio16 = document.getElementById("DJshowBio");
                        if (DJname16.innerHTML !== "")
                            DJname16.innerHTML = "";
                        if (DJbio16.innerHTML !== "")
                            DJbio16.innerHTML = "";
                        if (DJshowBio16.innerHTML !== "")
                            DJshowBio16.innerHTML = "";
                        if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 17:
                        let text17 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text17)
                            document.getElementById("bio").innerHTML = text17;
                        let DJshowLogo17 = document.getElementById("DJshowLogo");
                        let DJname17 = document.getElementById("DJname");
                        let DJbio17 = document.getElementById("DJbio");
                        let DJshowBio17 = document.getElementById("DJshowBio");
                        if (DJname17.innerHTML !== "")
                            DJname17.innerHTML = "";
                        if (DJbio17.innerHTML !== "")
                            DJbio17.innerHTML = "";
                        if (DJshowBio17.innerHTML !== "")
                            DJshowBio17.innerHTML = "";
                        if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 18:
                        let text18 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let DJshowLogo18 = document.getElementById("DJshowLogo");
                        let DJname18 = document.getElementById("DJname");
                        let DJbio18 = document.getElementById("DJbio");
                        let DJshowBio18 = document.getElementById("DJshowBio");
                        if (DJname18.innerHTML !== "")
                            DJname18.innerHTML = "";
                        if (DJbio18.innerHTML !== "")
                            DJbio18.innerHTML = "";
                        if (DJshowBio18.innerHTML !== "")
                            DJshowBio18.innerHTML = "";
                        if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 19:
                        let text19 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let DJshowLogo19 = document.getElementById("DJshowLogo");
                        let DJname19 = document.getElementById("DJname");
                        let DJbio19 = document.getElementById("DJbio");
                        let DJshowBio19 = document.getElementById("DJshowBio");
                        if (DJname19.innerHTML !== "")
                            DJname19.innerHTML = "";
                        if (DJbio19.innerHTML !== "")
                            DJbio19.innerHTML = "";
                        if (DJshowBio19.innerHTML !== "")
                            DJshowBio19.innerHTML = "";
                        if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 20:
                        let text20 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let DJshowLogo20 = document.getElementById("DJshowLogo");
                        let DJname20 = document.getElementById("DJname");
                        let DJbio20 = document.getElementById("DJbio");
                        let DJshowBio20 = document.getElementById("DJshowBio");
                        if (DJname20.innerHTML !== "")
                            DJname20.innerHTML = "";
                        if (DJbio20.innerHTML !== "")
                            DJbio20.innerHTML = "";
                        if (DJshowBio20.innerHTML !== "")
                            DJshowBio20.innerHTML = "";
                        if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                                     
                    case 21:
                        let text21 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let DJshowLogo21 = document.getElementById("DJshowLogo");
                        let DJname21 = document.getElementById("DJname");
                        let DJbio21 = document.getElementById("DJbio");
                        let DJshowBio21 = document.getElementById("DJshowBio");
                        if (DJname21.innerHTML !== "")
                            DJname21.innerHTML = "";
                        if (DJbio21.innerHTML !== "")
                            DJbio21.innerHTML = "";
                        if (DJshowBio21.innerHTML !== "")
                            DJshowBio21.innerHTML = "";
                        if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 22:
                        let text22 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let DJshowLogo22 = document.getElementById("DJshowLogo");
                        let DJname22 = document.getElementById("DJname");
                        let DJbio22 = document.getElementById("DJbio");
                        let DJshowBio22 = document.getElementById("DJshowBio");
                        if (DJname22.innerHTML !== "")
                            DJname22.innerHTML = "";
                        if (DJbio22.innerHTML !== "")
                            DJbio22.innerHTML = "";
                        if (DJshowBio22.innerHTML !== "")
                            DJshowBio22.innerHTML = "";
                        if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 23:
                        let text23 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let DJshowLogo23 = document.getElementById("DJshowLogo");
                        let DJname23 = document.getElementById("DJname");
                        let DJbio23 = document.getElementById("DJbio");
                        let DJshowBio23 = document.getElementById("DJshowBio");
                        if (DJname23.innerHTML !== "")
                            DJname23.innerHTML = "";
                        if (DJbio23.innerHTML !== "")
                            DJbio23.innerHTML = "";
                        if (DJshowBio23.innerHTML !== "")
                            DJshowBio23.innerHTML = "";
                        if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;  
            } 
            break                                                           

    }
    if (nextDate.getMinutes() !== 0) { // You can check for seconds here too
        callEveryMinute();
    }
    /*else {
        nextDate.setHours(nextDate.getHours() + 1);
        nextDate.setMinutes(0);
        nextDate.setSeconds(0);
    }
    */
}
function callEveryMinute() {
    setInterval(DJSchedule, 30000);
}
DJSchedule();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("DJ_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener("click", popupWindow);
function popupWindow() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// </script>
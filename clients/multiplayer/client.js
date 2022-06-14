            function texture() {
                var texturechoice = prompt(
                    "Choose a texture pack: \n\n[1] - Default 1.5.2 \n[2] - Hypixel Pvp \n[3] - Bat Client \n[4] - Tight \n[5] - 1.16 \n[6] - 1.16 Modified \n[7] - 1.16 Dark \n[8] - 1.17 \n[9] - 1.17 Modified \n[10] - 1.17 Dark \n[11] - Rice \n[12] - Miami Private 1.8 \n\nMore coming soon \nTo select a resource pack, enter the number from inside the brackets below."
                );

                var texture = "../../../packs/default-1.5.2.epk";

                //Default
                if (texturechoice == "1") {
                    texture = "../../../packs/default-1.5.2.epk";
                    document.title = document.title + " (Default)";
                }
                
                //Packs
                else if (texturechoice == "2") {
                    texture = "../../../packs/hypixel-pvp.epk";
                    document.title = document.title + " (Hypixel)";
                }
                else if (texturechoice == "3") {
                    texture = "../../../packs/batClient.epk";
                    document.title = document.title + " (Bat Client)";
                }
                else if (texturechoice == "4") {
                    texture = "../../../packs/tight.epk";
                    document.title = document.title + " (Tight)";
                }
                //1.16 packs
                else if (texturechoice == "5") {
                    texture = "../../../packs/1.16.epk";
                    document.title = document.title + " (1.16)";
                }
                else if (texturechoice == "6") {
                    texture = "../../../packs/M1.16.epk";
                    document.title = document.title + " (M1.16)";
                }
                else if (texturechoice == "7") {
                    texture = "../../../packs/1.16D.epk";
                    document.title = document.title + " (1.16 Dark)";
                }

                //1.17 packs
                else if (texturechoice == "8") {
                    texture = "../../../packs/1.17.epk";
                    document.title = document.title + " (1.17)";
                }
                else if (texturechoice == "9") {
                    texture = "../../../packs/M1.17.epk";
                    document.title = document.title + " (M1.17)";
                } 
                else if (texturechoice == "10") {
                    texture = "../../../packs/1.17D.epk";
                    document.title = document.title + " (1.17 Dark)";
                }

                //Ricefault
                else if (texturechoice == "11") {
                    texture = "../../../packs/Rice.epk";
                    document.title = document.title + " (Rice)";
                }

                //Miami Private
                else if (texturechoice == "12") {
                    texture = "../../../packs/Miami.Private.epk";
                    document.title = document.title + " (Miami)";
                }                
                

                //Xray
                else if (texturechoice == "xray" || texturechoice == "Xray") {
                    texture = "../../../packs/x-ray.epk";
                    document.title = document.title + " (X-Ray)";
                }                
                
                
                var name="",motd="aa",ip="";
                window.addEventListener("load", function () {
                    window.minecraftOpts = [
                        "game_frame",
                        texture,btoa(atob("CgAACQAHc2VydmVycwoAAAABCAAKZm9yY2VkTU9URAAIU2VydmVyIDEBAAtoaWRlQWRkcmVzcwEIAAJpcAAod3NzOi8vd3d3LnNlcnZlcjEtZ2FtZS1jZW50cmFsLmdxL3NlcnZlcggABG5hbWUADEdhbWUgQ2VudHJhbAAA"). replace("motdhere",String.fromCharCode(motd.length)+motd).replace("namehere", String.fromCharCode(name.length)+name).replace("iphere",String.fromCharCode(ip. length)+ip))
                    ];
                    (function () {
                        var q = window.location.search;
                        if (typeof q === "string" && q.startsWith("?")) {
                            q = new URLSearchParams(q);
                            var s = q.get("server");
                            if (s) window.minecraftOpts.push(s);
                        }
                    })();
                    main();
            if (window.location !== window.parent.location == true) {
              parent.document.title = document.title;
            };
            var link = parent.document.querySelector("link[rel~='icon']");
            if (!link) {
              link = parent.document.createElement('link');
              link.rel = 'icon';
              parent.document.getElementsByTagName('head')[0].appendChild(link);
            };
            link.href = '../../../images/icon.png';
                });
            }
            texture();
    

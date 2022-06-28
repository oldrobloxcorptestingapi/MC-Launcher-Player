                if ((new window.URL(window.location.href)).searchParams.get('pack') == null) {var pack = "/packs/default-1.5.2.epk";} else {var pack = "/packs/" + (new window.URL(window.location.href)).searchParams.get('pack');}
                
                var name="",motd="aa",ip="";
                window.addEventListener("load", function () {
                    window.minecraftOpts = [
                        "game_frame",
                        pack,btoa(atob("CgAACQAHc2VydmVycwoAAAABCAAKZm9yY2VkTU9URAAIU2VydmVyIDEBAAtoaWRlQWRkcmVzcwEIAAJpcAAod3NzOi8vd3d3LnNlcnZlcjEtZ2FtZS1jZW50cmFsLmdxL3NlcnZlcggABG5hbWUADEdhbWUgQ2VudHJhbAAA"). replace("motdhere",String.fromCharCode(motd.length)+motd).replace("namehere", String.fromCharCode(name.length)+name).replace("iphere",String.fromCharCode(ip. length)+ip))
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
                });
              title();
            function title() {
              if (window.location !== window.parent.location == true) {
                document.title = "Minecraft 1.5.2";
                parent.document.title = document.title;
                var link = parent.document.querySelector("link[rel~='icon']");
                if (!link) {
                  link = parent.document.createElement('link');
                  link.rel = 'icon';
                  parent.document.getElementsByTagName('head')[0].appendChild(link);
                };
                link.href = 'https://play.mc-launcher.gq/images/icon.png';
              };
            }

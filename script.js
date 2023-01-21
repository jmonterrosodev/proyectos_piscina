new Vue({
      el: '#app',
      vuetify: new Vuetify(),
  data:()=>{
            return {
                contador: 0,
                pokemons: [],
                color: "black--text",
                keysValues: [],
                object: { 
                  'z': null,
                  'x': false,
                  'y':true 
                },
                estilo:{
                  backgroundColor: "White"
                },
                background: "Black",
                colors : [
                "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", 
                "Azure", "Beige", "Bisque", "Black",
                "BlanchedAlmond", "Blue", "BlueViolet", "Brown",
                "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
                "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
                "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
                "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
                "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", 
                "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
                "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
                "DeepPink",  "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
                "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
                "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
                "Gray", "Grey", "Green", "GreenYellow",
                "HoneyDew", "HotPink", "IndianRed", "Indigo",
                "Ivory", "Khaki", "Lavender", "LavenderBlush",
                "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
                "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey",
                "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen",
                "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
                "LightSteelBlue",  "LightYellow", "Lime", "LimeGreen",
                "Linen", "Magenta", "Maroon", "MediumAquaMarine",
                "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
                "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", 
                "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose",
                "Moccasin", "NavajoWhite", "Navy", "OldLace",
                "Olive", "OliveDrab", "Orange", "OrangeRed",
                "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
                "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru",
                "Pink", "Plum", "PowderBlue", "Purple",
                "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
                "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
                "SeaShell", "Sienna", "Silver", "SkyBlue",
                "SlateBlue", "SlateGray", "SlateGrey", "Snow",
                "SpringGreen", "SteelBlue", "Tan", "Teal",
                "Thistle", "Tomato", "Turquoise", "Violet",
                "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
              ]
            }
        },
        created(){
          this.cargarPokemons();
        },
        mounted(){
            this.keysAndValues(this.object);
        },
        watch: {
          contador(contador) {
            return contador>0 ? this.color = "green--text" : contador<0 ? this.color = "red--text" : this.color = "black--text";
          }
        },
        methods:{
            keysAndValues(object){
                let keys, values = {};
                keys = Object.keys(object).sort();
                values = keys.map((x) => { return object[x]});
                this.keysValues = [keys, values];          
            },
          switchColor(){
            this.background =  this.colors[Math.floor(Math.random() * (this.colors.length - 1) )];
            this.estilo.backgroundColor = this.background ;
          },
          cargarPokemons(){
            let num = 0;
            let url = ``;
            let object = {};
            for (var i = 0; i < 6; i++) {
              num = Math.floor(Math.random() * 897);
              url = `https://pokeapi.co/api/v2/pokemon/${num}/`;  
              
              axios.get(url).then( (response) => {                
                console.log(response.data.forms[0].name);
                object = {
                  nombre: response.data.forms[0].name,
                  img: response.data.sprites.other.home.front_default,
                  num: response.data.id,
                  url: response.data.forms[0].url      
                };
                this.pokemons.push(object);
              }).catch (error => console.log(error));

            };
          }
        }
    });
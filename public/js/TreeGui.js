

categoriesstring = 
' < Software Engineering << Web development <<< Front-end <<< Back-end <<< Full-stack << Mobile Developer <<< Android <<< Ios << QA' + 
' << Devops << Other < Data Science & Machine Learning < Cybersecurity < General I.T. < Support & Sales < Graphic Design < Industrial design & Product development < Legal'+
' << Title examiner << Paralegal << Legal Secretary << Legal writer << Process Server << Copywriter << Other < Other'


function convStringToGui(string,sign){


    //SplitBasedonSign
    const signsplit = new RegExp(` ${sign} `); 
    const branches = string.split(signsplit)
    branches.shift()

    

    //create jobspane
    const pane = document.createElement('div');
          pane.setAttribute('class','pane pane_invisible')
          

    let panes = []
    
    let nextpanes = []


    //loop branches
        for(let j = 0; j < branches.length; j++){

       //console.log(j,JSON.stringify(sign), branches, JSON.stringify(branches[j]), JSON.stringify(panes))

        let curbranch = branches[j]
              curbranch += ' '

        const signcanonical = sign.charAt(0)
        const nextsign = sign + signcanonical

    
        //nakijken
        const i = curbranch.indexOf(nextsign);
        const word = curbranch.slice(0,i)

        let restofbranch = null

        if(i != -1){
            restofbranch = ' ' + nextsign + ' ' + curbranch.slice(i+(nextsign.length)+1)
            
        }

        const element = document.createElement("div");
        element.setAttribute('class', 'el')
        element.setAttribute('id', word)

        const label = document.createElement("label")
        label.innerHTML = word
        element.appendChild(label) 



        if(restofbranch != null){

            const restofpanes = convStringToGui(restofbranch,nextsign)

            restofpanes[0].setAttribute('id','pane ' + word)
            
            for(let k = 0; k < restofpanes.length; k++){
    
                nextpanes.push(restofpanes[k])
            }

            element.addEventListener('click', function (event) {
                                

                                activepane = document.getElementsByClassName("pane_visible");

                                activepane[0].className = "pane pane_invisible"

                                elpane = document.getElementById('pane ' + word)

                                elpane.className = 'pane pane_visible';
                              

            })
            

        }else{

            element.addEventListener('click', function (event) {

                element.parentElement.parentElement.className = 'treeGuiInvisible'

                const selector = document.getElementById('craftselector')
                 selector.innerHTML = word            

            })
        }


        
        pane.appendChild(element)
        
    
    }

    panes.push(pane)



    for(let i = 0; i < nextpanes.length; i++){
        panes.push(nextpanes[i])
    }
    
    if(sign.length == 1){

        basecont = document.createElement('div');
        basecont.setAttribute('id','treeGui')
        basecont.setAttribute('tabindex', 0)  


        basecont.addEventListener("focusout", function(event){

            allpanes = basecont.children
            for (let pane of allpanes) {
                    pane.className = "pane pane_invisible"
                }
                basecont.className = 'treeGuiInvisible'
        });


        basecont.className = ('treeGuiInvisible')

        panes[0].setAttribute('id',"pane first")

        for(let h = 0; h < panes.length; h++){
            basecont.appendChild(panes[h])
         }
        
        return basecont
    }
    else{
        
        return panes
    }


    }


    function OpenTreeGui(){

        const firstpane = document.getElementById('pane first')

        treeGui.className = 'treeGuiVisible'
        treeGui.firstChild.className = "pane pane_visible"
        treeGui.focus()

    }

    function CloseTreeGui(){

        allpanes = treeGui.children

        for (let pane of allpanes) {
            pane.className = "pane pane_invisible"
        }

        treeGui.className = 'treeGuiInvisible'
    }

    function toggleGui(){
        if(treeGui.className == 'treeGuiInvisible'){
            OpenTreeGui()

        }else if(treeGui.className == 'treeGuiVisible'){
            CloseTreeGui()

        }

    }

    

   
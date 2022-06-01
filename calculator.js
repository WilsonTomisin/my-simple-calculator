let elements = document.querySelectorAll("ul li")
        

        elements.forEach((node)=>{
            node.addEventListener('mousedown',function(event) {
                const result = document.querySelector(".result")
                const resulttxt= result.innerHTML.trim()
                const value = node.innerHTML
                
                if (resulttxt == "0" || resulttxt == "undefined" || resulttxt =="Infinity") {
                    result.innerHTML = ""
                }

                if (value == "C") {
                    result.innerHTML = ""
                    return true
                }
                if (value == "=") {
                    var sol = eval(resulttxt)
                    result.innerHTML = sol
                    return true
                }
                result.append(value)
            })
        })
let reset = document.querySelector("#reset");
let boxs = document.querySelectorAll(".box");
let result = document.querySelector(".result");

let turn = true;

let winPatterns = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

boxs.forEach(
    (box) => {
        box.addEventListener("click",() => {
            if(turn)
            {
                box.innerText = "X";
                turn = false;
            }
            else
            {
                box.innerText = "O";
                turn = true;
            }
            box.disabled = true;
            winPatterns.forEach( (pattern) => {
                    let v1 = boxs[pattern[0]].innerText;
                    let v2 = boxs[pattern[1]].innerText;
                    let v3 = boxs[pattern[2]].innerText;
                    if(v1==v2 && v2==v3 && v1!="")
                    {
                        result.innerText = `🎉 Player ${v1} won the game 🎉`;
                        boxs.forEach(
                            (box) => {
                                box.disabled = true;
                            }
                        )
                    }
                }
            )
        });
    }
)
reset.addEventListener("click",() => {
    boxs.forEach(
        (box) => {
            box.innerText = "";
            box.disabled = false;
            result.innerText = "";
        }
    )
    turn = true;
})
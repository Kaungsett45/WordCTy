const HEAD=(
    <div style={{
        width:"50px",
        height :"50px",
        borderRadius: "100%",
        border : "10px solid black",
        position:"absolute",
        top :"50px",
        right: "-29px"
    }}></div>
)

const BODY= (
    <div style={{
        width: "10px",
        height:"100px",
        background: "black",
        position: "absolute",
        top: "116px",
        right: 0,
    }}></div>
)

const RIGHT_ARM= (
    <div style={{
        width: "100px",
        height:"10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
    }}></div>
)

const LEFT_ARM= (
    <div style={{
        width: "100px",
        height:"10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
    }}></div>
)

const Right_LEG= (
    <div style={{
        width: "100px",
        height:"10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-100px",
        rotate: "30deg",
        transformOrigin: "left top",
    }}></div>
)
const LEFT_LEG= (
    <div style={{
        width: "100px",
        height:"10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "10px",
        rotate: "-30deg",
        transformOrigin: "right top",
    }}></div>
)

export  function HangmanDrawing(){

    return(
        <>
            <div style={{ position: "relative"}}>
                {HEAD}
                {BODY}
                {RIGHT_ARM}
                {LEFT_ARM}
                {Right_LEG}
                {LEFT_LEG}
                <div style={{height: "50px", width:"10px",background:"black",position:"absolute",top:"0",right:"0"}}></div>
                <div style={{height: '10px', width:"200px", background:"black",marginLeft:"120px"}}></div>
                <div style={{height:"400px",width:"10px", background: "black" , marginLeft: "120px"}}></div>
                <div style={{ height: "10px", width:"250px", background: "black"}}></div>

                
            </div>
        </>
    )


    
}
function fecharDialog(){
    document.getElementById("btn_dialog").innerHTML="Abrir";
    document.getElementById("d1").removeAttribute("open");
}
function abrirDIalog(){
    document.getElementById("btn_dialog").innerHTML="Fechar";
    document.getElementById("d1").setAttribute("open","")
}
function controlaDialog(msg, titulo){
    if(document.getElementById("d1").open){
        fecharDialog();
    }else{
        abrirDIalog();
        document.getElementById("titulo").innerHTML=titulo;
        document.getElementById(",msg1 ").innerHTML=titulo;
    }
}


    function getXMLHTTPRequest() {
        var req= false;

        try {
            req= new XMLHttpRequest(); /*Per FireFox*/
        }catch (err1) {
            try {
                req= new ActiveXObject("Msxml2.XMLHTTP"); /*Alcune versioni di IE*/
            }catch (err2) {
                try {
                    req=new ActiveXObject("Microsoft.XMLHTTP"); /*Alcune versioni di IE*/
                }catch (err3) {
                    req=false;
                }
            }
        }
        return req;
    }
    var http=getXMLHTTPRequest();




    function getServerTime() {

        var myurl='telltimeXML.php';
        myRand=parseInt(Math.random()*999999999);
        var modurl=myurl+"?rand="+myRand;
        http.open("GET", modurl,true);
        http.responseType = "document";
        http.onreadystatechange= useHttpResponse;
        http.send();

    }

    function useHttpResponse() {
        if(http.readyState==4){
            if(http.status==200){
                var timeValue= http.responseXML.getElementsByTagName("timenow")[0];
                document.getElementById('showtime').innerHTML= timeValue.childNodes[0].nodeValue;

            }

        }else {
            document.getElementById('showtime').innerHTML='<img src="loading_icon.gif">';

        }

    }

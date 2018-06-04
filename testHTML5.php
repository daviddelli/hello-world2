<!DOCTYPE html>
<html lang="it" manifest="prova.appcache">
<head>
    <meta charset="UTF-8">
    <title>Esempio di Google Maps</title>

</head>

<body>
<div> <p>Altra prova</p></div>

 <script>

        var app=window.applicationCache;
        app.addEventListener("cached",function () {

        },false);
        app.addEventListener("checking",function () {

        },false);
        app.addEventListener("downloading",function () {

        },false);
        app.addEventListener("progress",function () {

        },false);
        app.addEventListener("updateready",function () {
            window.location.reload();

        },false);
        app.addEventListener("noupdate",function () {

        },false);

        app.addEventListener("absolete",function () {

        },false);
        app.addEventListener("error",function () {
            alert("errore");
        },false);



 </script>
<script>

    console.log(app);
</script>

</body>
</html>
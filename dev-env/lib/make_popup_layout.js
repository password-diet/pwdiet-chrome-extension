export default function({webpackScript, bodyContent}) {
  const layout = `
<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
     <link rel="stylesheet" href="vendor/css/materialize.min.css">
     <link rel="stylesheet" href="css/popup.css">
  </head>
  <body>
    <div class="container" id='app'></div>

    ${bodyContent}
    ${webpackScript}
     
    <script src="vendor/js/jquery-1.11.3.min.js"></script>
    <script src="vendor/js/materialize.min.js"></script>
  </body>
</html>
`

  return layout;
}

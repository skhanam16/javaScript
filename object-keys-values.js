<!DOCTYPE html>
<html>
    <head>
        <title>
        </title>
    </head>

    <body>
        <p>This is Javascript template</p>

        <script>
      var student =
      {
        name: "Sandip",
        class: "V",
        rollNo :5
      }
      for(var index in student){
        document.write(index + "    "   +  student[index]  + "<br/>")
      }
delete student.rollNo;
// after deletetion
for(var index in student){
  document.write('After deletation: ' +index + "    " +student[index]+ "<br/>")
}

      </script>
    </body>
</html>

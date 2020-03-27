  var lMargin=40; //left margin in mm
  var rMargin=40; //right margin in mm
  var pdfInMM=210;  // width of A4 in mm
function createPDF(){

      //create the jspdf documentf

        var doc = new jsPDF("p","mm","a4");
        // text
        doc.setFontType("bold")
        doc.text("IAESTE India CISMU ",32,11);

        doc.line(90, 9,94,9);
        doc.line(90, 9.1,94,9.1);
        doc.line(90, 8.9,94,8.9);

        doc.text("Fact Sheet for Offer Nomination",98,11);

        doc.text("Academics:",15,28);
        doc.line(15, 29, 44, 29);



        doc.setFontSize(11);
        doc.text("Current field/branch of study:",15,80);
        doc.text("Total no. of semesters in current course:",15,90);
        doc.text("Semester Completed",15,100);
        doc.setFontType("normal");
        doc.text(document.getElementById("branch").value,80,80);
        doc.text(document.getElementById("semesters").value,100,90);
        doc.text(document.getElementById("completed_semester").value,70,100);

        doc.setFontType("bold");
        doc.text("Backlogs (if any):",15,110);
        doc.line(15, 111, 44, 111);
        doc.setFontType("normal");
        doc.text(document.getElementById("backlogs").value,15,120);

     //Offer related Skills
        doc.setFontType("bold");
        doc.text("Offer related skills:",15,125);
        doc.line(15, 126, 50, 126);
        doc.setFontSize(11);
        doc.text("Offer No:",15,140);
        doc.text(document.getElementById("offer").value,30,140);



        doc.text('\u2022' + ' ' + "Languages :",20,150);
        doc.text('\u2022' + ' ' + "Programming languages :",20,170);
        doc.text('\u2022' + ' ' + "Softwares/IDEs :",20,190);

          doc.setFontType("normal");
        var paragraph=document.getElementById("languages").value;
        var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin+10,150,lines);

        var paragraph=document.getElementById("programming_lan").value;
        var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin+25,170,lines);

        var paragraph=document.getElementById("software").value;
        var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin+13,190,lines);

       //box
        doc.line(130,270,194,270);
        doc.line(130,270,130,290);
        doc.line(194,270,194,290);
        doc.line(130, 290,194,290);

        doc.setFontType("normal");
        doc.setFontSize(10);
        doc.text("IAESTE code:",133,275);
        doc.line(157,275,190,275);
        doc.text("(for office use only)",133,288);



        //academics table

        var a= document.getElementById("school_10").value;
        var c= document.getElementById("marks_10").value;
        var b = document.getElementById("year_10").value;
        var d=    document.getElementById("school_12").value;
        var f=    document.getElementById("marks_12").value;
        var e=    document.getElementById("year_12").value;
        var g=    document.getElementById("year_college").value;
        var h=    document.getElementById("mark_cgpa").value;
        var i=    document.getElementById("offer").value;
        doc.autoTable({
          startY: 35 ,
              theme: 'grid',
              lineColor : [0,0,0],
            styles: {fillColor: [255, 255, 255]},
            alternateRowStyles:{0: {fontStyle: 'bold',halign: 'center', fillColor: [255, 255, 255]}},
            columnStyles: {0: {fontStyle: 'bold',halign: 'center', fillColor: [255, 255, 255]},
                            1: {halign: 'center', fillColor: [255, 255, 255]},
                            2: {halign: 'center', fillColor: [255, 255, 255]},
                            3: {halign: 'center', fillColor: [255, 255, 255]}
                          }, // Cells alignment and color
            margin: {top: 10},
            body: [['Level', 'UNIVERSITY', 'YEAR OF COMPLETION','PERCENTAGE or CGPA'], ['Class X',a,b ,c], ['Class XII',d,e,f],['Graduation','Sikkim Manipal Institute of Technology',g,h]]
        })

//next page
        doc.addPage();
        doc.setDrawColor(0, 0, 0);
        doc.setFontType("bold");
        doc.setFontSize(16);
        doc.text("IAESTE India CISMU ",32,11);
        doc.line(90, 9,94,9);
        doc.line(90, 9.1,94,9.1);
        doc.line(90, 8.9,94,8.9);
        doc.text("Fact Sheet for Offer Nomination",98,11);


//box
        doc.line(130,270,194,270);
        doc.line(130,270,130,290);
        doc.line(194,270,194,290);
        doc.line(130, 290,194,290);


        doc.setFontType("normal");
        doc.setFontSize(10);
        doc.text("IAESTE code:",133,275);
        doc.line(157,275,190,275);
        doc.text("(for office use only)",133,288);

        doc.line(100,100,100,100);

        doc.save("CISMU_"+i+".pdf");

}

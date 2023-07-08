// أضف حدث النقر إلى الزر
$("#myButton").click(function() {
    // قائمة الصور المتاحة
    var imageList = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
    
    // إنشاء رقم عشوائي بين 0 و 5 باستخدام دالة Math.random()
    var randomNum = Math.floor(Math.random() * 6);
    
    // تحديد اسم الصورة العشوائية باستخدام الرقم العشوائي وقائمة الصور المتاحة
    var randomImage = imageList[randomNum];
    
    // تحديث مصدر الصورة لعرض الصورة العشوائية
    $("#myImage").attr("src", randomImage);
  });
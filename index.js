
  // 在页面加载完成后执行初始化操作
  window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
      // 配置选项
      loop: true,
      autoplay: {
        delay: 2000, // 1秒
      },
    });
  };
window.addEventListener('load',function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
})
window.addEventListener('load',function() {
  function displayCurrentTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeElement = document.getElementById("current-time");
    timeElement.textContent = hours + ":" + minutes + ":" + seconds;
  }

  setInterval(displayCurrentTime, 1000);
})

 
// 提交

window.addEventListener('load',function() {
  var input = document.querySelector('input');
  var button = document.querySelector('button');
  
  input.addEventListener('focus', function() {
    this.value = ''; // 清空输入框内容
  });
  
  button.addEventListener('click', function() {
    var phoneNumber = input.value.trim();
  
    if (phoneNumber.length === 0 || !/^\d{11}$/.test(phoneNumber)) {
      alert('请输入正确手机号');
    } else {
      input.value = ''; // 清空输入框内容
      alert('已提交'); // 弹出提交消息
    }
  });
})


//轮播
window.addEventListener('load', function() {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
  }

  function nextSlide() {
    var nextSlideIndex = (currentSlide + 1) % slides.length;
    showSlide(nextSlideIndex);
    setTimeout(nextSlide, 1000); // 每隔 1 秒钟切换到下一张幻灯片
  }

  // 启动定时器，开始切换幻灯片
  setTimeout(nextSlide, 100);
});

// 下滑

document.addEventListener('DOMContentLoaded', function() {
  var aboutLink = document.querySelector('a[href="#about"]');
var aboutSection = document.getElementById('about');

aboutLink.addEventListener('click', function(e) {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
});

document.addEventListener('DOMContentLoaded', function() {
  var homeLink = document.getElementById('home-link');
  var slideshowContainer = document.querySelector('.slideshow-container');

  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    slideshowContainer.scrollIntoView({ behavior: 'smooth' });
  });
})


// 跳转
document.addEventListener('DOMContentLoaded', function() {
  var homeLink = document.getElementById('home-link');
  homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = "index.html";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var informationLink = document.getElementById('information-link');
  informationLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = "information.html";
  });
});
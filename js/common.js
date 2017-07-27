

(function($, w) {
  $.utils = {};
  $.utils.queryUrl = function(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  $.utils.validate = {
    mobile: function(v) {
      if ($.trim(v) && (/^[0-9]{11}$/.test(v))) {
        return true;
      } else {
        return false;
      }
    },
    required: function(v) {
      if ($.trim(v)) {
        return true;
      } else {
        return false;
      }
    }
  }
  $.utils.message = {
    mobile: '手机号码格式错误！',
    required: function(msg) {
      return ('"' + msg + '"' + '是必填项！');
    }
  }

  $.utils.post = function(param) {
    $.ajax({
      url: param.url,
      data: param.data,
      dataType: 'json',
      error: function() {
        alert('请求失败！网络错误!');
      },
      success: param.success,
      timeout: 60000,
      type: 'POST'
    });
  };
})(Zepto, window);
(function($, w) {
  if ($.callback) {
    $.callback(function() {
      $('.ball-scale-aysnc').each(function(k, v) {
        var srcs = $(v).data('src'),
          imgtmp = new Image();
        imgtmp.src = srcs;
        imgtmp.style.width = $(v).data('w');
        imgtmp.style.height = $(v).data('h');
        imgtmp.onload = function() {
          $(v).removeClass('ball-scale-aysnc');
          $(v).append(imgtmp);
          imgtmp = null;
        };
      });
    });
  }

  $('.ball-scale').each(function(k, v) {
    var srcs = $(v).data('src'),
      imgtmp = new Image();
    imgtmp.src = srcs;
    imgtmp.style.width = $(v).data('w');
    imgtmp.style.height = $(v).data('h');
    imgtmp.onload = function() {
      $(v).removeClass('ball-scale');
      $(v).append(imgtmp);
      imgtmp = null;
    };
  });
})(Zepto, window);

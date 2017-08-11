

(function($, w) {
  $.utils = {};
  $.utils.queryUrl = function(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  $.utils.dateParser = function(ct, format) {
    if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(ct)) {
        return '';
    }

    var tmpArr = ct.split(' '),
        tmpDay = tmpArr[0].split('-'),
        tmpTime = tmpArr[1].split(':');
    var tmpDate = new Date(tmpDay[0], (parseInt(tmpDay[1]) - 1), tmpDay[2], tmpTime[0], tmpTime[1], tmpTime[2]);
    var newDate = new Date();

    var __methods = ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds'], __flag = 0, __val = 0;
    for (var i = 0; i < 6; i ++) {
        var tmp = newDate[__methods[i]]() - tmpDate[__methods[i]]();
        if (tmp > 0) {
            __flag = i;
            __val = tmp;
            break;
        }
    }

    if (format && Array.isArray(format) && format.length === 6) {
        return format[__flag].replace('@', __val);
    }
    return '';
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
